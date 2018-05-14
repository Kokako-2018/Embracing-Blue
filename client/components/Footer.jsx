import React from 'react'
import {connect} from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Embracing Blue</strong> was built by Annette, Mark, Theta, Hameet, and Sam. <br/>  
                        </p>

                       {/* <a className="button is-link"> */}
                            <a href="https://facebook.com" className="icon is-large">
                                <i className="jam fas fa-3x jam-facebook-square"  />
                            </a>
                            <a href="https://twitter.com" className="icon is-large">
                                <i className="jam fas fa-3x jam-twitter-square"  />
                            </a>
                            <a href="https://github.com" className="icon is-large">
                                <i className="jam fas fa-3x jam-github-square"  />
                            </a>
                        {/* </a>   */}
                    </div>
                </div>
            </footer>
        )    
    }    
}