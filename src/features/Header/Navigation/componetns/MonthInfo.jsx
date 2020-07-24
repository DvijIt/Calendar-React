import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
const MonthInfo = ({ day }) => {

  const startDate = moment().startOf('isoWeek').add(day, 'day');
  const endDate = moment().startOf('isoWeek').add(day + 6, 'day');

  const startMonth = startDate.format('MMM');
  const startYear = startDate.format('YYYY');
  const endMonth = endDate.format('MMM');
  const endYear = endDate.format('YYYY');

  let correctDate = `${startMonth} ${startYear} - ${endMonth} ${endYear}`;

  if (startMonth === endMonth && startYear === endYear) {
    correctDate = `${startMonth} ${endYear}`;
  } else if (startYear === endYear) {
    correctDate = `${startMonth} - ${endMonth} ${startYear}`;
  }
  return (
    <div className="header__month-info">
      <span>{correctDate}</span>
    </div>
  );
}
MonthInfo.propTypes = {
  day: PropTypes.number,
};

MonthInfo.defaultProps = {
  day: PropTypes.number,
};

export default MonthInfo;
