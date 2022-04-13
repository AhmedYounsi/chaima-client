/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Collapse, Dropdown, Menu, Button, List } from 'antd';
import {
  SettingOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import {
  GetDepartement,
  DeleteDepartement,
} from '../../../../actions/DepartementAction';
import { useDispatch } from 'react-redux';

const { Panel } = Collapse;

function DepartementSettings() {
  const [DepartementList, setDepartementList] = useState([]);
  const dispatch = useDispatch();

  const data = [
    {
      title: 'Rh',
    },
    {
      title: 'Finance',
    },
    {
      title: 'Marketing',
    },
  ];

  useEffect(() => {
    GetDepartements();
  }, []);

  const GetDepartements = async () => {
    const res = await GetDepartement(dispatch);
    console.log(res.data);
    if (res.status == 200) setDepartementList(res.data);
  };

  const DeleteDepart = async (id) => {
    const res = await DeleteDepartement(id);
    if (res.status == 200) {
      GetDepartements();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Departement deleted successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="text">Edit Name Departement</Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="text">Remove Departement</Button>
      </Menu.Item>
      <Menu.Item key="3">
        <Button type="text">Add new Post Title</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Collapse defaultActiveKey={['1']} expandIconPosition={'left'}>
        {DepartementList.map((el, index) => (
          <Panel
            key={index}
            header={el.name}
            extra={
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button shape="circle" icon={<SettingOutlined />} />
              </Dropdown>
            }
          >
            <div>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                  <List.Item
                    key={index}
                    actions={[
                      <Button type="link" icon={<EditOutlined />} />,
                      <Button type="link" danger icon={<DeleteOutlined />} />,
                    ]}
                  >
                    <List.Item.Meta title={item.title} />
                  </List.Item>
                )}
              />
            </div>
          </Panel>
        ))}
      </Collapse>
    </>
  );
}
export default DepartementSettings;
