import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Menu, Button, Dropdown } from 'antd';

function DetailsEvent() {
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
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">Details</div>
        <div className="header-left">
          <Link to="/events">
            <Button icon={<ArrowLeftOutlined />} type="link"></Button>
          </Link>
        </div>
        <div className="header-right">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button type="dashed" shape="circle" icon={<MoreOutlined />} />
          </Dropdown>
        </div>
      </div>
      <div className="site-layout-content"></div>
    </div>
  );
}

export default DetailsEvent;
