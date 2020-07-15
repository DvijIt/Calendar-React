import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-materialize';
import { deleteEvent } from '../../../Gateway';
import './modalDelete.scss';

const DeleteEventPopup = ({ id, checkDelete }) => {
  const handleClick = () => {
    deleteEvent(id)
      .then(() => {
        checkDelete();
      });
  };
  return (
    <div id="modal2" className="popup popup-delete z-depth-1">
      <div
        role="button"
        tabIndex="0"
        className="popup-content"
        onClick={handleClick}
        onKeyPress={handleClick}
        >
        <Icon small>delete</Icon>
        <span>Удалить</span>
      </div>
    </div>
  );
};

DeleteEventPopup.propTypes = {
  id: PropTypes.string,
  checkDelete: PropTypes.func,
};

DeleteEventPopup.defaultProps = {
  id: PropTypes.string,
  checkDelete: PropTypes.func,
};

export default DeleteEventPopup;
