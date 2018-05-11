import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Tile from './Tile'
import Header from './Header'
import Prevention from './Prevention'
import Anxiety from './Anxiety'
import Depression from './Depression'

import Young from './Young'

// import Whale from './Whale'

const App = () => {
  
  return (
    <Router>
      <div>

        {/* header */}
        <div className='u-full-width'>
          <Route exact path="/" render={
            () => {
              return (<Header title="Embracing Blue !!!" />)
            }
          } />
        </div>

          {/* Anxiety */}
        <div className="container">  
          <div className="row">
            <nav>
                <ul>
                  {/* <li>
                    <Route path = "/"   component={Anxiety} />
                  </li>
                  <li>
                    <Route path = "/"   component={Depression} />
                  </li>
                  <li>
                    <Route path = "/"   component={Prevention} />
                  </li> */}
                  {/* the following Route is to for us to know that we can have one component like circle-component
                  and render all the three circle's from there. and use the other three(Anxtiety,dep,suicide compoents as a resources) */}
                  <li>
                  <Route path = "/" >
                      <Anxiety className="button"img='clickables/1.png'/>
                    </Route>
                  </li>
                  <li>
                    <Route path = "/" >
                      <Anxiety img='clickables/2.png'/>
                    </Route>
                  </li>
                  <li>
                    <Route path = "/" >
                      <Anxiety img='clickables/3.png'/>
                    </Route>
                  </li>
                </ul>
            </nav>
             
          </div>
        </div>
          

          {/* <div>
                <div className='infoButton'>
                
                {/* <Link to="/anxiety"><img src = 'clickables/1.png'/></Link> */}
                {/* </div> */}
             
        

        {/* this whale is responsive and hardcoded; this is not calling a component */}
  
        {/* <div>
          <img className="u-full-width" src="backgrounds/1.png"/>
        </div> */}

        
  
        

        



         <div>
         <Link to="/young"><Tile src="https://images.pexels.com/photos/1021145/pexels-photo-1021145.jpeg?auto=compress&cs=tinysrgb&h=350" linkText="Young" /></Link>
          <Link to="/Women"><Tile src="https://images.pexels.com/photos/206296/pexels-photo-206296.jpeg?auto=compress&cs=tinysrgb&h=350" linkText="Women" /></Link>
          <Link to="/Men"><Tile src="https://images.pexels.com/photos/36463/person-human-guitar-players.jpg?auto=compress&cs=tinysrgb&h=350" linkText="Men" /></Link>
        </div>

        <div>
          <Link to="Old"><Tile src="https://images.pexels.com/photos/34761/old-people-couple-together-connected.jpg?auto=compress&cs=tinysrgb&h=350" linkText="Old" /></Link>
         <Link to="LGBT"> <Tile src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1467022337000/photosp/c74b1166-11fb-4f4b-88c1-aa5996c220bd/stock-photo-summer-concert-music-festival-pride-event-festival-parade-lgbt-activism-c74b1166-11fb-4f4b-88c1-aa5996c220bd.jpg" linkText="LGBT" /></Link>
          <Link to="Multicultural"><Tile src="https://images.pexels.com/photos/863964/pexels-photo-863964.jpeg?auto=compress&cs=tinysrgb&h=350" linkText="Multicultural" /></Link>
        </div> 

      <Route exact path = "/young"  component = {Young} /> 
      </div>
      
    </Router>
    
  )
}

export default App
