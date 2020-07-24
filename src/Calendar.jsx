/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import moment from 'moment';
import Header from './features/Header/componetns/Header';
import CalendarGrid from './features/Main/SectorCalendarGrig/componetns/CalendarGrid';
import Popup from './features/Modal/components/Popup';
import { fetchEventsList } from './Gateway';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      show: false,
      dataEvent: {
        title: '',
        timeStart: '',
        timeEnd: '',
        date: '',
        description: '',
        color: '#6495ed',
      },
      checkDelete: false,
      events: [],
    };
  }

  componentDidMount = () => {
    fetchEventsList()
      .then((events) => {
        this.setState({ events });
      });
  }

  componentDidUpdate(_, prevState) {
    const { show, checkDelete } = this.state;
    if (show !== prevState.show || checkDelete !== prevState.checkDelete) {
      fetchEventsList()
        .then((events) => {
          this.setState({
            events,
            checkDelete: false,
          });
        });
    }
  }

  handlePrevWeek = () => {
    const { day } = this.state;
    this.setState({ day: day - 7 });
  }

  handleNextWeek = () => {
    const { day } = this.state;
    this.setState({ day: day + 7 });
  }

  handleCurrentWeek = () => {
    this.setState({ day: 0 });
  }

  showPopup = (e) => {
    e.preventDefault();
    if (e.target.dataset.option === 'buttonCreateEvent') {
      this.setState({
        show: true,
        dataEvent: {
          title: '',
          timeStart: moment(new Date()).format('HH:00'),
          timeEnd: moment(new Date()).add(1, 'hour').format('HH:00'),
          date: moment(new Date()).format('DD MM YYYY'),
          description: '',
          color: '',
        },
      });
    }
    if (e.target.dataset.option === 'sell') {
      this.setState({
        show: true,
        dataEvent: {
          title: '',
          timeStart: e.target.dataset.time,
          timeEnd: e.target.nextElementSibling.dataset.time,
          date: e.target.parentNode.dataset.date,
          description: '',
          color: '',
        },
      });
    }
  }

  getEventData = (e, targetEvent) => {
    if (e.target.closest('[data-option="event"]') && !e.target.closest('.popup-delete')) {
      const {
        id, title, timeStart, date, timeEnd, description, color,
      } = targetEvent;
      this.setState({
        show: true,
        dataEvent: {
          id,
          title,
          timeStart,
          timeEnd,
          date,
          description,
          color,
        },
      });
    }
  }

  closePopup = () => {
    this.setState({ show: false });
  }

  handleDelete = () => {
    this.setState({ checkDelete: true });
  }

  render() {
    const {
      day, events, show, dataEvent,
    } = this.state;
    return (
      <div className="calendar">
        <Header
          day={day}
          handleNextWeek={this.handleNextWeek}
          handlePrevWeek={this.handlePrevWeek}
          handleCurrentWeek={this.handleCurrentWeek}
          openPopup={this.showPopup}
        />
        <CalendarGrid
          day={day}
          openPopup={this.showPopup}
          checkDelete={this.handleDelete}
          events={events}
          getEventData={this.getEventData}
        />
        {show && (<Popup closePopup={this.closePopup} {...dataEvent} />)}
      </div>

    );
  }
}

export default Calendar;
