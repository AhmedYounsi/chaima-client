/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  BackTop,
  Tooltip,
  List,
  Dropdown,
  Menu,
  Modal,
  Form,
  Input,
} from 'antd';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import {
  AddFolderType,
  GetFolderType,
  DeleteFolderType,
  UpdateFolderType,
} from '../../../actions/SettingsAction';
import './../Modal.scss';

function DocumentSettings() {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setname] = useState('');
  const [FolderTypeList, setFolderTypeList] = useState([]);
  const [updateType, setUpdateType] = useState(null);
  const [Name, setName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    GetFolderTypes();
  }, []);

  const GetFolderTypes = async () => {
    const res = await GetFolderType(dispatch);
    if (res.status == 200) setFolderTypeList(res.data);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setVisibleUpdate(false);
  };
  const showModalUpdate = (item) => {
    setVisibleUpdate(true);
    setUpdateType(item);
    setName(item.name);
  };
  const onFinishUpdate = async (values) => {
    setVisibleUpdate(true);
    const id = updateType._id;
    const type = { id, Name };
    await UpdateFolderType(type, dispatch);
    GetFolderTypes();
    setVisibleUpdate(false);
  };

  const onFinish = async (values) => {
    const folderType = {
      name: name,
    };
    const res = await AddFolderType(dispatch, folderType);
    if (res.status == 200) {
      setVisible(false);
      GetFolderTypes();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Folder type added successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    }
  };

  const DeleteFolder = async (id) => {
    const res = await DeleteFolderType(id);
    if (res.status == 200) {
      GetFolderTypes();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Folder type deleted successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const handleOk = () => {
    form.submit();
  };
  const handleOk2 = () => {
    form2.submit();
  };

  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Employee directory </span>

            <br />
            <span className="description-text">
              Create folders to organize employee documents.
            </span>
            <div className="line radical"></div>
            <br />
            <br />

            <Tooltip title="Add new type directory">
              <Button
                style={{ height: '40px' }}
                shape="round"
                type="primary"
                ghost
                icon={<PlusOutlined />}
                onClick={showModal}
              >
                Add New Type
              </Button>
            </Tooltip>
          </div>

          <Modal
            className="ant-modal"
            title="Add a new folder to organize your employees' documents"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Form layout={'vertical'} form={form} onFinish={onFinish}>
              <Form.Item
                label=" Contract name"
                name={'name'}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  className=""
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </Form.Item>
            </Form>
          </Modal>
          <Modal
            className="ant-modal"
            title="Edit a folder type"
            visible={visibleUpdate}
            onOk={handleOk2}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Form layout={'vertical'} form={form2} onFinish={onFinishUpdate}>
              <Form.Item
                label=" Contract name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  className=""
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Item>
            </Form>
          </Modal>
          <div className="form-pad-2">
            {FolderTypeList.length > 0 && (
              <List
                size="large"
                bordered
                dataSource={FolderTypeList}
                renderItem={(item, index) => (
                  <List.Item
                    key={index}
                    actions={[
                      <Dropdown
                        overlay={
                          <Menu>
                            <Menu.Item key="M1">
                              <Button
                                type="text"
                                onClick={() => showModalUpdate(item)}
                              >
                                Edit Folder
                              </Button>
                            </Menu.Item>
                            <Menu.Item key="M2">
                              <Button
                                type="text"
                                onClick={() => DeleteFolder(item._id)}
                              >
                                Remove Folder
                              </Button>
                            </Menu.Item>
                          </Menu>
                        }
                        placement="bottomRight"
                        arrow
                      >
                        <Button
                          type="dashed"
                          shape="circle"
                          icon={<SettingOutlined />}
                        />
                      </Dropdown>,
                    ]}
                  >
                    {item.name}
                  </List.Item>
                )}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentSettings;
