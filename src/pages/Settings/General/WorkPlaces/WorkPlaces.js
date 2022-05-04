/* eslint-disable */
import React, { useState, useMemo, useEffect } from 'react';
import {
  Button,
  Tooltip,
  BackTop,
  List,
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  Card,
  Menu,
  Dropdown,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../../Modal.scss';
import {
  DeleteOffice,
  GetOffice,
  AddOffice,
  UpdateOffice,
} from '../../../../actions/SettingsAction';
import { useDispatch } from 'react-redux';
import countryList from 'react-select-country-list';
import './WorkPlacesCard.scss';
import { SettingOutlined } from '@ant-design/icons';

function WorkPlaces() {
  const [OfficeList, setOfficeList] = useState([]);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [name, setname] = useState('');
  const [City, setCity] = useState('');
  const [Country, setCountry] = useState('');
  const [Adress, setAdress] = useState('');
  const [Zip, setZip] = useState('');
  const [Name, setName] = useState('');
  const [updateType, setUpdateType] = useState(null);

  useEffect(() => {
    GetOffices();
  }, []);

  const GetOffices = async () => {
    const res = await GetOffice(dispatch);
    if (res.status == 200) setOfficeList(res.data);
  };

  const DeleteWorkPlace = async (id) => {
    const res = await DeleteOffice(id);
    if (res.status == 200) {
      GetOffices();
      dispatch({
        type: 'SetAlert',
        payload: {
          type: 'success',
          message: 'Workplace deleted successfully !',
        },
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setVisibleUpdate(false);
  };

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    const country = options.filter((el) => el.value == value);
    setCountry(country[0].label);
  };
  const showModal = () => {
    setVisible(true);
  };
  const showModalUpdate = (item) => {
    setVisibleUpdate(true);
    setUpdateType(item);
    setName(item.name);
    setAdress(item.adress);
    setCity(item.city);
    setZip(item.zip);
    setCountry(item.country);
  };
  const onOk = () => {
    form.submit();
  };
  const onOk2 = () => {
    form2.submit();
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

  const onFinishUpdate = async (values) => {
    const id = updateType._id;
    const office = { id, Name, Adress, City, Country, Zip };
    await UpdateOffice(office, dispatch);
    GetOffices();
    setVisibleUpdate(false);
  };

  return (
    <div className="section">
      <BackTop />
      <Modal
        className="ant-modal"
        title="Add new workplace"
        visible={visible}
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
              className=""
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
                className=""
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
                    className=""
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
                    className=""
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

      <Modal
        className="ant-modal"
        title="Edit workplace"
        visible={visibleUpdate}
        onOk={onOk2}
        onCancel={handleCancel}
      >
        <span className="description-text">
          Create new workplaces using different locations to arrange employees
          geographically.
        </span>
        <br />
        <br />
        <Form layout="vertical" form={form2} onFinish={onFinishUpdate}>
          <Form.Item
            label="Workplace name"
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
          <div className="root">
            <Form.Item
              label="Address line"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                value={Adress}
                onChange={(e) => setAdress(e.target.value)}
                className=""
              />
            </Form.Item>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  label="City"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                    className=""
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Zip Code"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    value={Zip}
                    onChange={(e) => setZip(e.target.value)}
                    className=""
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Country"
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
      <div className="pad">
        <div className="padForm_vertical">
          <div className="header_centered">
            <span className="title-text">Workplace</span>
            <span className="description-text">
              {' '}
              These are Addinnn's workplaces, to which you can assign employees.
            </span>
            <div className="line radical"></div>
            <br /> <br />
            <Tooltip title="Add Workplace">
              <Button
                shape="round"
                type="primary"
                icon={<PlusOutlined />}
                onClick={showModal}
                ghost
                style={{ height: '40px' }}
              >
                Add New Workplace
              </Button>
            </Tooltip>
          </div>

          <div className="gridBoxList">
            <List
              grid={{ gutter: 16, column: 3 }}
              dataSource={OfficeList}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <Card
                    className="ant-card"
                    actions={[<Button type="link">See WorkSpace</Button>]}
                  >
                    <div className="illustration_location"></div>
                    <div className="action">
                      <Dropdown
                        overlay={
                          <Menu>
                            <Menu.Item key="M1">
                              <Button
                                type="text"
                                onClick={() => showModalUpdate(item)}
                              >
                                Edit WorkSpace
                              </Button>
                            </Menu.Item>
                            <Menu.Item key="M2">
                              <Button
                                type="text"
                                onClick={() => DeleteWorkPlace(item._id)}
                              >
                                Remove WorkSpace
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
                      </Dropdown>
                    </div>
                    <div className="content">
                      <h2> {item.name} </h2>
                      <h4> {item.country}</h4>
                      <h4> {item.employees.length + ' Employees'}</h4>
                    </div>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkPlaces;
