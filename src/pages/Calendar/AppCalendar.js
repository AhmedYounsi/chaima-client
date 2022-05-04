/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GetEvents } from '../../actions/EventAction';
import './Calendar.scss';
const localizer = momentLocalizer(moment);
function AppCalendar() {
  const [Events, setEvents] = useState([]);
  const getEvent = async () => {
    const res = await GetEvents();
    // setEvents(res)
    let arr = [];
    res.map((el) => {
      arr.push({
        start: new Date(
          new Date(el.start).getFullYear(),
          new Date(el.start).getMonth(),
          new Date(el.start).getDate(),
          el.time[0],
          0
        ),
        end: new Date(
          new Date(el.end).getFullYear(),
          new Date(el.end).getMonth(),
          new Date(el.end).getDate(),
          el.time[1],
          0
        ),
        title: el.title,
      });
    });
    setEvents(arr);
  };

  useEffect(() => {
    getEvent();
  }, []);

  const events = [
    {
      start: new Date(2022, 3, 27, 10, 0),
      end: new Date(2022, 3, 27, 14, 0),
      title: 'Some title',
    },
  ];
  return (
    <div className="site-layout-background">
      <div className="site-layout-content">
        <div className="calender-container">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={Events}
            style={{ height: '100vh' }}
          />
        </div>
      </div>
    </div>
  );
}

export default AppCalendar;
