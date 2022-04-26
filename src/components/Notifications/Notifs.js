/* eslint-disable */
import React, { useEffect } from 'react'
import { MessageOutlined } from '@ant-design/icons';
import { Button, notification, Space,Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import host from "../../Utils/host";
import io from "socket.io-client";
import { useSelector } from 'react-redux';
const socket = io(host);
function Notifs() {
    const UserReducer = useSelector((state) => state.UserReducer);
    const navigate = useNavigate();
    useEffect(() => {
        socket.on(`notifMessage${UserReducer._id}`, (data) => {
          openNotification(data)
        });
      }, [])
    
    
      const openNotification = (data) => {
        notification.open({
          message: (
            <p>{`New message from `}
            <b> {data} </b>
            </p>
          ),
            duration:'2',
            icon:(<MessageOutlined className="notif_icon_msg" />),
            onClick: () => {
              navigate("/chat")
            },
        });
      };
  return (
    <div></div>
  )
}

export default Notifs