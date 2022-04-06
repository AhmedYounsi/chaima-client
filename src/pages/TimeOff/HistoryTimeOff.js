import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import { useState } from 'react';
import ApprovedList from './ApprovedList';
import DeclinedList from './DeclinedList';

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
      <div className="site-layout-content">
        {(function () {
          switch (Selected) {
            case '1':
              return <ApprovedList />;

            case '2':
              return <DeclinedList />;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default HistoryTimeOff;
