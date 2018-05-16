
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class Invite extends React.Component {
    render() {
        return (

            <div className="has-text-centered">
                <Link className="title is-size-1 has-text-info" to="/posts">Join our Forum</Link>
                <div className="has-text-centered">
                    <h3 className="subtitle is-size-3">to share stories, ask questions, and get support.</h3>
                </div>
            </div>
        )
    }
}
