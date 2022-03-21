import React from 'react';
import { Form, Row, Col, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

function JobInformation() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <div>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Row>
          <Col span={12}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Last Name"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="Last Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default JobInformation;
