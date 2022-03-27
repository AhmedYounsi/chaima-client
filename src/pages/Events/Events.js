import React from 'react';
import { PageHeader, Button, Descriptions, BackTop } from 'antd';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div>
      <BackTop></BackTop>
      <PageHeader
        className="site-page-header"
        ghost={false}
        title="Events"
        subTitle="Configure employees"
        extra={[
          <Button key="1" type="primary">
            <Link to="/events/newEvent">New Event </Link>
          </Button>,
        ]}
      >
        <Descriptions className="description" size="small">
          <Descriptions.Item label="">
            Here are all the employees at your company,including terminated ones
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </div>
  );
}

export default Events;
