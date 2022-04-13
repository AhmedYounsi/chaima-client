/* eslint-disable */
import React from 'react';
import './Announcement.scss';
import { Menu, Button, Dropdown, Space, Divider, Avatar } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';

function AnnouncementCard() {
  const menu = (
    <Menu>
      <Menu.Item key="M1">
        <Button type="text">Edit Announcement</Button>
      </Menu.Item>
      <Menu.Item key="M2">
        <Button type="text">Remove Announcement</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="card-announcement">
      <div className="header-announcement">
        <div className="first-child">
          {' '}
          <Avatar shape="square" icon={<UserOutlined />} />
          <div className="items">
            <span className="postedBy">chaima dey</span>
            <span className="date">posted now</span>
          </div>
        </div>
        <div className="last-child ">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button type="dashed" shape="circle" icon={<MoreOutlined />} />
          </Dropdown>
        </div>
      </div>
      <Divider></Divider>
      <div className="content-announcement">
        <span className="title-announcement">Ramadan</span>
        <span className="description-announcement">
          Ramadan moubarak hhhh hhhhhhh hhhhhh hhhhhhhhhhhhhh hhhhhhhhhh hhhhhhh
        </span>
      </div>
    </div>
  );
}

export default AnnouncementCard;
