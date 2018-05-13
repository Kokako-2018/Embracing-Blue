import React from 'React'
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

                       <a className="button is-link">
                            <span className="icon is-small">
                            <img className="fa fa-facebok" src="clickables/facebook-round-logo-png-transparent-background-8.png" ></img>
                            </span>
                        </a>  
                    </div>
                </div>
            </footer>
        )    
    }    
}