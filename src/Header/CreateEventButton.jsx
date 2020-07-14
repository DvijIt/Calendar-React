import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CreateButton extends PureComponent {
  render() {
    const { openPopup } = this.props;
    return (
      <div className="header__create-event">
        <button
          type="button"
          className="waves-effect waves-teal z-depth-2 white black-text create-btn"
          onClick={openPopup}
          data-option="buttonCreateEvent"
        >
          Создать
        </button>
      </div>

    );
  }
}

CreateButton.propTypes = {
  openPopup: PropTypes.func,
};

CreateButton.defaultProps = {
  openPopup: PropTypes.func,
};

export default CreateButton;
