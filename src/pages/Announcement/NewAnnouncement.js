import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { Option } = Select;

function NewAnnouncement() {
  const [form] = Form.useForm();
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">New Announcement</div>
        <div className="header-left">
          <Link to="/events">
            <Button icon={<ArrowLeftOutlined />} type="link"></Button>
          </Link>
        </div>
      </div>
      <Form form={form} layout="vertical">
        <div className="pad">
          <div className="padForm">
            <div className="header-pad" style={{ width: '60%' }}>
              <Form.Item
                name={'title'}
                val
                label="Title"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  className=""
                  placeholder={'Title'}
                  type={'text'}
                ></Input>
              </Form.Item>
              <Form.Item
                name={'description'}
                val
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea
                  className=""
                  rows={2}
                  placeholder={'Description'}
                  type={'text'}
                />
              </Form.Item>
            </div>
            <div className="form-pad">
              <Form.Item
                name={'community'}
                val
                label="Select community"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select defaultValue="1" allowClear>
                  <Option value="1">All</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name={'members'}
                val
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
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default NewAnnouncement;
