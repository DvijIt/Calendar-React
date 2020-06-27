import React from 'react'

const MonthInfo = ({ getCurrentMonth }) => {
  return (
    <div className="header__month-info">
      <span>{getCurrentMonth}</span>
    </div>
  )
}

export default MonthInfo