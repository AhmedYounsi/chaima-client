/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import { getUsers } from "../../actions/user";
import { Input, Button, Tabs, Spin, Avatar } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { LoadingAction } from "../../actions/LoadingAction";
import { SendOutlined, MessageOutlined, UserOutlined,CheckOutlined} from "@ant-design/icons";

const { TabPane } = Tabs;
import axios from "axios";
import ConversationItem from "./ConversationItem";
import host from "../../Utils/host";
function Chat() {
  const inputEl = useRef(null);
  const UserReducer = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  const [Employee, setEmployee] = useState([]);
  const [MessageTo, setMessageTo] = useState(null);
  const [Messages, setMessages] = useState([]);
  const [message, setmessage] = useState("");
  const [RoomID, setRoomID] = useState("");
  const [Converations, setConverations] = useState([]);
  const [UserToSend, setUserToSend] = useState(null);
  const [SingleConv, setSingleConv] = useState([]);
  const [SeenVal, setSeenVal] = useState(false)
  const socket = io(host);
  const getAllUser = async () => {
    const res = await getUsers();
    const arr = res.data.filter((el) => el._id != UserReducer._id);
    if (res.status == 200) setEmployee(arr);
  };

  useEffect(() => {
    getAllUser();
    GetConversation();
    socket.on(`message${UserReducer._id}`, (data) => {
      setConverations(data);
      const el = document.querySelectorAll(".ant-tabs-tab");
      el[1].click();
    });
    return () => {
      socket.removeAllListeners();
    };
  }, []);

  const GetConversation = async () => {
    const res = await axios.post(`${host}get_conv`, {
      id: UserReducer._id,
    });
    setConverations(res.data);
  };

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
    ].join("-");
  }

  useEffect(() => {
    const element = document.querySelector(".message-list");
    if (!element) return;
    element.scrollTop = element.scrollHeight;
  }, [Messages,SingleConv]);

  useEffect(() => {
    if (!MessageTo) {
      return;
    }

    socket.on("joining_room", (data) => {
       
      setRoomID(data._id);
      if (data.messages.length > 0) {
        const el = document.querySelectorAll(".ant-tabs-tab");
        el[1].click();
      }
      Seen(data)
      setSingleConv(data);
      setMessages(data.messages);
    });

    socket.emit("JoinRoom", { Me: UserReducer, user_id: MessageTo });

    return () => {
      socket.removeAllListeners();
    };
  }, [MessageTo]);

  useEffect(() => {
    socket.on("ResendMessage", (data) => {
      setSeenVal(false)
      setSingleConv(data)
      setMessages(data.messages);
    });

    socket.on("Seen", (data) => {
      GetConversation()
      setSeenVal(true)
      // let i = Converations.findIndex((el) => el._id == data._id);
      // setSingleConv([])
      // if (i == -1) return;
      // let arr = [...Converations];
      // arr[i].seen = true;
      // setConverations(arr);
      // console.log(arr)
      setSingleConv(data)
    
    });
  }, [socket]);

  const SelectMessage = (el) => {
    setUserToSend(el.name + " " + el.lastName);
    setMessageTo(el._id);
  };

  const SelectConversation = (el) => {
    const name = UserReducer.name + " " + UserReducer.lastName;
    const username = el.usernames.filter((el) => el != name);
    const id = el.users.filter((el) => el != UserReducer._id);
    setUserToSend(username[0]);
    setMessageTo(id[0]);
  };

  const Seen = (data) => {
    if (data.lastsender != UserReducer._id && !data.seen )
      socket.emit("Seen", data._id);
  };

  const Send = (e) => {
    e.preventDefault();
    if (inputEl.current.value.length == 0 || Loading) return;
    Seen(SingleConv)
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = time + " | " + formatDate(new Date());
    const msg = {
      text: inputEl.current.value,
      username: UserReducer.name + " " + UserReducer.lastName,
      user_id: UserReducer._id,
      dateTime: dateTime,
    };
    setSeenVal(false)
    socket.emit("SendMessage", {
      msg,
      UserToSend,
      MessageTo,
      RoomID,
    });
    inputEl.current.value = "";
    inputEl.current.focus();
  };

  const ChatOne = (props) => {
    return (
      <div
        className={
          "chat_list " + (props.employee._id == MessageTo ? "active_user" : "")
        }
      >
        <div className="chat_people">
          <div className="chat_img">
            {" "}
            <Avatar className="user_avatar" size={45} icon={<UserOutlined />} />
          </div>
          <div className="chat_ib">
            <h5>
              {props.employee.name + " " + props.employee.lastName}
              {/* <span className="chat_date">Dec 25</span> */}
            </h5>
            <p>New message</p>
          </div>
        </div>
      </div>
    );
  };

  const IncommingMSG = (props) => {
    return (
      <div className="incoming_msg">
        <div className="incoming_msg_img">
          <Avatar size={34} icon={<UserOutlined />} />
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p> {props.message.text} </p>
          </div>
        </div>
      </div>
    );
  };

  const OutgoingMSG = (props) => {
    return (
      <div className="outgoing_msg ">
        <div className="sent_msg">
          <p> {props.message.text} </p>
        </div>
      </div>
    );
  };

  const MessageList = ({ el }) => {
    if (el.user_id == UserReducer._id) return <OutgoingMSG message={el} />;
    if (el.user_id != UserReducer._id) return <IncommingMSG message={el} />;
  };

  const DateFormat = (index) => {
    if (index > 0 && Messages[index].user_id == Messages[index - 1].user_id)
      return false;
    return true;
  };

  return (
    <div className="Chat-container">
      <div className="users-chat">
        <Tabs defaultActiveKey="1">
          <TabPane tab="All Employees" key="1">
            {Employee.map((el, index) => {
              return (
                <div key={index} onClick={() => SelectMessage(el)}>
                  <ChatOne employee={el} />
                </div>
              );
            })}
          </TabPane>
          <TabPane tab={Converations.length + " Conversation"} key="2">
            {Converations.map((el, index) => {
              return (
                <div key={index} onClick={() => SelectConversation(el)}>
                  <ConversationItem MessageTo={MessageTo} employee={el} />
                </div>
              );
            })}
          </TabPane>
        </Tabs>
      </div>
      <div className="messages-chat">
        {MessageTo && (
          <>
            <h3 className="chat_name">
              <Avatar size={30} icon={<UserOutlined />} />
              {UserToSend}{" "}
            </h3>
            <div className="message-list">
              {Messages.length > 0 &&
                Messages.map((el, index) => {
                  return (
                    <div key={index}>
                      {DateFormat(index) && (
                        <span className="time_date"> {el.dateTime} </span>
                      )}
                      <MessageList el={el} />
                    </div>
                  );
                })}
            
            { SeenVal && SingleConv.lastsender == UserReducer._id &&
             <div className="seen">
                <CheckOutlined />
                  <span> Seen </span>
              </div>}
           
            </div>
            <div className="input-chat">
              <form className="input-box">
                <input
                  onClick={()=> Seen(SingleConv)}
                  ref={inputEl}
                  placeholder="Message ..."
                  type="text"
                />

                {!Loading ? (
                  <button onClick={(e) => Send(e)}>
                    <SendOutlined />
                  </button>
                ) : (
                  <button>
                    <Spin />
                  </button>
                )}
              </form>
            </div>
          </>
        )}
        {!MessageTo && (
          <div className="inbox">
            <MessageOutlined />
            Inbox
          </div>
        )}
      </div>
    </div>
  );
}

export default Chat;
