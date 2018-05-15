import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { apiGetResourcesPage, apiEditResourcesPage } from '../../actions/pages'


const Depression = () => {

        return  (
            <div className="section">
                <figure className="image">
                    <img src="/resourcesImgs/depression.jpg"/>
                </figure>

            <div className="has-text-centered">
                    <h1 className="title is-size-1">
                        <span className="has-text-info">One in seven </span> 
                    </h1>
                    <h3 className="subtitle is-size-3"> Kiwis will experience depression before the age of 24.</h3>
                </div>

                {/* TODO: still to work on alignment of the section below, probably add padding */}
                <div className="section">
                    <p className="is-size-3">What is depression?</p>
                    <p id='paras' className='is-size-4'>
                        While we all feel sad, moody or low from time to time, some people experience these feelings intensely, for long periods of time (weeks, months or even years) and sometimes without any apparent reason. Depression is more than just a low mood – it's a serious condition that affects your physical and mental health.
                    </p>
                </div>
                <Link to='/'><button className='button has-background-info is-centered'>Back</button></Link>
            </div>
        )
}


export default Depression
