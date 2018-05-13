import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { apiAddPost } from '../../actions/posts'


class PostForm extends React.Component {
  constructor(props) {
   super(props)
    this.state = {
      title: '',
      thread_content: '',
      image_url: '',
      is_approved: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentWillMount() {
  //   this.props.dispatch(apiAddPost())
  // }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }


  handleSubmit(e) {
    e.preventDefault()
    const post = this.state
    this.props.dispatch(apiAddPost(post))
    e.target.reset()
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
                        value={this.state.title} onChange={this.handleChange}
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

            {/* TODO: why do we need a photo ???? */}
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label>Photo</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                        className="input is-medium"
                        name='image_url'
                        type="text"
                        value={this.state.image_url} onChange={this.handleChange}
                        placeholder="Upload image"/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <input className="button is-primary" type="submit" value='Submit'/>
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
