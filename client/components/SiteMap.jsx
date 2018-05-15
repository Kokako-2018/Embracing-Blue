import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'

export default class SiteMap extends React.Component {

	render() {
		return (
            <div>

                <div className="section">
                    <p id='paras' className="is-size-3"><b>Sitemap</b></p>
                    <p id='paras' className="is-size-4">
                        <ul>
                            <li><a href="/" title="Home"> Home </a></li>
                            <li><a href="/#/ourStories" title="OurStories">Our Stories</a></li>
                            <li><a href="/#/posts" title="Forum">Forum</a></li>
                            <li><a href="/#/register" title="Register">Register</a></li>
                            <li><a href="/#/login" title="Login">Log In</a></li>
                            <li><b>Resources</b>
                            <ul>
                                <li><a href="/#/anxiety" title="Anxiety"> ◦ Anxiety</a>
                                </li>
                                <li><a href="/#/depression" title="Depression"> ◦ Depression</a>
                                </li>
                                <li><a href="/#/prevention" title="Prevention"> ◦ Preventing Suicide</a>
                                </li>
                            </ul></li>
                            <li><b>Identities</b>
                            <ul>
                                <li><a href="/#/LGBT" title="LGBTQ"> ◦ LGBTQ</a></li>
                                <li><a href="/#/Māori" title="Māori"> ◦ Māori</a></li>
                                <li><a href="/#/men" title="Men"> ◦ Men</a></li>
                                <li><a href="/#/women" title="Women"> ◦ Women</a></li>
                                <li><a href="/#/young" title="Youth"> ◦ Youth</a></li>
                                <li><a href="/#/old" title="Elders"> ◦ Elders</a></li>
                            </ul></li>
                        </ul>
                    </p>   
                </div>
            </div>
        )
    }
}