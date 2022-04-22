import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from '@blueprintjs/core';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import GeneralInfoEmployes from './GeneralInfoEmployes';

function ProfileEmployee() {
  const [Selected, setSelected] = useState('1');
  const [Employee, setEmployee] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    setEmployee(state.employee);
  }, [state]);

  return (
    <div className="site-layout-background">
      <div className="site-layout-header-deviser">
        <div className="header-middle">
          {Employee.name + ' ' + Employee.lastName}{' '}
        </div>
        <div className="header-left">
          <Link to="/employees">
            <Button icon={<ArrowLeftOutlined />} type="link"></Button>
          </Link>
        </div>
      </div>
      <div className="site-layout-header-centred">
        <Tabs
          defaultActiveKey="1"
          onChange={(e) => setSelected(e)}
          selectedTabId={Selected}
          animate={true}
        >
          <Tab id="1" title="Genaral and Job Information" />

          <Tab id="2" title="Time Off" />
          <Tab id="3" title="My Documents" />

          <Tabs.Expander />
        </Tabs>
      </div>
      <div className="site-layout-content">
        {(function () {
          switch (Selected) {
            case '1':
              return <GeneralInfoEmployes Employee={Employee} />;

            case '2':
              return;
            case '3':
              return;

            default:
              break;
          }
        })()}
      </div>
    </div>
  );
}

export default ProfileEmployee;
