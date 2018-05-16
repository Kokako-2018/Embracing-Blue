import React from 'react'
import { connect } from 'react-redux'

import { apiEditPost } from '../../actions/posts'

class EditPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      oldPost: { ...props.post },
      newPost: { ...props.post }
    }
    this.editPostDetails = this.editPostDetails.bind(this)
  }

  editPostDetails(e) {
    let { newPost } = this.state
    newPost[e.target.name] = e.target.value
    this.setState({ newPost })
  }

  submitEdit(e) {
    e.preventDefault()
    this.props.dispatch(apiEditPost(this.state.oldPost.id, this.state.newPost))
    this.props.submit()
  }


  render() {

    let { newPost } = this.state

    return (
      <div className='field'>
        <form onSubmit={this.submitEdit.bind(this)}>
          <h2 className='column is-size-4'>Add your story</h2>

          <div className='form-container'>

            <div className='field'>
              <label className="label is-pulled-left">Title of Post</label>
              <input className="input is-normal is-pulled-left" name='title' type="text" required="true" value={newPost.title} onChange={this.editPostDetails} />
            </div>

            <div className='field'>
              <label className="label is-pulled-left">Content</label>
              <input className="input is-normal is-pulled-left" name='thread_content' type="text" required="true" value={newPost.thread_content} onChange={this.editPostDetails} />
            </div>


            <input className="button has-background-info is-centered has-text-light" type="submit" value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}


export default connect()(EditPost)
