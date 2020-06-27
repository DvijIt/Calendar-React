import React, { PureComponent } from 'react'
import { Icon } from 'react-materialize'

class Navigation extends PureComponent {

  render() {
    const { handleNextWeek, handlePrevWeek, handleCurrentWeek } = this.props;
    return (
      <div className="header__navigation">
        <button className="white black-text btn btn-current-week" onClick={handleCurrentWeek}>Сегодня</button>
        <button className="white black-text btn-flat" onClick={handlePrevWeek}>
          <Icon small>
            chevron_left
        </Icon>
        </button>

        <button className="white black-text btn-flat" onClick={handleNextWeek}>
          <Icon small>
            chevron_right
        </Icon>
        </button>
      </div>
    )
  }
}

export default Navigation