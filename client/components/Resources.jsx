import React from 'react'
import { connect } from 'react-redux'
import { link } from 'react-router-dom'

const Resources = () => {
    
        return  (
            <div>
                <div className='infoButton'>
                    <a href="/anxiety">
                        <img src = 'clickables/1.png'/>
                    </a>
                </div>

                <div className='infoButton'>
                    <a href="/depression">
                        <img src = 'clickables/2.png'/>
                    </a>
                </div>

              <div className='infoButton'>
                  <a href="/prevention">
                      <img src = 'clickables/3.png'/>
                  </a>
              </div>
            </div> 
        )
}


export default Resources