import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Tile from './Tile'
import Header from './Header'
import Resources from './Resources'
import Prevention from './Prevention'
import Anxiety from './Anxiety'
import Depression from './Depression'


 import Register from './Register'

import Young from './identities/Young'
import Old from './identities/Old'
import Men from './identities/Men'
import Women from './identities/Women'
import Multicultural from './identities/Multicultural'
import Lgbt from './identities/Lgbt'

import PostForm from './Forum/PostForm'
 import Posts from './Forum/Posts'
 import { apiGetAllPosts } from '../actions/posts'

import Login from './Login'

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
                      <Link className="column" to="/Young"><Tile src="identity/youth2.jpeg" linkText="Young" /></Link>
                      <Link className="column" to="/Women"><Tile src="identity/woman1.jpeg" linkText="Women" /></Link>
                      <Link className="column" to="/Men"><Tile src="identity/men1.jpeg" linkText="Men" /></Link>
                    </div>

                    <div className="columns" >
                      <Link className="column" to="Old"><Tile src="identity/grandma2.jpeg" linkText="Old" /></Link>
                      <Link className="column" to="LGBT"> <Tile src="identity/lgbt2.jpeg" linkText="LGBT" /></Link>
                      <Link className="column" to="Multicultural"><Tile src="identity/multicultural1.jpeg" linkText="Multicultural" /></Link>
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
