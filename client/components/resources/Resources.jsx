import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Resources = () => {
    
        return  (
            <div className="columns">
                
                    <Link className="column" to="/anxiety">
                        <img src = 'clickables/1.png'/>
                    </Link>
                
                    <Link className="column" to="/depression">
                        <img src = 'clickables/2.png'/>
                    </Link>
                
                  <Link className="column" to="/prevention">
                      <img src = 'clickables/3.png'/>
                  </Link>
              
            </div> 
        )
}


export default Resources