/* eslint-disable */
import { Avatar } from 'antd';
import React from 'react'
import {
    UserOutlined,
  } from "@ant-design/icons";
function IncomMSG(props) {
  const If_image = (ext) => {
    const e = ext.toLowerCase()
    if((e == "jpg" ||e == "jpeg" ||e == "png" || e == 'gif'))
    return false
   else return true
    };
      return (
        <div className="incoming_msg">
          <div className="incoming_msg_img">
            <Avatar size={34} icon={<UserOutlined />} />
          </div>
          <div className="received_msg">
            <div className="received_withd_msg">
            {props.message.file ? (
              <div className="File_item file_rec">
               {If_image(props.message.file.split(".").pop()) && <p
                  onClick={() =>
                    window.open(
                      `http://localhost:5000/uploads/${props.message.file}`,
                      "_blank"
                    )
                  }
                >
                  {props.message.file}{" "}
                </p>}
                {!If_image(props.message.file.split(".").pop()) &&  (
                  <img
                  onClick={() =>
                    window.open(
                      `http://localhost:5000/uploads/${props.message.file}`,
                      "_blank"
                    )
                  }
                    src={`http://localhost:5000/uploads/${props.message.file}`}
                    alt=""
                  />
                )}
              </div>
            ) : (
              <p> {props.message.text} </p>
            )}
            </div>
          </div>
        </div>
      );
}

export default IncomMSG