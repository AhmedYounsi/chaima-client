/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux';
import {UserOutlined} from "@ant-design/icons";
import { Avatar, Badge } from 'antd';
function ConversationItem(props) {
    const UserReducer = useSelector((state) => state.UserReducer);
    const SelectedConversation = (el) =>{
        const id = el.users.filter(el => el != UserReducer._id)
        if(id[0] == props.MessageTo)
        return true
      }
      const NameConv = (el)=>{      
        const name = UserReducer.name+" "+UserReducer.lastName
        const username = el.usernames.filter(el=> el != name)
        return username[0]
    }

    const GetLastMessage =(el) =>{
       return (el.messages[el.messages.length - 1].text)
    }
  const NewMessage = (el) =>{
   if(!el.seen && el.lastsender != UserReducer._id)
   return( <Badge className='new-msg' status="error" />)
  }
   
    return (
        <div
          className={
            "chat_list " + (SelectedConversation(props.employee) ? "active_user" : "")
          } 
        >
          <div className="chat_people">
            <div className="chat_img">
            <Avatar className="user_avatar" size={45} icon={<UserOutlined />} />
            </div>
            <div className="chat_ib">
              <h5>
                {NameConv(props.employee)}
                {/* <span className="chat_date">Dec 25</span> */}
                {NewMessage(props.employee)}
              </h5>
              <p className='message-display'> 
                  {props.employee.lastsender == UserReducer._id && "You : "}
                   {GetLastMessage(props.employee)} </p>
            </div>
          </div>
        </div>
      );
}

export default ConversationItem