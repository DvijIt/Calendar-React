/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Event from '../../Event/componetns/Event';

class Sell extends React.Component {
  render() {
    const {
      date, events, checkDelete, openPopup, getEventData,
    } = this.props;
    const hoursArray = Array(24).fill('0');
    return (
      hoursArray.map((_, index) => {
        const time = index < 10 ? `0${index}:00` : `${index}:00`;
        const findEvent = events.find((event) => event.date === date && event.timeStart === time);
        return (
          <div
            role="button"
            tabIndex="0"
            key={time}
            className="sell"
            data-time={time}
            data-option="sell"
            onClick={openPopup}
            onKeyPress={openPopup}
          >
            {typeof findEvent !== 'undefined' && (<Event {...findEvent} checkDelete={checkDelete} openPopup={openPopup} getEventData={getEventData} />) }
          </div>
        );
      })
    );
  }
}

Sell.propTypes = {
  date: PropTypes.string,
  openPopup: PropTypes.func,
  checkDelete: PropTypes.func,
  events: PropTypes.instanceOf(Array),
  getEventData: PropTypes.func,
};

Sell.defaultProps = {
  date: PropTypes.string,
  openPopup: PropTypes.func,
  checkDelete: PropTypes.func,
  events: PropTypes.array,
  getEventData: PropTypes.func,
};

export default Sell;
