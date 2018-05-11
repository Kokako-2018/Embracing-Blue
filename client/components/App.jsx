import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Tile from './Tile'
import Header from './Header'
import Resources from './Resources'
import Prevention from './Prevention'
import Anxiety from './Anxiety'
import Depression from './Depression'
import Register from './Register'
import Young from './Young'
import PostForm from './PostForm'
import Posts from './Posts'
import { apiGetAllPosts } from '../actions/posts'

// import Whale from './Whale'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(apiGetAllPosts())
  }

  render() {

    return (
      <Router>
        <div>

          {/* header */}
          <div className='container'>
            <Route exact path="/" render={
              () => {
                return (<Header title="Embracing Blue !!!" />)
              }
            } />
          </div>

          {/* resources button class */}
          <div className="resources">
            <Route path="/" component={Resources} />

          {/* components that render on different pages */}

            {/* <div>
            <div className='infoButton'>
              <Route path="/anxiety" component={Anxiety} />
                <Link to="/anxiety"><img src='clickables/1.png' /></Link>
              <Route path="/depression" component={Depression} />
                <Link to="/depression"><img src='clickables/2.png' /></Link>
              <Route path="/prevention" component={Prevention} />
                <Link to="/prevention"><img src='clickables/3.png' /></Link>
            </div>
          </div> */}

            <Route exact path="/young" component={Young} />

          </div>





          <div>
            <Route path='/posts' component={Posts} />
            <Route path='/posts' component={PostForm} />
          </div>


          {/* this whale is responsive and hardcoded; this is not calling a component */}

          <div>
            <img className="u-full-width" src="backgrounds/1.png" />
          </div>

          {/* this is where we're trying to get the 3 colums to render, still not working but currently slightly aligned  */}

          <div className='container'>
          <div class="row">
              <div class="twelve columns">
                <div class="six columns offset-by-five">

                </div>
              </div>
            </div>
          </div>


          {/* priya's original tiles/links: */}



          {/* <div>
          <Tile src="images/pexels-photo-697243.jpeg" linkText="Young" /> 
          <Tile src="images/pexels-photo-842548.jpeg" linkText="Men" />
          <Tile src="images/pexels-photo-939702.jpeg" linkText="Women" />
        </div>

        <div>
          <Tile src="images/pexels-photo-697243.jpeg" linkText="Old" />
          <Tile src="images/pexels-photo-842548.jpeg" linkText="LGBT" />
          <Tile src="images/pexels-photo-939702.jpeg" linkText="Multicultural" />
        </div> */}


        </div>
      </Router>
    )
  }

}

export default connect()(App)
