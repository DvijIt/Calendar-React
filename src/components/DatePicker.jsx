import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize'

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.date = React.createRef();
  }
  componentDidMount = () => {
    let elems = document.querySelector('.datepicker');
    M.Datepicker.init(elems, this.dateOption);
  }

  handleChange = () => {
    const elem = document.querySelector('.datepicker');
    const value = elem.M_Datepicker.el.value;
    this.props.getDate(value);
  }

  dateOption = {
    autoClose: true,
    onClose: this.handleChange,
    format: 'dd mm yyyy',
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      months: [
        'Январь',
        'Ферварь',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
      ],
      monthsShort: [
        'Янв',
        'Ферв',
        'Матр',
        'Апр',
        'Май',
        'Июль',
        'Июль',
        'Авг',
        'Сен',
        'Окт',
        'Нояб',
        'Дек'
      ],
      nextMonth: '›',
      previousMonth: '‹',
      weekdays: [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ],
      weekdaysAbbrev: [
        'В',
        'П',
        'П',
        'С',
        'Ч',
        'П',
        'С'
      ],
      weekdaysShort: [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб'
      ]
    },

  }
  render() {
    return(
      <input type="text" className='datepicker' value={this.props.date} onChange={this.handleChange}/>
    )
  }
} 