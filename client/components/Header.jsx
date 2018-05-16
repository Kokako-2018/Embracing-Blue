import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'
import Login from './auth/Login'
import { logoutUser } from '../actions/logout'

import ConfirmLogout from './auth/ConfirmLogout'

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

        {/* {(showConfirmLogout ) && <ConfirmLogout close={this.toggleConfirmLogout} />}
        

          <div className="hero-body">
            {auth.isAuthenticated && <p className="is-pulled-left">Welcome {auth.user.user_name}</p>}
          </div> */}
        
        
        <section className="has-text-link">
          {(showConfirmLogout ) && <ConfirmLogout close={this.toggleConfirmLogout} />}
        

          {/* <div className="hero-body"> */}
          
          {/* </div> */}
            <div className="hero-body has-background-info">
                <div className="container has-text-centered ">
                  <h1 className="title is-1 has-text-light">{this.props.title}</h1>
                  <p className="subtitle is-3">A mental health resource for all Kiwis</p>
                  
                </div>                
             </div>
        </section>
        
         <nav className="navbar has-background-link">

            <div className='leftnav navbar-item'>

              <Link className="navbar-item has-text-light" to="/">Home</Link>
              <Link className="navbar-item has-text-light" to="/ourStories">Our Stories</Link>
              <Link className="navbar-item has-text-light" to="/posts">Forum</Link>

              <div className="navbar-item dropdown is-hoverable">
                <div className="dropdown-trigger">
                  <button className="button has-background-link has-text-light" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Resources</span>
                    <span className="icon is-small">
                      <i className="jam jam-chevron-down" aria-hidden="true"></i>
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
                  <button className="button has-background-link has-text-light" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Identities</span>
                    <span className="icon is-medium">
                      {/* <i className="fas fa-angle-down" aria-hidden="true"></i> */}
                      <i className="jam jam-chevron-down" aria-hidden="true"></i>

                    </span>
                  </button>
                </div>

                <div className="dropdown-menu  has-background-info" id="dropdown-menu3" role="menu">
                  <div className="dropdown-content">
                    <Link to="/young" className="dropdown-item">Young</Link>
                    <Link to="/women" className="dropdown-item">Women</Link>
                    <Link to="/men" className="dropdown-item">Men</Link>
                    <Link to="/old" className="dropdown-item">Elders</Link>
                    <Link to="/LGBT" className="dropdown-item">LGBT</Link>
                    <Link to="Māori/" className="dropdown-item">Māori</Link>
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
                  <Link key={1} className="navbar-item has-text-light" to="/register">Register</Link>,
                  <Link key={2} className="navbar-item has-text-light" to="/login">Login</Link>

              ]
              :
              <Link className="navbar-item has-text-light" to="/" onClick={this.toggleConfirmLogout}>Logout</Link>

              }

            </div>

          </nav>

          <div className="is-pulled-right is-size-5 has-text-weight-bold">
            {auth.isAuthenticated && <span className="">Welcome {auth.user.user_name}</span>} 
          </div>

      </header>

    )
  }
}


const mapStateToProps = ({ auth }) => ({ auth })


export default connect(mapStateToProps)(Header)
