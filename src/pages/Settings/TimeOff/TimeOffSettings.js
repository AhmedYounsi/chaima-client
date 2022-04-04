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

const data = ['Holiday', 'Seak Leave', 'Leave without Pay'];

function TimeOffSettings() {
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
      <Menu.Item>
        <Button type="text">Edit Type</Button>
      </Menu.Item>
      <Menu.Item>
        <Button type="text">Remove Type</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Absence types</span>

            <br />
            <span className="description-text">
              Manage the types of absences within your company so your employees
              can select them when requesting time off{' '}
            </span>
            <div className="line radical"></div>
            <br />
            <br />

            <Tooltip title="Add New Absence Type">
              <Button
                style={{ height: '40px' }}
                shape="round"
                type="primary"
                ghost
                icon={<PlusOutlined />}
                onClick={showModal}
              >
                Add New Absence Type
              </Button>
            </Tooltip>
          </div>
          <Modal
            className="ant-modal"
            title="Add new time off policy"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Form layout={'vertical'}>
              <Form.Item label=" Policy name">
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

export default TimeOffSettings;
