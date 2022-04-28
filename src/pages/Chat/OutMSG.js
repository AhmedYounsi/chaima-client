/* eslint-disable */

import React from 'react'
import host from '../../Utils/host';

function OutMSG(props) {
    const If_image = (ext) => {
      const e = ext.toLowerCase()
      if((e == "jpg" ||e == "jpeg" ||e == "png" || e == 'gif'))
      return false
     else return true
      };
  return (
    <div className="outgoing_msg ">
    <div className="sent_msg">
      {props.message.file ? (
        <div className="File_item">
         { If_image(props.message.file.split(".").pop()) && <p
            onClick={() =>
              window.open(
                `${host}/uploads/${props.message.file}`,
                "_blank"
              )
            }
          >
            {props.message.file}{" "}
          </p>}
          {!If_image(props.message.file.split(".").pop()) && (
            <img
            onClick={() =>
              window.open(
                `${host}/uploads/${props.message.file}`,
                "_blank"
              )
            }
              src={`${host}/uploads/${props.message.file}`}
              alt=""
            />
          )}
        </div>
      ) : (
        <p> {props.message.text} </p>
      )}
    </div>
  </div>
  )
}

export default OutMSG