/* eslint-disable */
import React, { useState } from 'react';
import { BackTop, List } from 'antd';
import EventCard from './EventCard';
import DetailsEvent from './DetailsEvent';
import './EventCard.scss';

function ListEvents() {
  const [Event, setEvent] = useState(null);

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
            <EventCard
              item={item}
              onClick={(item) => setEvent(item)}
            ></EventCard>
          </List.Item>
        )}
      />
    </div>
  );
}

export default ListEvents;
