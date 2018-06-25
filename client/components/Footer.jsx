import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Link } from 'react-router-dom'

export default class Footer extends React.Component {

	render() {
		return (
			<footer className="box has-background-white-ter">
				<div className="container .u-margin-top">
					<div className="content has-text-centered">
						<p>
							If you or someone you know is in immediate need of mental health support, call Lifeline NZ at <strong>0800 543 354</strong> 
						</p>
						<br/>
						<p> <strong>Embracing Blue</strong> was built by Priya, Annette, Mark, Theta, Hameet, and Sam.
						</p>

						{/* <a className="button is-link"> */}
						<span className="column is-6 is-offset-3">
							<a href="https://facebook.com" className="icon is-large">
								<i className="jam fas fa-lg jam-facebook-square" />
							</a>
							<a href="https://twitter.com" className="icon is-large">
								<i className="jam fas fa-lg jam-twitter-square" />
							</a>
							<a href="https://github.com/Kokako-2018/Embracing-Blue" className="icon is-large">
								<i className="jam fas fa-lg jam-github-square" />
							</a>
						</span>

						{/* </a>   */}
						<p>
							<a href="/#/sitemap">Site Map </a>
						</p>
						
					</div>
				</div>
			</footer>
		)
	}
}