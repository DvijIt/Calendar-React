import React from 'react'
import RedLine from './RedLine'
import moment from 'moment'
import Sell from './Sell'

const ColumnDay = ({ day, events, checkDelete, openPopup, getEventData }) => {
  let id = day

  let daysArray = Array(7).fill("0");

  const columnsDays = daysArray.map(() => {
    const startOfWeek = moment().startOf("isoWeek").add(id, "day");
    id++;
    return startOfWeek.format('DD MM YYYY')
  });

  return (
    columnsDays.map(column => {
      return (
        <div
          key={column}
          className="column__day"
          data-date={column}>
          <Sell date={column} events={events} checkDelete={checkDelete} openPopup={openPopup} getEventData={getEventData}  />
          {column === moment().format("DD-MM-YYYY") && (<RedLine />)}
        </div>
      )
    })
  )
}

export default ColumnDay