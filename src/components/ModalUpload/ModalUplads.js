/* eslint-disable */
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios';
import host from '../../Utils/host';
import { useDispatch } from 'react-redux';
import {FileAddFilled} from "@ant-design/icons";
import api from '../../Utils/api';
const ModalUplads = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
 const [Image, setImage] = useState(null)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    Add_Event()
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  const Add_Event = async () => {

 
    let formData = new FormData();
   
    formData.append("file", Image.data);
    formData.append("User",   JSON.stringify(props.UserReducer));
    formData.append("Room",   props.RoomID);
    formData.append("UserToSend",   props.UserToSend);
    const res = await api.post(`upload_chat`,formData)
    if(res.status == 200)
   {
    props.SaveFile(res.data)
    setIsModalVisible(false)
   }
   else{
    useDispatch({
      type: 'SetAlert',
      payload: { message: "Error from server", type: 'error' }
    });
   }
  };
  return (
    <>
    
      <FileAddFilled className='File_icon' onClick={showModal} />
      <Modal title="Upload files" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <input
                onChange={handleFileChange}
                type="file"
                name="file"
              />
            
      </Modal>
    </>
  );
};

export default ModalUplads;