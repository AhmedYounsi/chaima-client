import React from 'react';
import { BackTop, List } from 'antd';
import AnnouncementCard from './AnnouncementCard';

function ListAnnouncement() {
  return (
    <div className="site-layout-content">
      <BackTop />
      <List
        className="ant-list-item1"
        grid={{ gutter: 16, column: 3 }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 6,
        }}
        dataSource={'Hello'}
        itemLayout={'vertical'}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <AnnouncementCard item={item}></AnnouncementCard>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListAnnouncement;
