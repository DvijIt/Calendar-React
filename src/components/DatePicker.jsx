import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize';
import PropTypes from 'prop-types';

export default class DatePicker extends Component {
  componentDidMount = () => {
    const dateOption = {
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
          'Декабрь',
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
          'Дек',
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
          'Суббота',
        ],
        weekdaysAbbrev: [
          'В',
          'П',
          'П',
          'С',
          'Ч',
          'П',
          'С',
        ],
        weekdaysShort: [
          'Вс',
          'Пн',
          'Вт',
          'Ср',
          'Чт',
          'Пт',
          'Сб',
        ],
      },
    };
    const elems = document.querySelector('.datepicker');
    M.Datepicker.init(elems, dateOption);
  }

  handleChange = () => {
    const elem = document.querySelector('.datepicker');
    const { value } = elem.M_Datepicker.el;
    const { getDate } = this.props;
    getDate(value);
  }

  render() {
    const { date } = this.props;
    return (
      <input type="text" className="datepicker" value={date} onChange={this.handleChange} />
    );
  }
}

DatePicker.propTypes = {
  date: PropTypes.string,
  getDate: PropTypes.func,
};

DatePicker.defaultProps = {
  date: PropTypes.number,
  getDate: PropTypes.func,
};
