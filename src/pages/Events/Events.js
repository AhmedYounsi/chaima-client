import React, { useState } from 'react';
import {
  PageHeader,
  Button,
  Descriptions,
  BackTop,
  Tooltip,
  Modal,
  Form,
  Radio,
} from 'antd';
import { Tab, Tabs } from '@blueprintjs/core';
import ListEvents from './ListEvents';
import ListAnnouncement from '../Announcement/ListAnnouncement';
import { PlusOutlined } from '@ant-design/icons';
import '../Settings/Modal.scss';
import './radio.scss';

import { Link } from 'react-router-dom';

function Events() {
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
              //onClick={showModal}
            >
              <Link to="/events/newEvent">New Event </Link>
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
        title="Add New Departement"
        visible={visible}
        onOk={onOk}
        onCancel={hideModal}
      ></Modal>
    </div>
  );
}

export default Events;
