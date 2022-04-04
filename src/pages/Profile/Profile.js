import React, { useState } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import GeneralInfo from './GeneralInfo';
import JobInfo from './JobInfo';
import MyTimeOff from './MyTimeOff';
import MyDocuments from './MyDocuments';

function Profile() {
  const [Selected, setSelected] = useState('1');

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-centred">chaima Dey</div>
      <div className="site-layout-header-centred">
        <Tabs
          defaultActiveKey="1"
          onChange={(e) => setSelected(e)}
          selectedTabId={Selected}
          animate={true}
        >
          <Tab id="1" title="Genral Information" />

          <Tab id="2" title="Job Information" />
          <Tab id="3" title="Time Off" />
          <Tab id="4" title="My Documents" />

          <Tabs.Expander />
        </Tabs>
      </div>
      <div className="site-layout-content">
        {(function () {
          switch (Selected) {
            case '1':
              return <GeneralInfo />;

            case '2':
              return <JobInfo />;
            case '3':
              return <MyTimeOff />;
            case '4':
              return <MyDocuments />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default Profile;
