import React from 'react'

import {connect} from 'react-redux'

import {logoutUser} from '../actions/logout'

const ConfirmLogout = ({logout, close}) => {

  return (
    <div className="modal is-active">
    <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-head">
          <div className="modal-card-title has-text-centered">Are you sure?</div>
          <button onClick={close} className="delete" aria-label="close"></button>
        </div>
        <div className="modal-card-body">
          <div className="columns">
            <button onClick={close} className="button is-large column is-6">Cancel</button>
            <button onClick={() => logout()} className="button is-large column is-6 is-warning">Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logout: () => {
      dispatch(logoutUser())
      props.close()
    }
  }
}

export default connect(null, mapDispatchToProps)(ConfirmLogout)