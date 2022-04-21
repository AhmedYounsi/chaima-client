/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../actions/user';
import { useDispatch } from 'react-redux';

import { BackTop } from 'antd';
import { Table } from 'antd';
function ListEmployees() {
  const dispatch = useDispatch();
  const [EmployeesList, setEmployeesList] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await getUsers(dispatch);
    const arr = []
    res.data.map((el, index) => {
      arr.push({ key: index, ...el })
    })

    if (res.status == 200) setEmployeesList(arr);
  };

  const columns = [

    {
      title: 'First Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '30%',
    },

    {
      title: 'Job Title',
      dataIndex: 'post',
      key: 'post',
      width: '20%',
    },
    {
      title: 'Status',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
    },
    {
      title: 'Number phone',
      dataIndex: 'tel',
      key: 'tel',
      width: '10%',
    },
  ];
  return (
    <div className="sections-vertical">
      <BackTop />

      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Employees</span>
            <br />
            <span className="description-text">
              Here are all the employees at your company, including terminated
              ones.{' '}
            </span>
            <div className="line radical"></div>
          </div>
        </div>
        <div className="site-layout-content">
          <Table columns={columns} dataSource={EmployeesList} />
        </div>
      </div>
    </div>
  );
}

export default ListEmployees;
