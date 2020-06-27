import React, { PureComponent } from 'react'

class CreateButton extends PureComponent {

  render() {
    return (
      <div className="header__create-event">
        <button
          className="waves-effect waves-teal z-depth-2 white black-text create-btn"
          onClick={this.props.openPopup}
          data-option="buttonCreateEvent">
          Создать
        </button>
      </div>

    )
  }
}

export default CreateButton