import React from 'react';
import { PageHeader, Button, Descriptions } from 'antd';
import './HeaderPage.scss';
import { Link } from 'react-router-dom';

function ListEmployees() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        ghost={false}
        title="Employees"
        subTitle="Configure employees"
        extra={[
          <Button key="1" type="primary">
            <Link to="/employees/newUser">New Employees </Link>
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

export default ListEmployees;
