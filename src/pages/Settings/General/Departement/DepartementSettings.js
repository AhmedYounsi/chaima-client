import React from 'react';
import { Collapse, Dropdown, Menu, Button, List } from 'antd';
import {
  SettingOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';

const { Panel } = Collapse;

function DepartementSettings() {
  const data = [
    {
      title: 'Rh',
    },
    {
      title: 'Finance',
    },
    {
      title: 'Marketing',
    },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Edit Name Departement
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Remove Departement
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="https://www.aliyun.com">Add new Post Title</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Collapse defaultActiveKey={['1']} expandIconPosition={'left'}>
        <Panel
          header="Departement"
          key="1"
          extra={
            <Dropdown overlay={menu} placement="bottomRight" arrow>
              <Button shape="circle" icon={<SettingOutlined />} />
            </Dropdown>
          }
        >
          <div>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item
                  key={index}
                  actions={[
                    <Button type="link" icon={<EditOutlined />} />,
                    <Button type="link" danger icon={<DeleteOutlined />} />,
                  ]}
                >
                  <List.Item.Meta title={item.title} />
                </List.Item>
              )}
            />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
export default DepartementSettings;
