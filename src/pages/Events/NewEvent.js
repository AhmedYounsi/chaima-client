import React, { useState } from 'react';
import { Button, Form, Input, DatePicker, Select } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './FormLayout.scss';

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

function NewEvent() {
  const [form] = Form.useForm();

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
    const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
    return tooEarly || tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">New Event</div>
        <div className="header-left">
          <Link to="/events">
            <Button icon={<ArrowLeftOutlined />} type="link"></Button>
          </Link>
        </div>
      </div>
      <Form form={form} layout="vertical">
        <div className="form-layout">
          <div className="blockFormA">
            <Form.Item
              name={'title'}
              val
              label="Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="custom-input" placeholder="Title" type="text" />
            </Form.Item>
            <Form.Item
              name={'description'}
              val
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                className="custom-input"
                rows={2}
                placeholder={'Description'}
                type={'text'}
              />
            </Form.Item>
          </div>
          <div className="blockFormB">
            <Form.Item
              name={'date'}
              val
              label="date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <RangePicker
                className={'custom-input'}
                value={hackValue || value}
                disabledDate={disabledDate}
                onCalendarChange={(val) => setDates(val)}
                onChange={(val) => setValue(val)}
                onOpenChange={onOpenChange}
              />
            </Form.Item>
            <Form.Item
              name={'address'}
              val
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                className="custom-input"
                rows={2}
                placeholder={'Address'}
                type={'text'}
              />
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default NewEvent;
