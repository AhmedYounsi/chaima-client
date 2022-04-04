import React, { useState } from 'react';
import { Button, Row, Col, Input, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

function NewEvent() {
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
      <div className="site-layout-content">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Input size="large" placeholder="Title" type="text" />
          </Col>
          <Col span={12}></Col>
        </Row>
        <br />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <TextArea rows={2} placeholder={'Description'} type={'text'} />
          </Col>
          <Col span={12}></Col>
        </Row>
        <br />

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <TextArea rows={2} placeholder={'Address'} type={'text'} />
          </Col>
          <Col span={12}></Col>
        </Row>
        <br />
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <RangePicker
              className={'ant-picker-range'}
              value={hackValue || value}
              disabledDate={disabledDate}
              onCalendarChange={(val) => setDates(val)}
              onChange={(val) => setValue(val)}
              onOpenChange={onOpenChange}
            />
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>
    </div>
  );
}

export default NewEvent;
