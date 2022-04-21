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
  AddContractType,
  GetContractType,
} from '../../../../actions/ContractTypeAction';
import '../../Modal.scss';

function ContractType() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setname] = useState('');
  const [ContractTypeList, setContractTypeList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    GetContractTypes();
  }, []);

  const GetContractTypes = async () => {
    const res = await GetContractType(dispatch);
    console.log(res.data);
    if (res.status == 200) setContractTypeList(res.data);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = async (values) => {
    const contractType = {
      name: name,
    };
    const res = await AddContractType(dispatch, contractType);
    if (res.status == 200) {
      setVisible(false);
      GetContractTypes();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Contract type added successfully !',
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

  const menu = (
    <Menu>
      <Menu.Item key="M1">
        <Button type="text">Edit Type Contract</Button>
      </Menu.Item>
      <Menu.Item key="M2">
        <Button type="text">Remove Type Contract</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Contract Type </span>

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
            title="Add a new type of contract"
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
                  className="custom-input"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </Form.Item>
            </Form>
          </Modal>
          <div className="form-pad-2">
            <List
              size="large"
              bordered
              dataSource={ContractTypeList}
              renderItem={(item, index) => (
                <List.Item
                  key={index}
                  actions={[
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractType;
