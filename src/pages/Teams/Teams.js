import React from 'react';
import { PageHeader, Button, Divider } from 'antd';

function Teams() {
  return (
    <div>
      <Divider></Divider>
      <PageHeader
        className="site-page-header"
        ghost={false}
        title="Teams"
        subTitle="Configure your teams"
        extra={[
          <Button key="1" type="primary">
            New Team
          </Button>,
        ]}
      ></PageHeader>
    </div>
  );
}

export default Teams;
