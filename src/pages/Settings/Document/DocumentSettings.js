import React, { useState } from 'react';
import {
  Button,
  BackTop,
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
        <Button type="text">Edit Folder</Button>
      </Menu.Item>
      <Menu.Item key="M2">
        <Button type="text">Remove Folder</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Employee directory </span>

            <br />
            <span className="description-text">
              Create folders to organize employee documents.
            </span>
            <div className="line radical"></div>
            <br />
            <br />

            <Tooltip title="Add new type directory">
              <Button
                style={{ height: '40px' }}
                shape="round"
                type="primary"
                ghost
                icon={<PlusOutlined />}
                onClick={showModal}
              >
                Add New Type
              </Button>
            </Tooltip>
          </div>

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
          </Modal>
          <div className="form-pad-2">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentSettings;
