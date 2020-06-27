import React from 'react'
import Event from './Event'

class Sell extends React.Component {

  render() {
    const { date, events, checkDelete, openPopup, getEventData } = this.props
    let hoursArray = Array(24).fill("0");
    return(
      hoursArray.map((_, index) => {
        const time = index < 10 ? `0${index}:00` : `${index}:00`
        const event = events.find(event => event.date === date && event.timeStart === time);
        return (
          <div
            key={index}
            className="sell"
            data-time={time}
            data-option='sell'
            onClick={openPopup}
          >
            {typeof event !== 'undefined' && (<Event {...event} checkDelete={checkDelete} openPopup={openPopup} getEventData={getEventData}  />) }
          </div>
        );
      })
    )
  }
}

export default Sell
