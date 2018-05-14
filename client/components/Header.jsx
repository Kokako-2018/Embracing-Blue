import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'
import Login from './auth/Login'
import { logoutUser } from '../actions/logout'

import ConfirmLogout from './ConfirmLogout'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showBurger: false,
      showConfirmLogout: false
    }
    this.toggleBurger = this.toggleBurger.bind(this)
    this.toggleConfirmLogout = this.toggleConfirmLogout.bind(this)
  }
  toggleConfirmLogout() {
    this.setState({showConfirmLogout: !this.state.showConfirmLogout})
  }
  toggleBurger() {
    this.setState({ showBurger: !this.state.showBurger })
  }

  render() {

    const { auth } = this.props
    const { showBurger, showConfirmLogout } = this.state

    return (

      <header className="header">

        {(showConfirmLogout ) && <ConfirmLogout close={this.toggleConfirmLogout} />}
        <section className="hero is-primary">

          <div className="hero-body">
            {auth.isAuthenticated && <p className="is-pulled-left">Welcome {auth.user.user_name}</p>}
          </div>
        </section>

        <section className="hero is-light is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title is-1">{this.props.title}</h1>
              <p className="subtitle is-3">A mental health resource for all Kiwis</p>
            </div>
          </div>
        </section>

        <nav className="navbar has-background-grey-lighter">

          <div className='leftnav navbar-item'>

            <Link className="navbar-item" to="/">Home</Link>
            <Link className="navbar-item" to="/ourStories">Our Stories</Link>
            <Link className="navbar-item" to="/posts">Forum</Link>

            <div className="navbar-item dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Resources</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                  <Link to="/anxiety" className="dropdown-item">Anxiety</Link>
                  <Link to="/depression" className="dropdown-item">Depression</Link>
                  <Link to="/prevention" className="dropdown-item">Prevention</Link>
                </div>
              </div>
            </div>

            <div className="navbar-item dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Identities</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                  <Link to="/young" className="dropdown-item">Young</Link>
                  <Link to="/women" className="dropdown-item">Women</Link>
                  <Link to="/men" className="dropdown-item">Men</Link>
                  <Link to="/old" className="dropdown-item">Old</Link>
                  <Link to="/LGBT" className="dropdown-item">LGBT</Link>
                  <Link to="Multicultural/" className="dropdown-item">Multicultural</Link>
                </div>
              </div>
            </div>

          </div>

          <div className='navbar-item navbar-end'>

            <div className="searchbar field has-addons navbar-item">
              <div className="control">
                <input className="input" type="text" placeholder="Find a story" />
              </div>
              <div className="control">
                <a className="button is-info tabindex=8">
                  Search
              </a>
              </div>
            </div>

            {/* //auth.... is checking whether someone is logged in or not. If they've registered it will execute the code after the : otherwise will execute code after ?  */}
            {!auth.isAuthenticated
              ? [
                <Link key={1} className="navbar-item" to="/register">Register</Link>,
                <Link key={2} className="navbar-item" to="/login">Login</Link>

            ]
            :
            <Link className="navbar-item" to="/" onClick={this.toggleConfirmLogout}>Logout</Link>

            }

          </div>

        </nav>


      </header>

    )
  }
}


const mapStateToProps = ({ auth }) => ({ auth })


export default connect(mapStateToProps)(Header)
