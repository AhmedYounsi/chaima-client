/* eslint-disable */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input, DatePicker, BackTop, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import PhoneInput from 'react-phone-input-2';
import { UpdateUser, UpdatePassword } from '../../actions/user';

function GeneralInfo() {
  const UserReducer = useSelector((state) => state.UserReducer);
  const [Name, setName] = useState(UserReducer && UserReducer.name);
  const [LastName, setLastName] = useState(UserReducer && UserReducer.lastName);
  const [Tel, setTel] = useState(UserReducer && UserReducer.tel);
  const [Email, setEmail] = useState(UserReducer && UserReducer.email);
  const [OldPassword, setOldPassword] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const Update = async () => {
    const id = UserReducer._id;
    const user = { id, Name, LastName, Tel };
    await UpdateUser(user, dispatch);
  };
  const UpdatePass = async () => {
    if (NewPassword != ConfirmPassword) {
      alert('Error');
      setConfirmPassword('');
      setNewPassword('');
      return;
    }
    const id = UserReducer._id;
    const data = { id, OldPassword, NewPassword };

    const res = await UpdatePassword(data, dispatch);
    console.log(res);
    if (res.status == 200) {
      setConfirmPassword('');
      setNewPassword('');
      setOldPassword('');
    }
  };

  const ConrolePassword = () => {
    if (OldPassword == '' || NewPassword == '' || ConfirmPassword == '')
      return false;
    else return true;
  };

  const ConroleGeneralInfo = () => {
    if (Name == '' || LastName == '' || Tel == '') return false;
    else return true;
  };

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
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    className="custom-input"
                    size="large"
                    placeholder={'FirstName'}
                  />
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="custom-input"
                    size="large"
                    placeholder={'Last Name'}
                  />
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    disabled
                    value={Email}
                    className="custom-input"
                    size="large"
                    placeholder={'Last Name'}
                  />
                </Form.Item>
                <Form.Item label="Date Of Birth">
                  <DatePicker
                    disabled
                    className="custom-input"
                    size="large"
                    placeholder={'Date of Birth'}
                  />
                </Form.Item>
                <Form.Item label="Phone Number">
                  <PhoneInput
                    value={Tel}
                    className="input-phone"
                    enableLongNumbers={false}
                    country={'tn'}
                    placeholder="Number Phone"
                    onChange={(phone) => setTel(phone)}
                  />
                </Form.Item>
                {ConroleGeneralInfo() && (
                  <Button onClick={Update} type="primary">
                    Save
                  </Button>
                )}
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
                    value={OldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
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
                    value={NewPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
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
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="custom-input"
                    size="large"
                    placeholder={'Confirm Password'}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />{' '}
                </Form.Item>
                {ConrolePassword() && (
                  <Button onClick={UpdatePass} type="primary">
                    Change Password
                  </Button>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
