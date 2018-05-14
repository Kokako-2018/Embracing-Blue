import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Resources = () => {

        return  (
            <div>
                
                
                {/* <img className="is-flex-mobile" src="banners/frontpageBanner1.png" />  */}
                   <div className="has-text-centered">
                    <h1 className="title is-size-1"> 
                        <span className="has-text-info">One in six</span> Kiwi adults
                    </h1>
                    <h3 className="subtitle is-size-3">will receive a mental health diagnosis in their lifetime.</h3>    
                </div>   
                
                
                <div className="section columns marginCircles is-flex-mobile">

                    <div className="column is-one-quarter">{/*<--fake column do not delete -->*/}</div>  

                    <div className="columns is-half">  

                        <Link className="is-one-quarter is-paddingless" to="/anxiety">
                            <img className="resources" src='clickables/1.png'/>
                        </Link>

                        <Link className="is-one-quarter is-paddingless" to="/depression">
                            <img className="resources" src='clickables/2.png'/>
                        </Link>

                        <Link className="is-one-quarter is-paddingless" to="/prevention">
                            <img className="resources" src='clickables/3.png' />
                        </Link>
                    </div>    

                    <div className="column is-one-quarter">{/*<--fake column do not delete -->*/}</div>    

                </div>
            </div>
        )
}


export default Resources
