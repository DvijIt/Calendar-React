import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import DatePicker from '../components/DatePicker'
import { createEvent , editEvent } from '../Gateway'

class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...this.props
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount = () => {
    console.log(typeof this.state.id);
  }

  changeDate = (value) => {
    console.log('qwe');
    
    this.setState(
      {
        ...this.state,
        date: value
      }
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.id === undefined ? this.createNewEvent() : this.editEventData()
  };

  createNewEvent = () => {
    createEvent(this.state)
      .then(this.props.closePopup)
  }

  editEventData = () => {
    editEvent(this.state.id, this.state).then(this.props.closePopup)
  }
  
  render() {
    return (
      <div id="modal1" className="popup z-depth-4" >
        <div className="modal-content">
          <form className="popup-form" onSubmit={this.handleSubmit}>
            <input
              className="popup__title"
              type="text"
              name="title"
              placeholder="Название"
              value={this.state.title}
              onChange={this.handleChange}
            />

            <div className="popup__data">
              <Icon small>access_time</Icon>

              <div className="input-field">
                <DatePicker getDate={this.changeDate} date={this.state.date} />
              </div>
              <div className="input-field">
                <input
                  className="dataStart"
                  type="text"
                  name="timeStart"
                  value={this.state.timeStart}
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <input
                  className="dataEnd"
                  type="text"
                  name="timeEnd"
                  value={this.state.timeEnd}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="subject">
              <Icon small>subject</Icon>
              <input
                className="popup-form__description"
                type="text"
                name="description"
                placeholder="Добавить описание"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <input
              type="color"
              className="popup-form__color"
              name="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
            <div>
              <label htmlFor="color">Цвет</label>
            </div>
            <button
              className="btn waves-effect waves-light blue"
              type="submit"
              name="submit"
              onClick={this.handleSubmit}
            >
              Сохранить
          </button>
            <button
              className="close btn-flat"
              onClick={this.props.closePopup}
            >
              <Icon small>close</Icon>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;
