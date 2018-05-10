import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Tile from './Tile'
import Header from './Header';

const App = () => (

  <div>
    <Router>
      <div className='app-container'>
        <Route exact path="/" render={
          () => {
            return (<Header title="Embracing Blue !!!" />)
          }
        } />
      </div>
    </Router>
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
)

export default App
