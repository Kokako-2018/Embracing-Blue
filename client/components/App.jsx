import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Greetings from './Greetings'
import Tile from './Tile'
import Header from './Header'
// import Whale from './Whale'

const App = () => (

  <div>
        <Router>
          <div className='container'>
            <Route exact path="/" render={
              () => {
                return (<Header title="Embracing Blue !!!" />)
              }
            } />
          </div>
        </Router>

    {/* this whale is responsive and hardcoded; this is not calling a component */}

        <Router>
          <div>
            <div>
                <img className="u-full-width" src="backgrounds/1.png"/>
            </div>
          </div>  
        </Router>


      {/* this is where we're trying to get the 3 colums to render, still not working but currently slightly aligned  */}
      <div className='container'>
      <div class="row">
        <div class="twelve columns">
          <div class="six columns offset-by-five">
              <h1>3</h1>
              <h1>3</h1>
              <h1>3</h1>
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
)

export default App
