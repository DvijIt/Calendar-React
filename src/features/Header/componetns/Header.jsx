import PropTypes from 'prop-types';
import React from 'react';
import CreateButton from '../Navigation/componetns/CreateEventButton';
import MonthInfo from '../Navigation/componetns/MonthInfo';
import Navigation from '../Navigation/componetns/Navigation';
import './styles.scss';
import Week from '../Week/componetns/Week';

const Header = ({
  day,
  handleNextWeek,
  handlePrevWeek,
  handleCurrentWeek,
  openPopup,
}) => (
  <header className="calendar__header header">
    <div className="header__top-info">
      <CreateButton openPopup={openPopup} />
      <Navigation
        handleNextWeek={handleNextWeek}
        handlePrevWeek={handlePrevWeek}
        handleCurrentWeek={handleCurrentWeek}
      />
      <MonthInfo day={day} />
    </div>
    <Week day={day} />
  </header>
);

Header.propTypes = {
  day: PropTypes.number,
  handleNextWeek: PropTypes.func,
  handlePrevWeek: PropTypes.func,
  handleCurrentWeek: PropTypes.func,
  openPopup: PropTypes.func,
};

Header.defaultProps = {
  day: PropTypes.number,
  handleNextWeek: PropTypes.func,
  handlePrevWeek: PropTypes.func,
  handleCurrentWeek: PropTypes.func,
  openPopup: PropTypes.func,
};

export default Header;
