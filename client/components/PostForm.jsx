import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { addPostAction, apiEditPost } from '../actions/posts'


class PostForm extends React.Component {
  constructor(props) {
   super(props)
    this.state = {
      user_id: '',
      title: '',
      thread_content: '',
      image_url: '',
      is_approved: false
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(apiAddPost())
  }

  updateDetails(e) {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  
  handleSubmit(e) {
    e.preventDefault()
    const post = this.state
    this.props.dispatch(addPostAction(post))
  }


  render () {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add your story</h2>
        <div className='form-container'>
          <div>
            <label>Title of Post</label>
            <input name='title' type="text" value={this.state.title} onChange={this.updateDetails}/>
          </div>

          <div>
            <label>Content</label>
            <input name='thread_content' type="text" value={this.state.thread_content} onChange={this.updateDetails}/>
          </div>

          <div>
            <label>Photo:</label>
            <input name='image_url' type="text" value={this.state.image_url} onChange={this.updateDetails}/>
          </div>
          
        </div>

        <input type="submit" value='Submit'/>
      </form>
    )
  }
}


export default connect()(PostForm)