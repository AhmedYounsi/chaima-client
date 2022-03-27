import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import { useState } from 'react';
import GeneralSettings from './General/GeneralSettings';
import TimeOffSettings from './TimeOff/TimeOffSettings';
import DocumentSettings from './Document/DocumentSettings';
import Permession from './Permission/Permession';
import WorkPlaces from './General/WorkPlaces/WorkPlaces';

function Settings() {
  const [Selected, setSelected] = useState('1');

  return (
    <>
      <Tabs
        className="bp3-large"
        defaultActiveKey="1"
        onChange={(e) => setSelected(e)}
        selectedTabId={Selected}
      >
        <Tab
          className="bp3-tab"
          id="1"
          title="General"
          panel={<GeneralSettings />}
        />
        <Tab
          className="bp3-tab"
          id="2"
          title="WorkPlaces"
          panel={<WorkPlaces />}
        />
        <Tab
          className="bp3-tab"
          id="3"
          title="Time Off"
          panel={<TimeOffSettings />}
        />
        <Tab
          className="bp3-tab"
          id="4"
          title="Documents"
          panel={<DocumentSettings />}
        />
        <Tab
          className="bp3-tab"
          id="5"
          title="Permession"
          panel={<Permession />}
        />

        <Tabs.Expander />
      </Tabs>
    </>
  );
}

export default Settings;
