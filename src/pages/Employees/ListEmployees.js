/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { getUsers, DeleteUser } from '../../actions/user';
import { GetDepartement } from '../../actions/SettingsAction';
import { useDispatch } from 'react-redux';
import {
  DeleteOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { BackTop, Button, Space, Input, Divider, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
function ListEmployees() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [EmployeesList, setEmployeesList] = useState([]);
  const [EmployeeFilter, setEmployeeFilter] = useState([]);
  const [Search, setSearch] = useState('');
  const [userDep, setUser] = useState('');
  const [DepartementList, setDepartementList] = useState([]);
  const [departement, setDepartement] = useState('');

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

  const deleteEmploye = async (id) => {
    const res = await DeleteUser(id);
    if (res.status == 200) {
      getUser();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Employe deleted successfully !',
        },
      });
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
      title: 'Departement',
      dataIndex: 'departement',
    },
    {
      title: 'Post Title',
      dataIndex: 'post',
    },
    {
      title: 'tel',
      dataIndex: 'tel',
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (text, record) => (
        <Space size="small">
          <Button icon={<DeleteOutlined />} type="link" danger />
          <Divider type="vertical" />
          <Button
            onClick={() => ToProfile(record)}
            icon={<UserOutlined />}
            type="link"
          />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    GetDepartements();
  }, []);

  const GetDepartements = async () => {
    const res = await GetDepartement(dispatch);
    if (res.status == 200) setDepartementList(res.data);
  };

  const GetDepartementUser = async (departement) => {
    let arr = DepartementList;
    const i = DepartementList.findIndex((el) => el._id == departement);
    if (i != -1) {
      setDepartement(arr[i].name);
    }
  };

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
          <Input
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            size="large"
            placeholder="Search ..."
            prefix={<SearchOutlined />}
          />
          <br />
          <br></br>
          <Table columns={columns} dataSource={EmployeeFilter} />{' '}
        </div>
      </div>
    </div>
  );
}

export default ListEmployees;
