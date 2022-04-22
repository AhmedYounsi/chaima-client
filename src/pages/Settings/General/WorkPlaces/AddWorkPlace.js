/* eslint-disable */
import React, { useState, useMemo, useEffect } from 'react';
import { Button, Modal, Form, Input, Select, Row, Col } from 'antd';
import '../../Modal.scss';
import countryList from 'react-select-country-list';
import { AddOffice, GetOffice } from '../../../../actions/OfficeAction';
import { useDispatch } from 'react-redux';

function AddWorkPlace(props) {
  const [form] = Form.useForm();

  const [visible, setVisible] = useState(props.AddWorkPlace);
  const [name, setname] = useState('');
  const [City, setCity] = useState('');
  const [Country, setCountry] = useState('');
  const [Adress, setAdress] = useState('');
  const [Zip, setZip] = useState('');
  const [OfficeList, setOfficeList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    GetOffices();
  }, []);

  const GetOffices = async () => {
    const res = await GetOffice(dispatch);
    if (res.status == 200) setOfficeList(res.data);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    const country = options.filter((el) => el.value == value);
    setCountry(country[0].label);
  };

  const onOk = () => {
    form.submit();
  };
  const onFinish = async (values) => {
    const office = {
      name: name,
      country: Country,
      city: City,
      zip: Zip,
      adress: Adress,
    };
    const res = await AddOffice(dispatch, office);
    if (res.status == 200) {
      setVisible(false);
      GetOffices();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Workplace added successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Modal
        className="ant-modal"
        title="Add new workplace"
        visible={props.AddWorkPlace}
        onOk={onOk}
        onCancel={handleCancel}
      >
        <span className="description-text">
          Create new workplaces using different locations to arrange employees
          geographically.
        </span>
        <br />
        <br />
        <Form layout="vertical" form={form} onFinish={onFinish}>
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
        </Form>
      </Modal>
    </>
  );
}

export default AddWorkPlace;
