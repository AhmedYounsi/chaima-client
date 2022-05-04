/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Form, Input, DatePicker, BackTop, Button, Select } from 'antd';
import PhoneInput from 'react-phone-input-2';
import {
  GetContractType,
  GetDepartement,
  GetOffice,
} from '../../../actions/SettingsAction';
import { getUsers } from '../../../actions/user';

import { useDispatch } from 'react-redux';
const { Option } = Select;

function GeneralInfoEmployes(props) {
  const [Name, setName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Tel, setTel] = useState('');
  const [OfficeList, setOfficeList] = useState([]);
  const [reprtedto, setreprtedto] = useState([]);
  const [DepartementList, setDepartementList] = useState([]);
  const [ContractTypeList, setContractTypeList] = useState([]);
  const [PostTitleList, setPostTitleList] = useState([]);
  const [office, setOffice] = useState('');
  const [departement, setDepartement] = useState('');
  const [post, setPost] = useState('');
  const [reported, setReported] = useState('');
  const [contract, setContract] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await getUsers(dispatch);
    if (res.status == 200) setreprtedto(res.data);
  };
  useEffect(() => {
    let arr = reprtedto;
    const i = reprtedto.findIndex((el) => el._id == props.Employee.reportsTo);
    if (i != -1) {
      console.log(arr[i].name);
      setReported(arr[i].name);
    }
  }, [props.Employee, reprtedto]);

  useEffect(() => {
    GetOffices();
  }, []);

  const GetOffices = async () => {
    const res = await GetOffice(dispatch);
    if (res.status == 200) {
      setOfficeList(res.data);
    }
  };

  useEffect(() => {
    let arr = OfficeList;
    const i = OfficeList.findIndex((el) => el._id == props.Employee.office);
    if (i != -1) {
      setOffice(arr[i].name);
    }
  }, [props.Employee, OfficeList]);

  useEffect(() => {
    GetDepartements();
  }, []);

  const GetDepartements = async () => {
    const res = await GetDepartement(dispatch);
    if (res.status == 200) setDepartementList(res.data);
  };

  useEffect(() => {
    let arr = DepartementList;
    const i = DepartementList.findIndex(
      (el) => el._id == props.Employee.departement
    );
    if (i != -1) {
      setDepartement(arr[i].name);
    }
  }, [props.Employee, DepartementList]);

  useEffect(() => {
    GetContractTypes();
  }, []);

  const GetContractTypes = async () => {
    const res = await GetContractType(dispatch);
    if (res.status == 200) setContractTypeList(res.data);
  };

  useEffect(() => {
    let arr = ContractTypeList;
    const i = ContractTypeList.findIndex(
      (el) => el._id == props.Employee.typeContrat
    );
    if (i != -1) {
      setContract(arr[i].name);
    }
  }, [props.Employee, ContractTypeList]);

  const GetPostTitle = (id) => {
    const dep = DepartementList.find((el) => el._id == id);
    setPostTitleList(dep.titlePost);
    // if (dep.length < 1) return;
    // setPostTitleList(dep[0].titlePost);
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
                    value={props.Employee.name}
                    className=""
                    size="large"
                    placeholder={'FirstName'}
                  />
                </Form.Item>
                <Form.Item label="Last Name">
                  <Input
                    value={props.Employee.lastName}
                    className=""
                    size="large"
                    placeholder={'Last Name'}
                  />
                </Form.Item>
                <Form.Item label="Email">
                  <Input
                    disabled
                    value={props.Employee.email}
                    className=""
                    size="large"
                    placeholder={'Last Name'}
                  />
                </Form.Item>
                <Form.Item label="Date Of Birth">
                  <DatePicker
                    disabled
                    value={''}
                    className=""
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
                  <Select placeholder={office}>
                    {OfficeList.length > 0 &&
                      OfficeList.map((el, index) => {
                        return (
                          <Option key={index} value={el._id}>
                            {' '}
                            {el.name}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
                <Form.Item label="Departement">
                  <Select
                    placeholder={departement}
                    onChange={(e) => {
                      GetPostTitle(e);
                    }}
                  >
                    {DepartementList.length > 0 &&
                      DepartementList.map((el, index) => {
                        return (
                          <Option key={index} value={el._id}>
                            {' '}
                            {el.name}{' '}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>

                <Form.Item label="Job Title">
                  <Select>
                    {' '}
                    {PostTitleList.length > 0 &&
                      PostTitleList.map((el, index) => {
                        return (
                          <Option key={index} value={el._id}>
                            {' '}
                            {el.name}{' '}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
                <Form.Item label="Manager">
                  {' '}
                  <Select>
                    {' '}
                    {reprtedto.length > 0 &&
                      reprtedto.map((el, index) => {
                        return (
                          <Option key={index} value={el._id}>
                            {' '}
                            {el.name + ' ' + el.lastName}{' '}
                          </Option>
                        );
                      })}
                  </Select>
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
                <Select placeholder={contract}>
                  {' '}
                  {ContractTypeList.length > 0 &&
                    ContractTypeList.map((el, index) => {
                      return (
                        <Option key={index} value={el._id}>
                          {' '}
                          {el.name}{' '}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>

              <Form.Item label="Start date">
                <DatePicker className="" size="large" placeholder={''} />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfoEmployes;
