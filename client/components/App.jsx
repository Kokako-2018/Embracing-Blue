import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Tile from './Tile'
import Header from './Header'

import Login from './auth/Login'
import Register from './auth/Register'

import Resources from './resources/Resources'
import Prevention from './resources/Prevention'
import Anxiety from './resources/Anxiety'
import Depression from './resources/Depression'

import Young from './identities/Young'
import Old from './identities/Old'
import Men from './identities/Men'
import Women from './identities/Women'
import Multicultural from './identities/Multicultural'
import Lgbt from './identities/Lgbt'

import PostForm from './forum/PostForm'
import Posts from './forum/Posts'




class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(apiGetAllPosts())
  }

  render() {

    return (
      <Router>
        <div className="app-container">
          <div className="section">

            {/* header */}
            <div>
              <Route path="/" render={
                () => {
                  return (<Header title="Embracing Blue" />)
                }
              } />
            </div>

            {/* resources button class */}
            <div className="resources">
              <div>
                <Route exact path="/" component={Resources} />
              </div>
            </div>

            <Route className="column" exact path="/anxiety" component={Anxiety} />
            <Route className="column" exact path="/depression" component={Depression} />
            <Route className="column" exact path="/prevention" component={Prevention} />

            <Route path='/posts' component={PostForm} />
            <Route path='/posts' component={Posts} />


            <Route exact path="/" render={
              () => {
                return (
                  <div>
                    <div className="columns">
                      <Link className="column" to="/Young"><Tile src="https://images.pexels.com/photos/1021145/pexels-photo-1021145.jpeg?auto=compress&cs=tinysrgb&h=350" linkText="Young" /></Link>
                      <Link className="column" to="/Women"><Tile src="https://images.pexels.com/photos/206296/pexels-photo-206296.jpeg?auto=compress&cs=tinysrgb&h=350" linkText="Women" /></Link>
                      <Link className="column" to="/Men"><Tile src="https://images.pexels.com/photos/36463/person-human-guitar-players.jpg?auto=compress&cs=tinysrgb&h=350" linkText="Men" /></Link>
                    </div>

                    <div className="columns" >
                      <Link className="column" to="Old"><Tile src="https://images.pexels.com/photos/34761/old-people-couple-together-connected.jpg?auto=compress&cs=tinysrgb&h=350" linkText="Old" /></Link>
                      <Link className="column" to="LGBT"> <Tile src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1467022337000/photosp/c74b1166-11fb-4f4b-88c1-aa5996c220bd/stock-photo-summer-concert-music-festival-pride-event-festival-parade-lgbt-activism-c74b1166-11fb-4f4b-88c1-aa5996c220bd.jpg" linkText="LGBT" /></Link>
                      <Link className="column" to="Multicultural"><Tile src="https://images.pexels.com/photos/863964/pexels-photo-863964.jpeg?auto=compress&cs=tinysrgb&h=350" linkText="Multicultural" /></Link>
                    </div>
                  </div>

                )
              }
            } />
            
            <div>
              <Route exact path="/Young"  component={Young} />
              <Route exact path="/Women"  component={Women} />
              <Route exact path="/Men"  component={Men} />
              <Route exact path="/Lgbt"  component={Lgbt} />
              <Route exact path="/Old"  component={Old} />
              <Route exact path="/Multicultural"  component={Multicultural} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </div>

      </Router>

    )

  }

}

export default connect()(App)
