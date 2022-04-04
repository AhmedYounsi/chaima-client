import React, { useState, useEffect } from 'react';
import { Input, Modal, Form, Select } from 'antd';

const { Option } = Select;

function AddTeam(props) {
  const [visible, setVisible] = useState(props.AddTeam);
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const [form] = Form.useForm();
  useEffect(() => {
    if (props.AddTeam) {
    }
  }, [props.AddTeam]);

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const onFinish = async (values) => {
    console.log('Finish:', values);
  };
  const onOk = () => {
    form.submit();
  };
  return (
    <div>
      <Modal
        title="Add New Team"
        visible={props.AddTeam}
        onOk={onOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="userForm" onFinish={onFinish}>
          <Form.Item
            name={'name'}
            val
            label="Team Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input className="custom-input" />
          </Form.Item>
          <Form.Item
            name={'team lead'}
            val
            label="Team Lead"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select defaultValue="lucy" allowClear>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={'members'}
            val
            label="Members"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              onChange={handleChange}
            >
              <Option value="cha">chaima</Option>
              <Option value="ch">chaima</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddTeam;
