import React from 'react'

import {connect} from 'react-redux'

import {logoutUser} from '../../actions/logout'

class ConfirmLogout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedOut: false
    }
  }
  logout() {
    this.props.dispatch(logoutUser())
    this.setState({loggedOut: true})
  }
  render() {
    const {close} = this.props
    const {loggedOut} = this.state
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <div className="modal-card-head">
            <div className="modal-card-title has-text-centered">Are you sure?</div>
            <button onClick={close} className="delete" aria-label="close"></button>
          </div>
          <div className="modal-card-body">
            {loggedOut
              ? <div className="has-text-centered">
                <p className="subtitle is-2 is-Link">You are Logged Out</p>
                <button onClick={close} className="button is-Link is-fullwidth is-large">Close</button>
              </div>
              : <div className="columns">
                <button onClick={close} className="button is-large column is-6">Cancel</button>
                <button onClick={this.logout.bind(this)} className="button is-large column is-6 is-warning">Logout</button>
              </div>  
            }
          </div>
        </div>
      </div>
    )
  }
}


export default connect()(ConfirmLogout)