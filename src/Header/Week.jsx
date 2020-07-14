import React from 'react';
import PropTypes from 'prop-types';
import NameOfDay from './WeekNamesDays';
import NumberOfDay from './WeekNumbersDays';

const Week = ({ day }) => (
  <div className="header__week">
    <div className="timezone">
      {new Date().toString().split(' ')[5].slice(0, 6)}
    </div>
    <div className="weekdata">
      <NameOfDay />
      <NumberOfDay day={day} />
    </div>
  </div>
);

Week.propTypes = {
  day: PropTypes.number,
};

Week.defaultProps = {
  day: PropTypes.number,
};

export default Week;
