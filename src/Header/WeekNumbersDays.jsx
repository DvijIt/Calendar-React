import React from 'react'
import moment from 'moment'

const NumbersOfDay = ({ day }) => {
  let currentDay = day

  let arr = Array(7).fill("0");
  const weekDays = arr.map(() => {
    let activeDay;
    const startOfWeek = moment().startOf("isoWeek").add(currentDay, "day");
    if (moment().format("DD.MM.YY") === startOfWeek.format("DD.MM.YY")) {
      activeDay = "day-number active";
    } else {
      activeDay = "day-number";
    }

    currentDay++;
    return (
        <span key={currentDay} className={activeDay}>{startOfWeek.format("DD")}</span>
    );
  });

  return <div className="days-numbers-list">{weekDays}</div>;

}

export default NumbersOfDay