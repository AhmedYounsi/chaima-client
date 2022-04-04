import React from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import ListUser from './ListEmployees';
import Teams from '../Teams/Teams';
import { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import AddTeamModal from '../Teams/AddTeam/AddTeam';

function Employees() {
  const [Selected, setSelected] = useState('1');
  const [AddTeam, setAddTeam] = useState(false);

  return (
    <div className="site-layout-background">
      <AddTeamModal AddTeam={AddTeam} />
      <div className="site-layout-header-deviser">
        <div className="header-middle">
          <div className="bp4-large">
            <Tabs
              animate={true}
              id="TabsExample"
              onChange={(e) => setSelected(e)}
              selectedTabId={Selected}
            >
              <Tab className="bp4-tab" id="1" title="Employees" />
              <Tab className="bp4-tab" id="2" title="Teams" />
              <Tabs.Expander />
            </Tabs>
          </div>
        </div>
        <div className="header-right">
          {(function () {
            switch (Selected) {
              case '1':
                return (
                  <Tooltip title="Add New Employe">
                    <Button
                      style={{ height: '35px' }}
                      shape="round"
                      type="primary"
                      ghost
                      icon={<PlusOutlined />}
                    >
                      <Link to="/employees/newUser"> New Employees </Link>
                    </Button>
                  </Tooltip>
                );

              case '2':
                return (
                  <Tooltip title="Add New Absence Type">
                    <Button
                      style={{ height: '35px' }}
                      shape="round"
                      type="primary"
                      ghost
                      icon={<PlusOutlined />}
                      onClick={() => setAddTeam(true)}
                    >
                      Add New Team
                    </Button>
                  </Tooltip>
                );

              default:
                break;
            }
          })()}
        </div>
      </div>
      {(function () {
        switch (Selected) {
          case '1':
            return <ListUser />;

          case '2':
            return <Teams />;

          default:
            break;
        }
      })()}
    </div>
  );
}

export default Employees;
