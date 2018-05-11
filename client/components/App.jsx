import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Tile from './Tile'
import Header from './Header'
import Prevention from './Prevention'
import Anxiety from './Anxiety'
import Depression from './Depression'


// import Register from './Register'

import Young from './identities/Young'
import Old from './identities/Old'
import Men from './identities/Men'
import Women from './identities/Women'
import Multicultural from './identities/Multicultural'
import Lgbt from './identities/Lgbt'

// import PostForm from './PostForm'
// import Posts from './Posts'
// import { apiGetAllPosts } from '../actions/posts'
import Register from './Register'
import Login from './Login'


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

          {/* Anxiety */}
          <div className="resources">

            <Route path="/" component={Depression} />
            <Route path="/" component={Prevention} />
            <Route exact path="/young" component={Young} />
            <Route exact path="/old" component={Old} />
            <Route exact path="/men" component={Men} />
            <Route exact path="/women" component={Women} />
            <Route exact path="/lgbt" component={Lgbt} />
            <Route exact path="/multicultural" component={Multicultural} />
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register} />

          </div>
          <div>
          <Link to="/young">Young</Link> <br/>
          <Link to="/men">Men</Link> <br/>
          <Link to="/women">Women</Link> <br/>
          <Link to="/lgbt">LGBT</Link> <br/>
          <Link to="/old">Old</Link> <br/>
          <Link to="/multicultural">Multicultural</Link>
          
          </div>
          
        


          <div>
            <div className='infoButton'>
              <Route path="/anxiety" component={Anxiety} />
              <Link to="/anxiety"><img src='clickables/1.png' /></Link>
            </div>
          </div>

          {/* <div>
            <Route path='/posts' component={Posts} />
            <Route path='/posts' component={PostForm} />
          </div> */}
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
            <div className="row">
              <div className="twelve columns">
                <div className="six columns offset-by-five">

                </div>
              </div>
            </div>
          </div>


          {/* priya's original tiles/links: */}



          <div>
          <Tile src="images/pexels-photo-697243.jpeg" linkText="Young" /> 
          <Tile src="images/pexels-photo-842548.jpeg" linkText="Men" />
          <Tile src="images/pexels-photo-939702.jpeg" linkText="Women" />
        </div>
        <div>
          <Tile src="images/pexels-photo-697243.jpeg" linkText="Old" />
          <Tile src="images/pexels-photo-842548.jpeg" linkText="LGBT" />
          <Tile src="images/pexels-photo-939702.jpeg" linkText="Multicultural" />
        </div>

        
        </div>
      </Router>
    )
  }

}

export default connect()(App)
