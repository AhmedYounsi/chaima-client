/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import "./Chat.scss";
import { getUsers } from "../../actions/user";
import { Input, Button, Tabs, Spin } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { LoadingAction } from "../../actions/LoadingAction";
import { SendOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
import axios from "axios";
import ConversationItem from "./ConversationItem";

function Chat() {
  const inputEl = useRef(null);
  const UserReducer = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false)
  const [Employee, setEmployee] = useState([]);
  const [MessageTo, setMessageTo] = useState(null);
  const [Messages, setMessages] = useState([]);
  const [message, setmessage] = useState("");
  const [RoomID, setRoomID] = useState("");
  const [Converations, setConverations] = useState([]);
  const [UserToSend, setUserToSend] = useState(null);
  const [SingleConv, setSingleConv] = useState([])
  const socket = io("http://localhost:5000/");
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
    const res = await axios.post("http://localhost:5000/get_conv", {
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
  }, [Messages]);

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
      console.log(data)
      setSingleConv(data)
      setMessages(data.messages);
      LoadingAction(false, dispatch);
    });
    // LoadingAction(true, dispatch);
    socket.emit("JoinRoom", { Me: UserReducer, user_id: MessageTo });
    socket.on("ResendMessage", (data) => {
      setLoading(false)
      setMessages(data);
    });
    socket.on("addmessage", (message) => {
      console.log(message)
    });


     

    return () => {
      socket.removeAllListeners();
    };
  }, [MessageTo]);

 
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
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />{" "}
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
          {" "}
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />{" "}
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p> {props.message.text} </p>
            <span className="time_date"> {props.message.dateTime} </span>{" "}
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
          <span className="time_date"> {props.message.dateTime} </span>{" "}
        </div>
      </div>
    );
  };

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

  const Seen = () =>{
  if(SingleConv.lastsender != UserReducer._id && !SingleConv.seen)
    socket.emit("Seen",{conv : SingleConv,id :UserReducer._id})
    socket.on("Seen",seen_conv=>{   
   setConverations(seen_conv)
     })
  }

  const Send = (e) => {
    e.preventDefault();
    if (message.length == 0 || Loading) return;
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = time + " | " + formatDate(new Date());
    setLoading(true)
    socket.emit("SendMessage", {
      message,
      user: UserReducer,
      RoomID,
      dateTime,
      UserToSend,
      MessageTo,
    });
    setmessage("");
    inputEl.current.focus();
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
            <div className="message-list">
              {Messages.length > 0 &&
                Messages.map((el, index) => {
                  if (el.user_id == UserReducer._id)
                    return <OutgoingMSG message={el} key={index} />;
                  if (el.user_id != UserReducer._id)
                    return <IncommingMSG message={el} key={index} />;
                })}
            </div>
            <div className="input-chat">
              <form className="input-box">
                <input
                  onClick={Seen}
                  ref={inputEl}
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  placeholder="Message ..."
                  type="text"
                />

              {!Loading ?  <button onClick={(e) => Send(e)}>
                  <SendOutlined />
                </button> : <button>
                <Spin />
                </button>}
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
