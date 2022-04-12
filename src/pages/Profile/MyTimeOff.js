import React from 'react';
import { BackTop } from 'antd';

function MyTimeOff() {
  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="section">
        <div className="pad">
          <div className="padForm">
            <div className="header-pad">
              <span className="title-text">Your Balance </span>
              <br />
              <span className="description-text">Absence counter</span>
              <div className="line radical"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pad">
        <div className="padForm">
          <div className="header-pad">
            <span className="title-text">Your Time Off</span>
            <br />
            <span className="description-text">Your past absences</span>
            <div className="line radical"></div>
          </div>
          <div className="form-pad2"></div>
        </div>
      </div>
    </div>
  );
}

export default MyTimeOff;
