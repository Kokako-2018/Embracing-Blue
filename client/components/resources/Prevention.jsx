import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Prevention = () => {

        return  (
            <div className="section">
                <figure className="image">
                    <img src="/resourcesImgs/prevention..jpg"/>
                </figure>

                {/* TODO: still to work on alignment of the section below, probably add padding */}
                <div className="section">
                    <h1 className="is-size-3">Preventing Kiwi Suicides</h1>
                    <p id='paras' className='is-size-4'>
                    <b>Tragically,</b> the rates of suicide in New Zealand have steadily increased since 2015. For every suicide, there are tragic ripple effects for friends, families, colleagues and the broader community. If someone you know seems to be struggling, reach out and connect with them. Showing that you care could make a huge difference. If you find that you are struggling, it might feel better to reach out for support, talk to someone and make some positive changes, rather than doing it alone.
                    </p>
                </div>
                <Link to='/'><button className='button has-background-info is-centered'>Back</button></Link>
            </div>
        )
}


export default Prevention
