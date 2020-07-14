import React, { PureComponent } from 'react';
import { Icon } from 'react-materialize';
import PropTypes from 'prop-types';

class Navigation extends PureComponent {
  render() {
    const { handleNextWeek, handlePrevWeek, handleCurrentWeek } = this.props;
    return (
      <div className="header__navigation">
        <button type="button" className="white black-text btn btn-current-week" onClick={handleCurrentWeek}>Сегодня</button>
        <button type="button" className="white black-text btn-flat" onClick={handlePrevWeek}>
          <Icon small>
            chevron_left
          </Icon>
        </button>
        <button
          type="button"
          className="white black-text btn-flat"
          onClick={handleNextWeek}
        >
          <Icon small>
            chevron_right
          </Icon>
        </button>
      </div>
    );
  }
}

Navigation.propTypes = {
  handleCurrentWeek: PropTypes.func,
  handlePrevWeek: PropTypes.func,
  handleNextWeek: PropTypes.func,
};

Navigation.defaultProps = {
  handleCurrentWeek: PropTypes.func,
  handlePrevWeek: PropTypes.func,
  handleNextWeek: PropTypes.func,
};

export default Navigation;
