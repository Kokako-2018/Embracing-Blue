import React from 'react'
import { Link } from 'react-router-dom'

export default class Lgbt extends React.Component {

  render () {

    return (

      <div className="section">

        <figure className="image">
          <img src ='https://cimg.visitscotland.com/cms-images/about/lgbt-flag?size=md'/>
        </figure>

        <div className="has-text-centered">
                    <h3 className="subtitle is-size-3"> The Ministry of Health found that the</h3>
                    <h1 className="title is-size-1">
                        <span className="has-text-info">community members have a higher lifetime risk</span> 
                    </h1>
                    <h3 className="subtitle is-size-3"> for mental health problems including depression, anxiety, suicide and self-harm, substance misuse and eating disorders.</h3>
        </div>
        <div className="section">
          <p className="is-size-3"><b>LGBTQIA+</b></p>
          <p id='paras' className="is-size-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>

        <Link to='/'><button className='button is-primary is-centered'>Back</button></Link>

      </div>
    )
  }
}
