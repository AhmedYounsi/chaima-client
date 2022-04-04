/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Departements from './ListDepartementSettings';
import { Form, Input, Modal } from 'antd';
import {
  AddDepartement,
  GetDepartement,
} from '../../../../actions/DepartementAction';
import { useDispatch } from 'react-redux';
import '../../Modal.scss';

function DepartementSettings() {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [name, setname] = useState('');
  const [DepartementList, setDepartementList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    GetDepartements();
  }, []);

  const GetDepartements = async () => {
    const res = await GetDepartement(dispatch);
    console.log(res.data);
    if (res.status == 200) setDepartementList(res.data);
  };

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const onFinish = async (values) => {
    console.log('Finish:', values);
    const departement = {
      name: name,
    };
    const res = await AddDepartement(dispatch, departement);
    if (res.status == 200) {
      setVisible(false);
      GetDepart();
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
  const onOk = () => {
    form.submit();
  };

  return (
    <div>
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
          <div className="form-pad-2">
            <Departements />
          </div>
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
            val
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
