import React, { PureComponent } from 'react';
import './styles.scss';

class TimeScale extends PureComponent {
  render() {
    const hoursArray = Array(23).fill('0');
    return (
      <aside className="calendar__timescale">
        {hoursArray.map((_, index) => {
          const hour = index + 1;
          return (
            <div key={hour} className="hour">
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </div>
          );
        })}
      </aside>
    );
  }
}

export default TimeScale;
