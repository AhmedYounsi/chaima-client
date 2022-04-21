/* eslint-disable */
import React, { useState } from 'react';
import { Input, Modal, Form, Select, Button, Tooltip } from 'antd';
import { Tab, Tabs } from '@blueprintjs/core';
import ListUser from './ListEmployees';
import Teams from '../Teams/Teams';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Employees() {
  const [Selected, setSelected] = useState('1');
  const [visible, setVisible] = useState();
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const [form] = Form.useForm();
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (values) => {
    console.log('Finish:', values);
  };
  const onOk = () => {
    form.submit();
  };

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">
          <div className="bp4-large">
            <Tabs
              animate={true}
              id="TabsExample"
              onChange={(e) => setSelected(e)}
              selectedTabId={Selected}
            >
              <Tab className="bp4-tab" id="1" title="Employees" />
              <Tab className="bp4-tab" id="2" title="Teams" />
              <Tabs.Expander />
            </Tabs>
          </div>
        </div>
        <div className="header-right">
          {(function () {
            switch (Selected) {
              case '1':
                return (
                  <Tooltip title="Add New Employe">
                    <Button
                      style={{ height: '35px' }}
                      shape="round"
                      type="primary"
                      ghost
                      icon={<PlusOutlined />}
                    >
                      <Link to="/employees/newUser"> New Employees </Link>
                    </Button>
                  </Tooltip>
                );

              case '2':
                return (
                  <Tooltip title="Add New Absence Type">
                    <Button
                      style={{ height: '35px' }}
                      shape="round"
                      type="primary"
                      ghost
                      icon={<PlusOutlined />}
                      onClick={() => showModal()}
                    >
                      Add New Team
                    </Button>
                  </Tooltip>
                );

              default:
                break;
            }
          })()}
        </div>
      </div>
      {(function () {
        switch (Selected) {
          case '1':
            return <ListUser />;

          case '2':
            return <Teams />;

          default:
            break;
        }
      })()}

      <Modal
        title="Add New Team"
        visible={visible}
        onOk={onOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="userForm" onFinish={onFinish}>
          <Form.Item
            name={'name'}
            label="Team Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item
            name={'team lead'}
            label="Team Lead"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select defaultValue="lucy" allowClear>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={'members'}
            label="Members"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={handleChange}
            >
              <Option value="cha">chaima</Option>
              <Option value="ch">chaima</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Employees;
