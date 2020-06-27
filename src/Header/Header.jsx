import React from 'react'
import Navigation from './Navigation'
import './header.scss'
import MonthInfo from './MonthInfo'
import Week from './Week'
import CreateButton from './CreateEventButton'

const Header = ({
  day,
  handleNextWeek,
  handlePrevWeek,
  handleCurrentWeek,
  currentMonth,
  openPopup
}) => {
  
  return (
    <header className='calendar__header header'>
      <div className="header__top-info">
        <CreateButton openPopup={openPopup} />
        <Navigation
          handleNextWeek={handleNextWeek}
          handlePrevWeek={handlePrevWeek}
          handleCurrentWeek={handleCurrentWeek}
        />
        <MonthInfo getCurrentMonth={currentMonth} />
      </div>
      <Week day={day} />
    </header>
  )
}

export default Header