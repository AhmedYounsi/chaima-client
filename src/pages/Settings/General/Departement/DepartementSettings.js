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
  AddPostTitle,
  GetPostTileDep,
  UpdateDepartement,
  UpdatePostTitle,
  DeletePostTitle,
} from '../../../../actions/SettingsAction';
import { useDispatch } from 'react-redux';
import '../../Modal.scss';

const { Panel } = Collapse;

function DepartementSettings() {
  const [form] = Form.useForm();
  const [form3] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [visibleUpdatePost, setVisibleUpdatePost] = useState(false);
  const [name, setname] = useState('');
  const [DepartementList, setDepartementList] = useState([]);
  const [form2] = Form.useForm();
  const [form4] = Form.useForm();
  const [visiblePost, setVisiblePost] = useState(false);
  const [departement, setdepartement] = useState('');
  const [posttitle, setposttitle] = useState('');
  const [PostTitles, setPostTitles] = useState([]);
  const [DepartementId, setDepartementId] = useState(null);
  const [updateType, setUpdateType] = useState(null);
  const [Name, setName] = useState('');

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
  const showModalPost = () => {
    setVisiblePost(true);
  };
  const hideModal = () => {
    setVisible(false);
    setVisiblePost(false);
    setVisibleUpdate(false);
    setVisibleUpdatePost(false);
  };
  const showModalUpdate = (item) => {
    setVisibleUpdate(true);
    setUpdateType(item);
    setName(item.name);
  };
  const onFinishUpdate = async (values) => {
    const id = updateType._id;
    const type = { id, Name };
    await UpdateDepartement(type, dispatch);
    GetDepartements();
    setVisibleUpdate(false);
  };

  const showModalUpdatePost = (item) => {
    setVisibleUpdatePost(true);
    setUpdateType(item);
    setName(item.name);
  };
  const onFinishUpdatePost = async (values) => {
    const id = updateType._id;
    const type = { id, Name };
    await UpdatePostTitle(type, dispatch);
    GetDepartements();
    setVisibleUpdatePost(false);
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

  const DeletePost = async (id) => {
    const res = await DeletePostTitle(id);
    if (res.status == 200) {
      GetDepartements();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Post Title deleted successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onOk = () => {
    form.submit();
  };
  const onOkPost = () => {
    form2.submit();
  };
  const onOk2 = () => {
    form3.submit();
  };
  const onOk3 = () => {
    form4.submit();
  };

  const onFinish2 = async (values) => {
    const postTitle = {
      name: posttitle,
      departement: departement,
    };
    const res = await AddPostTitle(dispatch, postTitle);
    if (res.status == 200) {
      setVisiblePost(false);
      GetDepartements();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'PostTitle added successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
                              <Button
                                type="text"
                                onClick={() => showModalUpdate(el)}
                              >
                                Edit Name Departement
                              </Button>
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
                              <Button
                                type="text"
                                onClick={() => {
                                  showModalPost(), setdepartement(el._id);
                                }}
                              >
                                Add new Post Title
                              </Button>
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
                        dataSource={el.titlePost}
                        renderItem={(item, index) => (
                          <List.Item
                            key={index}
                            actions={[
                              <Button
                                type="link"
                                icon={<EditOutlined />}
                                onClick={() => showModalUpdatePost(item)}
                              />,
                              <Button
                                onClick={() => DeletePost(item._id)}
                                type="link"
                                danger
                                icon={<DeleteOutlined />}
                              />,
                            ]}
                          >
                            <List.Item.Meta title={item.name} />
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
              className=""
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Edit Departement"
        visible={visibleUpdate}
        onOk={onOk2}
        onCancel={hideModal}
      >
        <Form
          form={form3}
          layout="vertical"
          name="userForm"
          onFinish={onFinishUpdate}
        >
          <Form.Item
            label="Departement Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className=""
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Add New Post Title"
        visible={visiblePost}
        onOk={onOkPost}
        onCancel={hideModal}
      >
        <Form
          form={form2}
          layout="vertical"
          name="userForm"
          onFinish={onFinish2}
        >
          <Form.Item
            name={'posttitle'}
            label="Post Title "
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={posttitle}
              onChange={(e) => setposttitle(e.target.value)}
              className=""
            />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Update Post Title"
        visible={visibleUpdatePost}
        onOk={onOk3}
        onCancel={hideModal}
      >
        <Form
          form={form4}
          layout="vertical"
          name="userForm"
          onFinish={onFinishUpdatePost}
        >
          <Form.Item
            label="Post Title "
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className=""
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default DepartementSettings;
