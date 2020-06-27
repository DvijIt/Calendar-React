import React from 'react'
import NameOfDay from './WeekNamesDays'
import NumberOfDay from './WeekNumbersDays'

const Week = ({ day }) => {

  return (
    <div className="header__week">
      <div className="timezone">
        {new Date().toString().split(' ')[5].slice(0, 6)}
      </div>
      <div className="weekdata">
        <NameOfDay />
        <NumberOfDay day={day} />
      </div>
    </div>
  )
}

export default Week