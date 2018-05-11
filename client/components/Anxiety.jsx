import React from 'react'
import { connect } from 'react-redux'
import { link } from 'react-router-dom'

// const Anxiety = () => {
    
//         return  (
//             <div>
//                 {/* <div className='infoButton'> */}
//                 <div className="four columns">
//                     <a href='/'>
//                         <img className='clickables'src= 'clickables/1.png'/>
//                     </a>
//                 </div>
//             </div> 
//         )
// }

class Anxiety extends React.Component {

    render() {
        return (
            <div>
                <div className="four columns">
                    <a href='/'>
                        <img className='twelve columns' src={this.props.img}/>
                    </a>
                </div>
            </div> 
        )
    }
}

export default Anxiety