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
  AddTimeOffType,
  GetTimeOffType,
  DeleteTimeOffType,
} from '../../../actions/SettingsAction';
import './../Modal.scss';

function TimeOffSettings() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setname] = useState('');
  const [TimeOffTypeList, setTimeOffTypeList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    GetTimeOffTypes();
  }, []);

  const GetTimeOffTypes = async () => {
    const res = await GetTimeOffType(dispatch);
    if (res.status == 200) setTimeOffTypeList(res.data);
  };

  const showModal = () => {
    setVisible(true);
  };

  const onFinish = async (values) => {
    const timeOffType = {
      name: name,
    };
    const res = await AddTimeOffType(dispatch, timeOffType);
    if (res.status == 200) {
      setVisible(false);
      GetTimeOffTypes();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Time off type added successfully !',
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

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const DeleteTimeOff = async (id) => {
    const res = await DeleteTimeOffType(id);
    if (res.status == 200) {
      GetTimeOffTypes();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'TimeOff type deleted successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Absence types</span>

            <br />
            <span className="description-text">
              Manage the types of absences within your company so your employees
              can select them when requesting time off{' '}
            </span>
            <div className="line radical"></div>
            <br />
            <br />

            <Tooltip title="Add New Absence Type">
              <Button
                style={{ height: '40px' }}
                shape="round"
                type="primary"
                ghost
                icon={<PlusOutlined />}
                onClick={showModal}
              >
                Add New Absence Type
              </Button>
            </Tooltip>
          </div>
          <Modal
            className="ant-modal"
            title="Add new time off policy"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <Form layout={'vertical'} form={form} onFinish={onFinish}>
              <Form.Item
                label=" Policy name"
                name={'name'}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  className="custom-input"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </Form.Item>
            </Form>
          </Modal>
          <div className="form-pad-2">
            {TimeOffTypeList.length > 0 && (
              <List
                size="large"
                bordered
                dataSource={TimeOffTypeList}
                renderItem={(item, index) => (
                  <List.Item
                    key={index}
                    actions={[
                      <Dropdown
                        overlay={
                          <Menu>
                            <Menu.Item key={'edit'}>
                              <Button type="text">Edit Type</Button>
                            </Menu.Item>
                            <Menu.Item key={'remove'}>
                              <Button
                                type="text"
                                onClick={() => DeleteTimeOff(item._id)}
                              >
                                Remove Type
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

export default TimeOffSettings;
