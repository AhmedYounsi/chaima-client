import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import axios from 'axios';
import host from '../../Utils/host';

const ModalUplads = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
 const [Image, setImage] = useState(null)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
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
    const res = await axios.post(`${host}upload_chat`,formData)
    if(res.status == 200)
    props.SaveFile(res.data)
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <input
                onChange={handleFileChange}
                type="file"
                name="file"
              />
              <Button onClick={Add_Event} >Uploads</Button>
      </Modal>
    </>
  );
};

export default ModalUplads;