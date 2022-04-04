import React from 'react';
import { Card, Menu, Button, Dropdown } from 'antd';
import './WorkPlacesCard.scss';
import { SettingOutlined } from '@ant-design/icons';

function WorkPlacesCard(props) {
  const menu = (
    <Menu>
      <Menu.Item key="M1">
        <Button type="text" onClick={() => props.setUpdatedOffice(props.item)}>
          Edit WorkSpace
        </Button>
      </Menu.Item>
      <Menu.Item key="M2">
        <Button
          type="text"
          onClick={() => props.DeleteWorkPlace(props.item._id)}
        >
          Remove WorkSpace
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <Card
      className="ant-card"
      actions={[<Button type="link">See WorkSpace</Button>]}
    >
      <div className="illustration_location"></div>
      <div className="action">
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <Button type="dashed" shape="circle" icon={<SettingOutlined />} />
        </Dropdown>
      </div>
      <div className="content">
        <h2> {props.item.name} </h2>
        <h4> {props.item.country}</h4>
        <h4> {props.item.employees.length + ' Employees'}</h4>
      </div>
    </Card>
  );
}

export default WorkPlacesCard;
