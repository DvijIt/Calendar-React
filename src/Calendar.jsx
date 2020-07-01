import React from 'react';
import Header from './Header/Header';
import CalendarGrid from './Main/CalendarGrid';
import moment from 'moment'

import Popup from './Modal/Popup';
import { fetchEventsList } from './Gateway'

class Calendar extends React.Component {
  state = {
    day: 0,
    show: false,
    dataEvent: {
      title: "",
      timeStart: "",
      timeEnd: "",
      date: '',
      description: "",
      color: "#6495ed",
    },
    checkDelete: false,
    events: [],

  }

  handlePrevWeek = () => {
    this.setState({ day: this.state.day - 7 })
  }
  handleNextWeek = () => {
    this.setState({ day: this.state.day + 7 })
  }
  handleCurrentWeek = () => {
    this.setState({ day: 0 })
  }

  currentMonth = () => {
    let startDate = moment().startOf("isoWeek").add(this.state.day, "day");
    let endDate = moment().startOf("isoWeek").add(this.state.day + 6, "day");

    const startMonth = startDate.format("MMM");
    const startYear = startDate.format("YYYY");;
    const endMonth = endDate.format("MMM");
    const endYear = endDate.format("YYYY");

    let correctDate = `${startMonth} ${startYear} - ${endMonth} ${endYear}`;

    if (startMonth === endMonth && startYear === endYear) {
      correctDate = `${startMonth} ${endYear}`;
    } else if (startYear === endYear) {
      correctDate = `${startMonth} - ${endMonth} ${startYear}`;
    }

    return correctDate;
  }

  showPopup = (e) => {
    e.preventDefault();
    if (e.target.dataset.option === 'buttonCreateEvent') {
      this.setState({
        show: true,
        dataEvent: {
          title: "",
          timeStart: moment(new Date()).format('HH:00'),
          timeEnd: moment(new Date()).add(1, "hour").format(`HH:00`),
          date: moment(new Date()).format('DD MM YYYY'),
          description: "",
          color: "",
        }
      })
    }
    if (e.target.dataset.option === 'sell') {
      this.setState({
        show: true,
        dataEvent: {
          title: "",
          timeStart: e.target.dataset.time,
          timeEnd: e.target.nextElementSibling.dataset.time,
          date: e.target.parentNode.dataset.date,
          description: "",
          color: "",
        }
      })
    }

  }

  getEventData = (e, targetEvent) => {
    if (e.target.closest('[data-option="event"]') && !e.target.closest('.popup-delete')) {
      const { id, title, timeStart, date, timeEnd, description, color } = targetEvent
      console.log(targetEvent);
      this.setState({
        show: true,
        dataEvent: {
          id,
          title,
          timeStart,
          timeEnd,
          date,
          description,
          color
        }
      })
    }


  }

  closePopup = () => {
    this.setState({ show: false })
  }

  handleDelete = () => {
    this.setState({ checkDelete: true })
  }

  componentDidMount = () => {
    fetchEventsList()
      .then(events => {
        this.setState({ events })
      })
  }

  componentDidUpdate(_, prevState) {
    if (this.state.show !== prevState.show || this.state.checkDelete !== prevState.checkDelete) {
      fetchEventsList()
        .then(events => {
          this.setState({
            events,
            checkDelete: false
          });
        })
    }
  }

  render() {
    return (
      <div className="calendar">
        <Header
          day={this.state.day}
          handleNextWeek={this.handleNextWeek}
          handlePrevWeek={this.handlePrevWeek}
          handleCurrentWeek={this.handleCurrentWeek}
          currentMonth={this.currentMonth()}
          openPopup={this.showPopup}
        />
        <CalendarGrid day={this.state.day} openPopup={this.showPopup} checkDelete={this.handleDelete} events={this.state.events} getEventData={this.getEventData} />
        {this.state.show && (<Popup closePopup={this.closePopup} {...this.state.dataEvent} />)}
      </div>

    )
  }
}

export default Calendar