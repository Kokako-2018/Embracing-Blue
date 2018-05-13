import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { apiAddPost } from '../../actions/posts'

const initalState = {
  title: '',
  thread_content: '',
  image_url: '',
  is_approved: false
}

class PostForm extends React.Component {
  constructor(props) {
   super(props)
    this.state = {...initalState}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentWillMount() {
  //   this.props.dispatch(apiAddPost())
  // }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value, isSuccess: false})
  }


  handleSubmit(e) {
    e.preventDefault()
    const post = this.state
    delete post.isSuccess
    delete post.isLoading
    this.setState({
      ...initalState,
      isLoading: true
    })
    this.props.dispatch(apiAddPost(post, (success) => {
      this.setState({isSuccess: true, isLoading: false})
    }))
  }


  render () {
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <div className="content">
            <h1 className="is-size-3">Add your story</h1>
          </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label>Title of Post</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                        className="input is-medium"
                        name='title'
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Post title"/>

                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label>Content</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <textarea
                        className="textarea is-medium"
                        name='thread_content'
                        type="text"
                        value={this.state.thread_content} onChange={this.handleChange}
                        placeholder="Post content here...."/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-grouped is-grouped-right">
              {this.state.isSuccess && <p className="has-text-success">Your Post has been submitted!</p>}
              <div className="control">
                <input className={`button is-primary ${this.state.isLoading ? 'is-loading' : ''}`} type="submit" value='Submit'/>
                </div>
                <p className="control">
                    <a className="button is-light">
                        Cancel
                    </a>
                </p>
                </div>
        </form>
      </div>
    )
  }
}


export default connect()(PostForm)
