/* eslint-disable */
import React from 'react';
import { Divider, PageHeader, Button, Descriptions, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Departements from './Departement/DepartementSettings';

function GeneralSettings() {
  return (
    <>
      <Divider></Divider>

      <PageHeader
        className="site-page-header"
        ghost={false}
        title="Departement and Post Title"
        // subTitle="Configure "
        extra={[
          <Tooltip title="Add Departement">
            <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
          </Tooltip>,
        ]}
      >
        <Descriptions Descriptions size="middle" column={2}>
          <Descriptions.Item></Descriptions.Item>
          <Descriptions.Item>
            <Departements />
          </Descriptions.Item>
        </Descriptions>
      </PageHeader>
    </>
  );
}

export default GeneralSettings;
