import React from 'react';
import { BackTop } from 'antd';

function Teams() {
  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Teams</span>
            <br />
            <span className="description-text">Configure your teams </span>
            <div className="line radical"></div>
          </div>
        </div>

        <div className="site-layout-content">list team</div>
      </div>
    </div>
  );
}

export default Teams;
