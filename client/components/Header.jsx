import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
      return (
        <div>
          <header className="header">
            <nav className="navbar">
              <div className="container">
                <ul className="navBar-list">
                  <li className="navBar-item">
                    <Link className ="navBar-link" to="/">Home</Link>
                  </li>

                  <li className="navBar-item">                 
                    <Link className ="navBar-link" to="/ourStories">Our Stories</Link>
                  </li>

                  <li className="navBar-item">                 
                    <Link className ="navBar-link" to="/posts">Forum</Link>
                  </li>

                  <li className="navBar-item">                
                    <Link className ="navBar-link" to="/posts">Register</Link>
                  </li> 
                </ul>
              </div>  
             </nav>
            </header>
          </div>     
      )
    }
  }
  
  export default Header;
  

          {/* <li className="navBar-item">
                    <a className="navBar-link" href="#home">Home</a>
                  </li>
                <h1 className="header-title">
                  {this.props.title}
                </h1>
          
              <div>
                <ul >
                  <li className="navlink">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/our stories">our stories</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/posts">forum</Link>
                  </li>
                  <li className="navlink">
                    <Link to="/Register">Register</Link>
                  </li>
                </ul> */}
  