import React from 'react';
import { Form, Input, DatePicker, BackTop } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';

function GeneralInfo() {
  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="section">
        <div className="pad">
          <div className="padForm">
            <div className="header-pad">
              <span className="title-text">General information</span>

              <br />
              <span className="description-text">
                Fill in your personal data
              </span>
              <div className="line radical"></div>
            </div>
            <div className="form-pad">
              <Form layout="vertical">
                <Form.Item label="First Name">
                  <Input
                    className="custom-input"
                    size="large"
                    placeholder={'FirstName'}
                  />
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input
                    className="custom-input"
                    size="large"
                    placeholder={'Last Name'}
                  />
                </Form.Item>
                <Form.Item label="Date Of Birth">
                  <DatePicker
                    className="custom-input"
                    size="large"
                    placeholder={'Date of Birth'}
                  />
                </Form.Item>
                <Form.Item label="Phone Number">
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
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="pad">
          <div className="padForm">
            <div className="header-pad">
              <span className="title-text">Change password</span>
              <span className="description-text">
                We recommend you to change your password often, it will make you
                feel better about your security!
              </span>
              <div className="line radical"></div>
            </div>
            <div className="form-pad">
              <Form layout="vertical">
                <Form.Item label="Old Password">
                  <Input.Password
                    className="custom-input"
                    size="large"
                    placeholder={'Old Password'}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item label="New Password">
                  <Input.Password
                    className="custom-input"
                    size="large"
                    placeholder={'New Password'}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
                <Form.Item label="Confirm Password">
                  <Input.Password
                    className="custom-input"
                    size="large"
                    placeholder={'Confirm Password'}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />{' '}
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
