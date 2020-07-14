import React from 'react';
import PropTypes from 'prop-types';
import DeleteEventPopup from '../Modal/DeleteEventPopup';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showDeletePopup = () => {
    if (this) {
      this.setState({ show: true });
    }
  }

  closeDeletePopup = () => {
    if (this) {
      this.setState({ show: false });
    }
  }

  handleGetEventData = (e) => {
    const { getEventData } = this.props;
    getEventData(e, this.props);
  }

  render() {
    const {
      id, title, timeStart, timeEnd, description, color, checkDelete,
    } = this.props;

    const myStyle = {
      top: `${timeStart.slice(3)}px`,
      backgroundColor: color || '#6495ed',
    };
    const { show } = this.state;

    return (
      <div
        role="button"
        className="event"
        data-option="event"
        data-id={id}
        style={myStyle}
        onPointerEnter={this.showDeletePopup}
        onPointerLeave={this.closeDeletePopup}
        onClick={this.handleGetEventData}
        onKeyPress={this.handleGetEventData}
        tabIndex={0}
      >
        <h4 className="event-title">{title}</h4>
        <div className="event-time">{`${timeStart} - ${timeEnd}`}</div>
        <div className="event-description">{description}</div>
        {show && <DeleteEventPopup id={id} checkDelete={checkDelete} />}
      </div>
    );
  }
}

Event.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  timeStart: PropTypes.string,
  timeEnd: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  checkDelete: PropTypes.func,
  getEventData: PropTypes.func,
};

Event.defaultProps = {
  id: PropTypes.string,
  title: PropTypes.string,
  timeStart: PropTypes.string,
  timeEnd: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  checkDelete: PropTypes.func,
  getEventData: PropTypes.func,
};

export default Event;
