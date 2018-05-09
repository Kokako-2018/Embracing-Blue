import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
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
                    <Link to="/forum">forum</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/Register">Register</Link>
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
  
  