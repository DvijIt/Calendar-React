import React from 'react';
import PropTypes from 'prop-types';

const MonthInfo = ({ getCurrentMonth }) => (
  <div className="header__month-info">
    <span>{getCurrentMonth}</span>
  </div>
);

MonthInfo.propTypes = {
  getCurrentMonth: PropTypes.string,
};

MonthInfo.defaultProps = {
  getCurrentMonth: PropTypes.string,
};

export default MonthInfo;
