import React from 'react'
import TimeScale from './TimeScale'
import ColumnDay from './ColumnDay'
import './calendar.scss'

const CalendarGrid = ({ day, openPopup, checkDelete, events, getEventData }) => {
  return (
    <main className="main calendar__grid">
      <TimeScale />
      <div className="calendar__columns">
        <ColumnDay day={day} events={events} checkDelete={checkDelete} openPopup={openPopup} getEventData={getEventData}  />
      </div>
    </main>
  )
}

export default CalendarGrid