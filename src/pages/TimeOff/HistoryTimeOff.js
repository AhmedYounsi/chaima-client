import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import { useState } from 'react';

function HistoryTimeOff() {
  const [Selected, setSelected] = useState('1');

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">History</div>
      </div>
      <div className="site-layout-header-centred">
        <Tabs
          animate={true}
          id="TabsExample"
          onChange={(e) => setSelected(e)}
          selectedTabId={Selected}
        >
          <Tab className="bp4-tab" id="1" title="Approved" />
          <Tab className="bp4-tab" id="2" title="Declined" />

          <Tabs.Expander />
        </Tabs>
      </div>
      <div className="site-layout-content"></div>
    </div>
  );
}

export default HistoryTimeOff;
