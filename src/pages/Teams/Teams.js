/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { BackTop, Table, Button, Space, Input, Divider } from 'antd';
import { useDispatch } from 'react-redux';
import {
  DeleteOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { GetTeams } from '../../actions/TeamsAction';

function Teams() {
  const dispatch = useDispatch();
  const [TeamsList, setTeamsList] = useState([]);
  const [TeamFilter, setTeamFilter] = useState([]);
  const [Search, setSearch] = useState('');

  useEffect(() => {
    getTeams();
  }, []);

  useEffect(() => {
    const filteredRows = TeamsList.filter((row) => {
      return (
        row.name
          .toString()
          .toLowerCase()
          .includes(Search.toString().toLowerCase()) ||
        row.teamleader
          .toString()
          .toLowerCase()
          .includes(Search.toString().toLowerCase())
      );
    });
    if (Search.length < 1) {
      setTeamFilter(TeamsList);
    } else {
      setTeamFilter(filteredRows);
    }
  }, [Search]);
  const getTeams = async () => {
    const res = await GetTeams(dispatch);
    const arr = [];
    res.data.map((el, index) => {
      arr.push({ key: index, ...el });
    });

    if (res.status == 200) {
      setTeamsList(arr);
      setTeamFilter(arr);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: 'Team Lead',
      dataIndex: 'teamleader',
      sorter: (a, b) => a.teamleader > b.teamleader,
    },
    {
      title: 'Members',
      dataIndex: 'members',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<DeleteOutlined />} type="link" danger />
          <Divider type="vertical" />
          <Button icon={<UserOutlined />} type="link" />
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
            <span className="title-text">Teams</span>
            <br />
            <span className="description-text">Configure your teams </span>
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
          <Table columns={columns} dataSource={TeamFilter} />{' '}
        </div>
      </div>
    </div>
  );
}

export default Teams;
