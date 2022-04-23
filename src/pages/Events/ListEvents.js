/* eslint-disable */
import React, { useEffect, useState } from "react";
import { BackTop, List } from "antd";
import EventCard from "./EventCard";
import DetailsEvent from "./DetailsEvent";
import "./EventCard.scss";
import { GetEvents } from "../../actions/EventAction";

function ListEvents() {
  const [Event, setEvent] = useState([]);

  const getEvent = async () => {
    const res = await GetEvents();
    setEvent(res);
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="site-layout-content">
      <BackTop />
     <div className="event_container">
     {Event.length > 0 &&
        Event.map((el, index) => {
          return <EventCard event={el} index={index+1} key={index}></EventCard>;
        })}
     </div>
    </div>
  );
}

export default ListEvents;
