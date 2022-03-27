import React, { useState } from 'react';
import {
  Divider,
  PageHeader,
  Button,
  Descriptions,
  Tooltip,
  List,
  Dropdown,
  Menu,
  Modal,
  Form,
  Input,
} from 'antd';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import './../Modal.scss';

const data = ['Contract', 'fiche de paie'];
function DocumentSettings() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="M1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Edit Folder
        </a>
      </Menu.Item>
      <Menu.Item key="M2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Remove Folder
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Divider></Divider>
      <PageHeader
        key="P1"
        className="site-page-header"
        ghost={false}
        title="Employee directory        "
        // subTitle="Configure WorkPlaces"
        extra={[
          <Tooltip title="Add Folder">
            <Button
              type="dashed"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={showModal}
            />
          </Tooltip>,
          <Modal
            className="ant-modal"
            title="Add a new folder to organize your employees' documents"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Form layout={'vertical'}>
              <Form.Item label="Folder name">
                <Input className="custom-input" />
              </Form.Item>
            </Form>
          </Modal>,
        ]}
      >
        <Descriptions Descriptions size="middle" column={3}>
          <Descriptions.Item style={{ width: '10%' }}>
            <p>Create folders to organize employee documents.</p>
          </Descriptions.Item>
          <Descriptions.Item></Descriptions.Item>
          <Descriptions.Item>
            <List
              size="large"
              bordered
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item
                  key={index}
                  actions={[
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                      <Button
                        type="dashed"
                        shape="circle"
                        icon={<SettingOutlined />}
                      />
                    </Dropdown>,
                  ]}
                >
                  {item}
                </List.Item>
              )}
            />
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

export default DocumentSettings;
