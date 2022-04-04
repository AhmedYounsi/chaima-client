import React from 'react';
import { BackTop } from 'antd';
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
function ListEmployees() {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Last Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Job Title',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: 'Status',
      dataIndex: 'address',
      key: 'address',
      width: '20%',
    },
    {
      title: 'Action',
      dataIndex: 'address',
      key: 'address',
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
          <div className="form-pad" style={{ width: '30%' }}>
            <div className="box-nbr-employees">nombres employees</div>
          </div>
        </div>
        <div className="site-layout-content">
          <Table columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default ListEmployees;
