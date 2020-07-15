import React from 'react';
import PropTypes from 'prop-types';
import TimeScale from '../../TimeScale/componetns/TimeScale';
import ColumnDay from '../Days/components/ColumnDay';
import './calendar.scss';

const CalendarGrid = ({
  day, openPopup, checkDelete, events, getEventData,
}) => (
  <main className="main calendar__grid">
    <TimeScale />
    <div className="calendar__columns">
      <ColumnDay
        day={day}
        events={events}
        checkDelete={checkDelete}
        openPopup={openPopup}
        getEventData={getEventData}
      />
    </div>
  </main>
);

CalendarGrid.propTypes = {
  day: PropTypes.number,
  openPopup: PropTypes.func,
  checkDelete: PropTypes.func,
  events: PropTypes.instanceOf(Array),
  getEventData: PropTypes.func,
};

CalendarGrid.defaultProps = {
  day: PropTypes.number,
  openPopup: PropTypes.func,
  checkDelete: PropTypes.func,
  events: PropTypes.array,
  getEventData: PropTypes.func,
};

export default CalendarGrid;
