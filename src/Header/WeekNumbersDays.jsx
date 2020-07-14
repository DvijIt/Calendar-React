import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const NumbersOfDay = ({ day }) => {
  let currentDay = day;

  const arr = Array(7).fill('0');
  const weekDays = arr.map(() => {
    let activeDay;
    const startOfWeek = moment().startOf('isoWeek').add(currentDay, 'day');
    if (moment().format('DD.MM.YY') === startOfWeek.format('DD.MM.YY')) {
      activeDay = 'day-number active';
    } else {
      activeDay = 'day-number';
    }

    currentDay += 1;
    return (
      <span key={currentDay} className={activeDay}>{startOfWeek.format('DD')}</span>
    );
  });

  return <div className="days-numbers-list">{weekDays}</div>;
};

NumbersOfDay.propTypes = {
  day: PropTypes.number,
};

NumbersOfDay.defaultProps = {
  day: PropTypes.number,
};

export default NumbersOfDay;
