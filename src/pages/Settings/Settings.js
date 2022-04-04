import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import { useState } from 'react';
import GeneralSettings from './General/GeneralSettings';
import TimeOffSettings from './TimeOff/TimeOffSettings';
import DocumentSettings from './Document/DocumentSettings';
import Permession from './Permission/Permession';

function Settings() {
  const [Selected, setSelected] = useState('1');

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-centred">
        <Tabs
          className="bp4-large"
          defaultActiveKey="1"
          onChange={(e) => setSelected(e)}
          selectedTabId={Selected}
          animate={true}
        >
          <Tab
            className="bp4-tab"
            id="1"
            title="General"
            //panel={<GeneralSettings />}
          />

          <Tab
            className="bp4-tab"
            id="2"
            title="Time Off"
            // panel={<TimeOffSettings />}
          />
          <Tab
            className="bp4-tab"
            id="3"
            title="Documents"
            // panel={<DocumentSettings />}
          />
          <Tab
            className="bp4-tab"
            id="4"
            title="Permession"
            // panel={<Permession />}
          />

          <Tabs.Expander />
        </Tabs>
      </div>
      <div className="site-layout-content">
        {(function () {
          switch (Selected) {
            case '1':
              return <GeneralSettings />;

            case '2':
              return <TimeOffSettings />;

            case '3':
              return <DocumentSettings />;

            case '4':
              return <Permession />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default Settings;
