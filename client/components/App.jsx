import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import Tile from './Tile'

const App = () => (

  <div>
    <Router>
      <div className='app-container'>
        <h1>We are going live</h1>
        <Route exact path="/" component={Greetings} />
      </div>
    </Router>

    <Tile src="images/pexels-photo-697243.jpeg" linkText="Young"/>
    <Tile src="images/pexels-photo-842548.jpeg" linkText="Men"/>
    <Tile src="images/pexels-photo-939702.jpeg" linkText="Friends"/>


  </div>
)

export default App
