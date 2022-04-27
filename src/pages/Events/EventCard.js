/* eslint-disable */
import React from "react";
import "./EventCard.scss";
import { Menu, Button, Dropdown, Space, Divider, Avatar } from "antd";
import {
  MoreOutlined,
  EnvironmentOutlined,
  MessageOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";

import img from "../../assets/images/1.jpg";

function EventCard(props) {
  const menu = (
    <Menu>
      <Menu.Item key="M1">
        <Button type="text">Edit Event</Button>
      </Menu.Item>
      <Menu.Item key="M2">
        <Button type="text">Remove Event</Button>
      </Menu.Item>
    </Menu>
  );

  const GetImage = (image) => {
    if (image) return `http://localhost:5000/uploads/${image}`;
    else return img;
  };
  return (
    <div className="card-event">
      <div className="header-event">
        <div className="first-child">
          <div className="box-date"> {props.index} </div>
          <div className="itemsEvent">
            <span className="titleEvent"> {props.event.title} </span>
            <div className="locationEvent">
              <Space>
                <EnvironmentOutlined /> {props.event.adress}
              </Space>
            </div>
          </div>
        </div>
        <div className="last-child ">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button type="dashed" shape="circle" icon={<MoreOutlined />} />
          </Dropdown>
        </div>
      </div>
      <div className="content-event">
      <div className="event_image">
      <img className="imgEvent" src={GetImage(props.event.image)} />
      </div>

        <div className="descriptionEvent"> {props.event.desc} </div>
      </div>
      <Divider />

      <div className="footer-event">
        <div className="particpant">
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar
              style={{
                backgroundColor: "#f56a00",
              }}
            >
              K
            </Avatar>
            <Avatar
              style={{
                backgroundColor: "#87d068",
              }}
              icon={<UserOutlined />}
            />
            <Avatar
              style={{
                backgroundColor: "#1890ff",
              }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </div>
        <div className="iconEvent">
          <Space>
            <MessageOutlined /> {"0"}
          </Space>
          <Divider type="vertical"></Divider>
          <Space>
            <LikeOutlined /> {props.event.likes.length}
          </Space>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
