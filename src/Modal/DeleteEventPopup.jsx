import React from 'react'
import { Icon } from 'react-materialize'
import { deleteEvent } from '../Gateway'

const DeleteEventPopup = ({ id, checkDelete }) => {

  const handleClick = () => {
    deleteEvent(id)
    .then(() => {
      checkDelete()
    })
  }
  return (
    <div id="modal2" className="popup popup-delete z-depth-1">
      <div className="popup-content" onClick={handleClick}>
        <Icon small>delete</Icon><span>Удалить</span>
      </div>
    </div>
  )
}

export default DeleteEventPopup