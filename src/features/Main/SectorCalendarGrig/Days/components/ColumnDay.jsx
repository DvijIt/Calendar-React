import React from 'react';
import moment from 'moment';
import RedLine from '../../Redline/components/RedLine';
import Sell from '../components/Sell';
import './styles.scss';

const ColumnDay = ({
  day, events, checkDelete, openPopup, getEventData,
}) => {
  let id = day;
  const daysArray = Array(7).fill('0');
  const columnsDays = daysArray.map(() => {
    const startOfWeek = moment().startOf('isoWeek').add(id, 'day');
    id += 1;
    return startOfWeek.format('DD MM YYYY');
  });

  return (
    columnsDays.map((column) => (
      <div
        key={column}
        className="column__day"
        data-date={column}
      >
        <Sell
          date={column}
          events={events}
          checkDelete={checkDelete}
          openPopup={openPopup}
          getEventData={getEventData}
        />
        {column === moment().format('DD MM YYYY') && (<RedLine />)}
      </div>
    ))
  );
};

export default ColumnDay;
