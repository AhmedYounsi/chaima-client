import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../../components/Input/Input.scss';
import { Row, Col, Input, DatePicker, Form } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const { TextArea } = Input;

function GeneralInfo() {
  return (
    <Form>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input size="large" placeholder="First Name" type="text" />
        </Col>
        <Col span={12}>
          <Input
            className="custom-input"
            size="large"
            placeholder={'Last Name'}
            type="text"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Input
          className="custom-input"
          size="large"
          placeholder={'Email'}
          type="email"
        />
      </Row>

      <br />
      <Row>
        <TextArea rows={4} placeholder={'Address'} type={'text'} />
      </Row>
      <br />
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <DatePicker
            className="custom-input"
            size="large"
            placeholder={'Date of Birth'}
          />
        </Col>
        <Col span={12}>
          <PhoneInput
            className="input-phone"
            //onFocus={() => focus_phone()}
            //onBlur={() => blur_phone()}
            enableLongNumbers={false}
            country={'fr'}
            placeholder="Number Phone"
            //value={Tel}
            // onChange={(phone) => setTel(phone)}
          />
        </Col>
      </Row>
    </Form>
  );
}

export default GeneralInfo;
