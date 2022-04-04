import React from 'react';
import './Profile.scss';
import { BackTop } from 'antd';

function MyTimeOff() {
  return (
    <div className="sections-vertical">
      <BackTop />
      <div className="section">
        <div className="pad">
          <div className="padForm">
            <div className="header-pad">
              <span className="title-text">Your Time Off</span>
              <br />
              <span className="description-text">Your past absences</span>
              <div className="line radical"></div>
            </div>
            <div className="form-pad"></div>
          </div>
        </div>
      </div>
      <div className="pad">
        <div className="padForm"></div>
      </div>
    </div>
  );
}

export default MyTimeOff;
