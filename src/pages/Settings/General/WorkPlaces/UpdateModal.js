import React, { useState, useMemo, useEffect } from 'react';
import { Button, Modal, Form, Input, Select, Row, Col } from 'antd';
import countryList from 'react-select-country-list';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function UpdateModal(props) {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setname] = useState('');
  const [City, setCity] = useState('');
  const [Country, setCountry] = useState('');
  const [Adress, setAdress] = useState('');
  const [Zip, setZip] = useState('');
  const onFinish = async (values) => {
    console.log(values);
  };

  useEffect(() => {
    if (props.UpdatedOffice) {
      setname(props.UpdatedOffice.name);
    }
  }, [props.UpdatedOffice]);

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    const country = options.filter((el) => el.value == value);
    console.log(country[0].label);
    setCountry(country[0].label);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
  return (
    <div>
      <Modal
        className="ant-modal"
        title="Add new workplace"
        visible={props.UpdatedOffice}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            label="Workplace name"
            name={['office', 'name']}
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
          <div className="root">
            <Form.Item
              label="Address line"
              name={['office', 'adress']}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                value={Adress}
                onChange={(e) => setAdress(e.target.value)}
                className="custom-input"
              />
            </Form.Item>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  label="City"
                  name={['office', 'city']}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                    className="custom-input"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Zip Code"
                  name={['office', 'zip']}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={Zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="custom-input"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Country"
              name={['office', 'country']}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                options={options}
                value={Country}
                onChange={(e) => changeHandler(e)}
              />
            </Form.Item>
          </div>

          <div className="ant-modal-footer">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
      ,
    </div>
  );
}

export default UpdateModal;
