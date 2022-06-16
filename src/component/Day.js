import React, { useState, useContext, useEffect } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

function Day({ day, weekindx }) {
  const [dayEvents, setDayEvents] = useState([]);

  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvents,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );

    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "currentDayBg"
      : "";
  }

  return (
    <div>
      <header>
        {weekindx === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
        <p className={`${getCurrentDayClass()}`}>{day.format("DD")}</p>
      </header>
      <div
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
        className="red"
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvents(evt)}
            style={{ backgroundColor: evt.label }}
            className="selected--events"
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
