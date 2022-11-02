import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ endDate, startdate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const deadline = endDate;
  const start = startdate;

  useEffect(() => {
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
    };
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [deadline, start]);

  return (
    <>
      <div className="hour">{days}</div> :{" "}
      <div className="minutes">{hours}</div>:{" "}
      <div className="seconds">{minutes}</div>
    </>
  );
};

export default Timer;
