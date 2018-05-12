import React from 'react'
import {connect} from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'
import Login from './auth/Login'
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

        <header className="header">


            <section className="hero is-primary">

              <div className="hero-body">
              <img src='backgrounds/sunset.gif' id='selector'/>
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

            
            
            <nav className="navbar has-background-grey-lighter justify-center">

                  <Link className="navbar-item" to="/">Home</Link>
                  <Link className="navbar-item" to="/ourStories">Our Stories</Link>
                  <Link className="navbar-item" to="/posts">Forum</Link>


                {/* //auth.... is checking whether someone is logged in or not. If they've registered it will execute the code after the : otherwise will execute code after ?  */}
                {!auth.isAuthenticated
                  ? [
                      <Link key={1} className="navbar-item" to="/register">Register</Link>,
                      <Link key={2} className="navbar-item" to="/login">Login</Link>

                    ]
                    :
                      <Link className="navbar-item" to="/" onClick={() => this.props.dispatch(logoutUser())}>Logout</Link>

                }

                <div className="field has-addons navbar-item">
                  <div className="control">
                    <input className="input" type="text" placeholder="Find a story" />
                  </div>
                  <div className="control">
                    <a className="button is-info tabindex=8">
                      Search
                    </a>
                  </div>
                </div>


              </nav>



          </header>

      )
    }
  }


const mapStateToProps = ({auth}) => ({auth})


export default connect(mapStateToProps)(Header)
