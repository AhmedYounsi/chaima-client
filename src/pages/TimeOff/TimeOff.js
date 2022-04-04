import React from 'react';
import { BackTop } from 'antd';
import './TimeOff.scss';
import ListTimeOff from './ListTimeOff';
import OutOfOffice from './OutOfOffice';
import UpcomingTimeOff from './UpcomingTimeOff';
import HistoryTimeOff from './HistoryTimeOff';
function TimeOff() {
  return (
    <div className="div-timeOff-global">
      <BackTop></BackTop>

      <div className="div-timeOff">
        <div className="blockA">
          <ListTimeOff />
        </div>
        <div className="blockB">
          <OutOfOffice />
          <UpcomingTimeOff />
        </div>
      </div>
      <div className="div-history">
        <HistoryTimeOff />
      </div>
    </div>
  );
}

export default TimeOff;
