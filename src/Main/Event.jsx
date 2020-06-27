import React from 'react'
import DeleteEventPopup from '../Modal/DeleteEventPopup'

class Event extends React.Component {
  state = {
    show: false
  }

  showDeletePopup = () => {
    if (this) {
      this.setState({ show: true })
    }
  }

  closeDeletePopup = () => {
    if (this) {
      this.setState({ show: false })
    }

  }

  handleGetEventData = (e) => {
    this.props.getEventData(e, this.props)
  }

  render() {
    const { id, title, timeStart, timeEnd, description, color, checkDelete } = this.props
    
    const myStyle = {
      top: `${timeStart.slice(3)}px`,
      backgroundColor: color || '#6495ed' 
    }

    return (
      <div className='event'
        data-option='event'
        data-id={id}
        style={myStyle}
        onPointerEnter={this.showDeletePopup}
        onPointerLeave={this.closeDeletePopup}
        onClick={this.handleGetEventData}
      >
        <h4 className="event-title">{title}</h4>
        <div className="event-time">{`${timeStart} - ${timeEnd}`}</div>
        <div className="event-description">{description}</div>
        {this.state.show && <DeleteEventPopup id={id} checkDelete={checkDelete} />}
      </div>
    )
  }
}

export default Event
