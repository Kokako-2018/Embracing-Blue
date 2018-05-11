import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
      return (
        
          <header className="u-full-width">
            <nav>
              <div>
                <h1 className="header-title">
                  {this.props.title}
                </h1>
              </div>  
              <div className="container">
                <div className="row">
                  <nav>
                    <ul>
                      <li className="navLink">
                        <Link to="/" >Home</Link>
                      </li>
                      <li className="navLink">
                        <Link to="/our stories">Our Stories</Link>
                      </li>
                      <li className="navLink">
                        <Link to="/forum">Forum</Link>
                      </li>
                      <li className="navLink">
                        <Link to="/Register">Register</Link>
                      </li>
                      <li className="navLink">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="navLink">
                        <Link to="/logout">Logout</Link>
                      </li>
                    </ul>
                   </nav>
                  </div>                    
              </div>  
              {/* <img src={pots} className="Header-pots" alt="header" /> */}
            </nav>
          </header>
          
        
      );
    }
  }
  
  export default Header;
  
  