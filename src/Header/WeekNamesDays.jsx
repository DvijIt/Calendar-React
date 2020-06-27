import React from 'react'

class NameOfDay extends React.PureComponent {

  render() {
    const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    return (
      <div className="days-name-list">
        {weekDays.map((el, index) => <span className="day-name" key={index}>{el}</span>) }
      </div>
    )
  }
}


export default NameOfDay