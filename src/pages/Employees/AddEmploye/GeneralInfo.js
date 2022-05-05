/* eslint-disable */
import React from 'react';
import '../../../components/Input/Input.scss';
import { Row, Col, Input, DatePicker, Form } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const { TextArea } = Input;

function GeneralInfo(props) {
  return (
    <Form layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            name={'First Name'}
            label="First Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              className=""
              size="large"
              placeholder="First Name"
              type="text"
              onChange={(e) => props.HandleFirstName(e.target.value)}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={'Last Name'}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              className=""
              size="large"
              placeholder={'Last Name'}
              type="text"
              onChange={(e) => props.HandleLastname(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name={'Email'}
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          className=""
          size="large"
          placeholder={'Email'}
          type="email"
          value={props.adresseMail}
          onChange={(e) => props.HandleEmail(e.target.value)}
        />
      </Form.Item>

      <Form.Item name={'Adress'} label="Adress">
        <TextArea
          rows={4}
          placeholder={'Address'}
          type={'text'}
          onChange={(e) => props.HandleAdresse(e.target.value)}
        />
      </Form.Item>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item name={'Date of Birth'} label="Date of Birth">
            <DatePicker
              className=""
              size="large"
              placeholder={'Date of Birth'}
              onChange={(e) => props.HandleBirthday(e)}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name={'Number Phone'} label="Number Phone">
            <PhoneInput
              className="input-phone"
              enableLongNumbers={false}
              country={'tn'}
              placeholder="Number Phone"
              onChange={(e) => props.HandleTel(e)}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default GeneralInfo;
