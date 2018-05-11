import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Resources = () => {
    
        return  (
            <div>
                <div className='infoButton'>
                    <Link to="/anxiety">
                        <img src = 'clickables/1.png'/>
                    </Link>
                </div>

                <div className='infoButton'>
                    <Link to="/depression">
                        <img src = 'clickables/2.png'/>
                    </Link>
                </div>

              <div className='infoButton'>
                  <Link to="/prevention">
                      <img src = 'clickables/3.png'/>
                  </Link>
              </div>
            </div> 
        )
}


export default Resources