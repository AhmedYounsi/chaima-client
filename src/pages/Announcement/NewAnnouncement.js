import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { TextArea } = Input;

function NewAnnouncement() {
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
      <div className="site-layout-content">
        <Form>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item>
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <TextArea rows={2} placeholder={'Description'} type={'text'} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item></Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default NewAnnouncement;
