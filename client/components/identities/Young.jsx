import React from 'react'
import { Link } from 'react-router-dom'

export default class Young extends React.Component {
    render () {
        return (
            <div className="">
                <figure className="image">
                    <img src ="images/youngpeople.jpg"/>
                </figure>

                <div className="has-text-centered">
                    <h3 className="subtitle is-size-3">New Zealand youth have the</h3>
                    <h1 className="title is-size-1">
                        <span className="has-text-info">highest suicide rate</span> 
                    </h1>
                    <h3 className="subtitle is-size-3"> in the developed world</h3>
                </div>
                
                

                {/* <div className="section">
                    {/* <p id='page-title' className="is-size-3"><b>Young People</b></p> */}
                    {/* <p id='paras' className="is-size-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                {/* </div> */} */}

                <div className="has-text-centered">
                    <h3 className="subtitle is-size-3">In the last five years, <br/> the number of youth (age 15-24) <br/> struggling with mental health distress has</h3>
                    <h1 className="title is-size-1">
                        <span className="has-text-info">more than doubled.</span> 
                    </h1>
                </div>
        
                <Link to='/'><button className='button has-background-info is-centered'>Back</button></Link>


            </div>
        )
    }
}
