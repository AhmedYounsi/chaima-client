import React from 'react';
import './EventCard.scss';
import { Menu, Button, Dropdown, Space, Divider, Avatar } from 'antd';
import {
  MoreOutlined,
  EnvironmentOutlined,
  MessageOutlined,
  LikeOutlined,
} from '@ant-design/icons';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

import img from '../../assets/images/1.jpg';

function EventCard() {
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
  return (
    <div className="card-event">
      <div className="header-event">
        <div className="first-child">
          <div className="box-date">12</div>
          <div className="itemsEvent">
            <span className="titleEvent">title</span>

            <div className="locationEvent">
              <Space>
                <EnvironmentOutlined /> Megrine
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
        <img className="imgEvent" src={img} />

        <div className="descriptionEvent">hhhhhhhhhhhhhhh</div>
      </div>
      <Divider />

      <div className="footer-event">
        <div className="particpant">
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              cursor: 'pointer',
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              K
            </Avatar>
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
            <Avatar
              style={{
                backgroundColor: '#1890ff',
              }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        </div>
        <div className="iconEvent">
          <Space>
            <MessageOutlined /> 3
          </Space>
          <Divider type="vertical"></Divider>
          <Space>
            <LikeOutlined /> 3
          </Space>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
