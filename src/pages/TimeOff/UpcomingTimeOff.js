import React from 'react';
import { List, Avatar, Skeleton } from 'antd';

function UpcomingTimeOff() {
  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">Upcoming Time Off</div>
      </div>
      <div className="site-layout-content">
        <List
          itemLayout="horizontal"
          dataSource={'11'}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <Skeleton avatar title={false} active>
                <List.Item.Meta
                  avatar={<Avatar src={item} />}
                  title={<a href="https://ant.design">{item}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default UpcomingTimeOff;
