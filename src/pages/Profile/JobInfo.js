import React from 'react';
import './Profile.scss';
import { Form, Select, BackTop, DatePicker } from 'antd';

function JobInfo() {
  return (
    <div className="sections-vertical">
      <BackTop />
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

export default JobInfo;
