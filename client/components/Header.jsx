import React from 'react'
import {connect} from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'
import Login from './Login'
import {logoutUser} from '../actions/logout'

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

      const {auth} = this.props 
      const {showBurger} = this.state

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
                    <Link to="/posts">Forum</Link>
                  </li>
                  {/* //auth.... is checking whether someone is logged in or not. If they've registered it will execute the code after the : otherwise will execute code after ?  */}
                  {!auth.isAuthenticated 
                    ? [
                        <li key={1} className="navlink">
                          <Link to="/register">Register</Link>
                        </li>,
                        <li key={2} className="navlink">
                          <Link to="/login">Login</Link>
                        </li>
                      ]
                    : <li className="navlink">
                        <Link to="/" onClick={() => this.props.dispatch(logoutUser())}>Logout</Link>
                      </li>
                  }
                  
                 
               </ul>
              </div>  
              {/* <img src={pots} className="Header-pots" alt="header" /> */}
            </nav>
          </header>
          
    
      );
    }
  }

  const mapStateToProps = ({auth}) => ({auth})

  
  export default connect(mapStateToProps)(Header)
  

  