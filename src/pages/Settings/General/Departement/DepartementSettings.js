/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Dropdown,
  Menu,
  Button,
  List,
  Form,
  Input,
  Modal,
  Tooltip,
  BackTop,
} from 'antd';
import {
  SettingOutlined,
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
} from '@ant-design/icons';

import {
  AddDepartement,
  GetDepartement,
  DeleteDepartement,
} from '../../../../actions/DepartementAction';
import { useDispatch } from 'react-redux';
import '../../Modal.scss';

const { Panel } = Collapse;

function DepartementSettings() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [name, setname] = useState('');
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
    if (res.status == 200) setDepartementList(res.data);
  };

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const onFinish = async (values) => {
    const departement = {
      name: name,
    };
    const res = await AddDepartement(dispatch, departement);
    if (res.status == 200) {
      setVisible(false);
      GetDepartements();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Departement added successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
  const onOk = () => {
    form.submit();
  };

  return (
    <div className="section">
      <BackTop />
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Departement and post title</span>
            <br />
            <span className="description-text">
              These are Addinnn's Departement, to which you can assign employees
            </span>
            <div className="line radical"></div>
            <br />
            <br />

            <Tooltip title="Add Departement">
              <Button
                type="primary"
                shape="round"
                icon={<PlusOutlined />}
                onClick={showModal}
                ghost
                style={{ height: '40px' }}
              >
                Add New Departement
              </Button>
            </Tooltip>
          </div>
          {DepartementList.length > 0 && (
            <div className="form-pad-2">
              <Collapse defaultActiveKey={['1']} expandIconPosition={'left'}>
                {DepartementList.map((el, index) => (
                  <Panel
                    key={index}
                    header={el.name}
                    extra={
                      <Dropdown
                        overlay={
                          <Menu>
                            <Menu.Item key="1">
                              <Button type="text">Edit Name Departement</Button>
                            </Menu.Item>
                            <Menu.Item key="2">
                              <Button
                                type="text"
                                onClick={() => DeleteDepart(el._id)}
                              >
                                Remove Departement
                              </Button>
                            </Menu.Item>
                            <Menu.Item key="3">
                              <Button type="text">Add new Post Title</Button>
                            </Menu.Item>
                          </Menu>
                        }
                        placement="bottomRight"
                        arrow
                      >
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
                              <Button
                                type="link"
                                danger
                                icon={<DeleteOutlined />}
                              />,
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
            </div>
          )}
        </div>
      </div>

      <Modal
        title="Add New Departement"
        visible={visible}
        onOk={onOk}
        onCancel={hideModal}
      >
        <Form form={form} layout="vertical" name="userForm" onFinish={onFinish}>
          <Form.Item
            name={'name'}
            label="Departement Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="custom-input"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default DepartementSettings;
