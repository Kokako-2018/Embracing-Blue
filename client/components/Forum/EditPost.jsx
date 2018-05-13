import React from 'react'
import {connect} from 'react-redux'

import {apiEditPost} from '../../actions/posts'

class EditPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldPost: {...props.post},
      newPost: {...props.post}
    }
    this.editPostDetails = this.editPostDetails.bind(this)
  }

  editPostDetails(e) {
    let {newPost} = this.state
    newPost[e.target.name] = e.target.value
    this.setState({newPost})
  }

  submitEdit(e) {
    e.preventDefault()
    this.props.dispatch(apiEditPost(this.state.oldPost.id, this.state.newPost))
    this.props.submit()
  }

  render () {
    let {newPost} = this.state

    return (
      <form onSubmit={this.submitEdit.bind(this)}>
      <h2>Add your story</h2>
      <div className='form-container'>
        <div>
          <label>Title of Post</label>
          <input name='title' type="text" value={newPost.title} onChange={this.editPostDetails}/>
        </div>

        <div>
          <label>Content</label>
          <input name='thread_content' type="text" value={newPost.thread_content} onChange={this.editPostDetails}/>
        </div>
        
      </div>

      <input type="submit" value='Submit'/>
    </form>
    )
  }
}


export default connect()(EditPost)
