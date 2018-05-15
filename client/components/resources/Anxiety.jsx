import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { apiGetResourcesPage, apiEditResourcesPage } from '../../actions/pages'

class Anxiety extends React.Component {

    render() {
        return (

            <div className="section">
                <figure className="image">
                    <img src="/resourcesImgs/anxiety.jpg"/>
                </figure>

                {/* TODO: still to work on alignment of the section below, probably add padding */}
                <div className="section">
                    <h1 id='titles' className="is-size-3">What is Anxiety?</h1>
                    <p id='paras' className='is-size-4'>
                        Anxiety is more than just feeling stressed or worried. While stress and anxious feelings are a common response to a situation where we feel under pressure, they usually pass once the stressful situation has passed, or ‘stressor’ is removed.
                        Anxiety is when these anxious feelings don't go away – when they're ongoing and happen without any particular reason or cause. It’s a serious condition that makes it hard to cope with daily life. Everyone feels anxious from time to time, but for someone experiencing anxiety, these feelings aren't easily control. Anxiety is the most common mental health condition in Australia. On average, one in four people – one in three women and one in ﬁve men – will experience anxiety at some stage in their life.1 In a 12-month period, over two million Australians experience anxiety.2
                        Anxiety is common, but the sooner people with anxiety get support, the more likely they are to recover.
                    </p>
                </div>
                <Link to='/'><button className='button has-background-info'>Back</button></Link>
            </div>


        )
    }
}

export default Anxiety
