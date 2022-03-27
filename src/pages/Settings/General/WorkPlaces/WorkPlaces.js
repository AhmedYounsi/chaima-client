import React, { useState, useMemo, useEffect } from 'react';
import {
  Divider,
  PageHeader,
  Button,
  Descriptions,
  Tooltip,
  BackTop,
  List,
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import WorkPlaceCard from './WorkPlacesCard';
import '../../Modal.scss';
import countryList from 'react-select-country-list';
import {
  AddOffice,
  DeleteOffice,
  GetOffice,
} from '../../../../actions/OfficeAction';
import { useDispatch } from 'react-redux';
import UpdateModal from './UpdateModal';

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

function WorkPlaces() {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [name, setname] = useState('');
  const [City, setCity] = useState('');
  const [Country, setCountry] = useState('');
  const [Adress, setAdress] = useState('');
  const [Zip, setZip] = useState('');
  const [OfficeList, setOfficeList] = useState([]);
  const [UpdatedOffice, setUpdatedOffice] = useState(null);
  const dispatch = useDispatch();
  const showModal = () => {
    setVisible(true);
  };

  useEffect(() => {
    GetOffices();
  }, []);

  const GetOffices = async () => {
    const res = await GetOffice(dispatch);
    console.log(res.data);
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
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
    const country = options.filter((el) => el.value == value);
    console.log(country[0].label);
    setCountry(country[0].label);
  };
  const onFinish = async (values) => {
    console.log(values);
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
    <div>
      <Divider></Divider>
      <BackTop />

      <PageHeader
        className="site-page-header"
        ghost={false}
        title="Workplaces"
        subTitle="Configure WorkPlaces"
        extra={[
          <Tooltip title="Add Workplace">
            <Button
              type="dashed"
              shape="circle"
              icon={<PlusOutlined />}
              onClick={showModal}
            />
          </Tooltip>,
          <UpdateModal UpdatedOffice={UpdatedOffice} />,
          <Modal
            className="ant-modal"
            title="Add new workplace"
            visible={visible}
            onCancel={handleCancel}
            footer={null}
            confirmLoading={confirmLoading}
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
          </Modal>,
        ]}
      >
        <Descriptions Descriptions size="middle" column={1}>
          <Descriptions.Item>
            These are Addinnn's workplaces, to which you can assign employees.
          </Descriptions.Item>
          <Descriptions.Item>
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={OfficeList}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <WorkPlaceCard
                    setUpdatedOffice={(office) => setUpdatedOffice(office)}
                    DeleteWorkPlace={(id) => DeleteWorkPlace(id)}
                    item={item}
                  />
                </List.Item>
              )}
            />
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

export default WorkPlaces;
