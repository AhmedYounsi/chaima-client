import React, { useState } from 'react';
import { Button, BackTop, Tooltip, Modal, Form, Radio, Space } from 'antd';
import { Tab, Tabs } from '@blueprintjs/core';
import ListEvents from './ListEvents';
import ListAnnouncement from '../Announcement/ListAnnouncement';
import { PlusOutlined } from '@ant-design/icons';
import '../Settings/Modal.scss';
import './radio.scss';
import { useNavigate } from 'react-router-dom';

function Events() {
  const [value, setValue] = useState(null);

  const [Selected, setSelected] = useState('1');
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const onOk = () => {
    form.submit();
  };
  const navigate = useNavigate();

  const onFinish = async (value) => {
    console.log('Finish:', value);
    {
      (function () {
        switch (value.type) {
          case 'event':
            return navigate('/events/newEvent');

          case 'announcement':
            return navigate('/events/newAnnouncement');

          default:
            break;
        }
      })();
    }
  };

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <BackTop></BackTop>
        <div className="header-middle">Events</div>
        <div className="header-right">
          {' '}
          <Tooltip title="Add new event">
            <Button
              key="1"
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              ghost
              onClick={showModal}
            >
              Create post
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="site-layout-header-centred">
        <Tabs
          defaultActiveKey="1"
          onChange={(e) => setSelected(e)}
          selectedTabId={Selected}
          animate={true}
        >
          <Tab id="1" title="Events" />

          <Tab id="2" title="Announcement" />

          <Tabs.Expander />
        </Tabs>
      </div>
      <div className="site-layout-content">
        {(function () {
          switch (Selected) {
            case '1':
              return <ListEvents />;

            case '2':
              return <ListAnnouncement />;

            default:
              break;
          }
        })()}
      </div>
      <Modal
        title="Create post"
        visible={visible}
        onOk={onOk}
        onCancel={hideModal}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item>
            Send messages to colleagues in different communities or share
            company-wide messages and events.
          </Form.Item>
          <Form.Item
            label="SELECT POST TYPE"
            name={'type'}
            val
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Radio.Group value={value}>
              <Space direction="vertical">
                <Radio.Button className="p-field-radiobutton " value="event">
                  <div className="radio-title">
                    <label className="p-radiobutton-label"> Event</label>
                  </div>

                  <p className="p-text-light">
                    Create an event and notify your colleagues. We'll add this
                    event to the company calendar.
                  </p>
                </Radio.Button>

                <Radio.Button
                  className="p-field-radiobutton "
                  value="announcement"
                >
                  <div className="radio-title">
                    <label> Announcement</label>
                  </div>

                  <p className="p-text-light">
                    Share news, big announcements or ask a question.
                  </p>
                </Radio.Button>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Events;
