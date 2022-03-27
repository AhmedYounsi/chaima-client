import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import ListUser from './ListEmployees';
import Teams from '../Teams/Teams';
import { useState } from 'react';

function Employees() {
  const [Selected, setSelected] = useState('1');

  return (
    <div className="bp3-large">
      <Tabs
        id="TabsExample"
        onChange={(e) => setSelected(e)}
        selectedTabId={Selected}
      >
        <Tab
          className="bp3-tab"
          id="1"
          title="Employees"
          panel={<ListUser />}
        />
        <Tab className="bp3-tab" id="2" title="Teams" panel={<Teams />} />
        <Tabs.Expander />
      </Tabs>

    </div>
  );
}

export default Employees;
