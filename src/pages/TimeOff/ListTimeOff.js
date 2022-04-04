import React from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import { CloseOutlined, CheckOutlined, EyeOutlined } from '@ant-design/icons';

function ListTimeOff() {
  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">Awaiting approval Time Off Request</div>
      </div>
      <div className="site-layout-content">
        <List
          itemLayout="horizontal"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 6,
          }}
          dataSource={'hello'}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              actions={[
                <Button
                  type="link"
                  icon={<CheckOutlined />}
                  style={{ color: 'green' }}
                ></Button>,
                <Button type="link" icon={<CloseOutlined />} danger></Button>,
                <Button
                  type="link"
                  icon={<EyeOutlined />}
                  style={{ color: 'gray' }}
                ></Button>,
              ]}
            >
              <Skeleton avatar title={false} active>
                <List.Item.Meta
                  avatar={<Avatar src={item} />}
                  title={<a href="https://ant.design">{item}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ListTimeOff;
