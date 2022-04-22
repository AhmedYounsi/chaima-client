/* eslint-disable */
import React, { useState } from 'react';
import { Form, Input, DatePicker, BackTop, Button, Select } from 'antd';
import PhoneInput from 'react-phone-input-2';

function GeneralInfoEmployes(props) {
  console.log(props.Employee);
  const [Name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Tel, setTel] = useState('');
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
                    value={props.Employee.name}
                    className="custom-input"
                    size="large"
                    placeholder={'FirstName'}
                  />
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input
                    value={props.Employee.LastName}
                    className="custom-input"
                    size="large"
                    placeholder={'Last Name'}
                  />
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    disabled
                    value={props.Employee.email}
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
                    value={props.Employee.tel}
                    className="input-phone"
                    enableLongNumbers={false}
                    country={'tn'}
                    placeholder="Number Phone"
                  />
                </Form.Item>

                <Button type="primary">Save</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="pad">
          <div className="padForm">
            <div className="header-pad">
              <span className="title-text">Work information</span>
              <br />
              <span className="description-text">
                Basic information about your role
              </span>
              <div className="line radical"></div>
            </div>
            <div className="form-pad">
              <Form layout="vertical">
                <Form.Item label="WorkSpace">
                  <Select></Select>
                </Form.Item>
                <Form.Item label="Departement">
                  <Select></Select>
                </Form.Item>

                <Form.Item label="Job Title">
                  <Select></Select>
                </Form.Item>
                <Form.Item label="Manager">
                  {' '}
                  <Select></Select>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Contract</span>
            <br />
            <span className="description-text">
              Basic information about your role
            </span>
            <div className="line radical"></div>
          </div>
          <div className="form-pad">
            <Form layout="vertical">
              <Form.Item label="Type contract">
                <Select></Select>
              </Form.Item>

              <Form.Item label="Start date">
                <DatePicker
                  className="custom-input"
                  size="large"
                  placeholder={'Start date'}
                />
              </Form.Item>
              <Form.Item label="End date">
                <DatePicker
                  className="custom-input"
                  size="large"
                  placeholder={'End date'}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfoEmployes;
