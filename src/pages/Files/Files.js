import React, { useState } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import CompanyFiles from './CompanyFiles';

function Files() {
  const [Selected, setSelected] = useState('1');

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">
          <div className="bp4-large">
            <Tabs
              animate={true}
              id="TabsExample"
              onChange={(e) => setSelected(e)}
              selectedTabId={Selected}
            >
              <Tab className="bp4-tab" id="1" title="Company" />
              <Tab className="bp4-tab" id="2" title="Employee" />
              <Tabs.Expander />
            </Tabs>
          </div>
        </div>
        <div className="header-right"></div>
      </div>
      <div className="site-layout-content">
        {(function () {
          switch (Selected) {
            case '1':
              return <CompanyFiles />;

            case '2':
              return;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default Files;
