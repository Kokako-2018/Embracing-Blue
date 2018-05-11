import React from 'react'
import {connect} from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'
import Login from './Login'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBurger: false
    }
    this.toggleBurger = this.toggleBurger.bind(this)
  }
  toggleBurger() {
    this.setState({showBurger: !this.state.showBurger})
  }
    render() {

      const {auth, logout} = this.props 
      const {showBurger} = this.state

      return (
        
          <header className="header">
            <nav>
              <div>
                <h1 className="header-title">
                  {this.props.title}
                </h1>
              </div>  
              <div>
                <ul >
                  <li className="navlink">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/our stories">our stories</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/posts">Forum</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="navlink">
                     <Link to="/login">Login</Link>
                  </li>
                  <li className="navlink">
                     <Link to="/" onClick={() => this.logout()}>Logout</Link>
                  </li>
               </ul>
              </div>  
              {/* <img src={pots} className="Header-pots" alt="header" /> */}
            </nav>
          </header>
          
    
      );
    }
  }
  
  export default Header;
  
  