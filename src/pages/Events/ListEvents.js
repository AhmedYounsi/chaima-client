import React from 'react';
import { BackTop, List } from 'antd';
import EventCard from './EventCard';

function ListEvents() {
  return (
    <div className="site-layout-content">
      <BackTop />
      <List
        className={'ant-list-item1'}
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
            <EventCard item={item}></EventCard>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListEvents;
