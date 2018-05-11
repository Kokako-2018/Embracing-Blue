import React from 'react'
import { connect } from 'react-redux'
import { link } from 'react-router-dom'

const Depression = () => {
    
        return  (
            <div>
                <img className="u-full-width" src="/resourcesImgs/depression.jpg"/>
                <div className='header'>
                    <h1>What is depression? </h1>
                    <p>
                    While we all feel sad, moody or low from time to time, some people experience these feelings intensely, for long periods of time (weeks, months or even years) and sometimes without any apparent reason. Depression is more than just a low mood – it's a serious condition that affects your physical and mental health.
                    </p>
                </div>
            </div> 
        )
}


export default Depression