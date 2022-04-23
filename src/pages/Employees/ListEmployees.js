/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../actions/user';
import { useDispatch } from 'react-redux';
import {
  DeleteOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { BackTop, Button, Space, Input, Skeleton } from 'antd';
import { Table } from 'antd';
import { useNavigate } from 'react-router-dom';
function ListEmployees() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [EmployeesList, setEmployeesList] = useState([]);
  const [EmployeeFilter, setEmployeeFilter] = useState([]);
  const [Search, setSearch] = useState('');

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    const filteredRows = EmployeesList.filter((row) => {
      return (
        row.name
          .toString()
          .toLowerCase()
          .includes(Search.toString().toLowerCase()) ||
        row.lastName
          .toString()
          .toLowerCase()
          .includes(Search.toString().toLowerCase()) ||
        row.name
          .concat(' ', row.lastName)
          .toString()
          .toLowerCase()
          .includes(Search.toString().toLowerCase())
      );
    });
    if (Search.length < 1) {
      setEmployeeFilter(EmployeesList);
    } else {
      setEmployeeFilter(filteredRows);
    }
  }, [Search]);
  const getUser = async () => {
    const res = await getUsers(dispatch);
    const arr = [];
    res.data.map((el, index) => {
      arr.push({ key: index, ...el });
    });

    if (res.status == 200) {
      setEmployeesList(arr);
      setEmployeeFilter(arr);
    }
  };

  const ToProfile = (user) => {
    navigate('/employees/profile', { state: { employee: user } });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      sorter: (a, b) => a.lastName > b.lastName,
    },
    {
      title: 'tel',
      dataIndex: 'tel',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<DeleteOutlined />} type="link" danger />

          <Button
            onClick={() => ToProfile(record)}
            icon={<UserOutlined />}
            type="link"
            primary
          />
        </Space>
      ),
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
        <Input
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
          size="large"
          placeholder="Search ..."
          prefix={<SearchOutlined />}
        />
        <div className="site-layout-content">
          <Table columns={columns} dataSource={EmployeeFilter} />{' '}
        </div>
      </div>
    </div>
  );
}

export default ListEmployees;
