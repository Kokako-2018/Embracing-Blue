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
    const {auth} = this.props
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
                        required="true"
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
                        required="true"
                        value={this.state.thread_content} onChange={this.handleChange}
                        placeholder="Post content here...."/>
                  </p>
                </div>
              </div>
            </div>

<<<<<<< HEAD
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
            
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <input className="button is-primary" type="submit" value='Submit'/>
              </div>
              <p className="control">
                <a className="button is-light">
                    Cancel
                </a>
              </p>
            </div>
=======
            <div className="field is-grouped is-grouped-right">
              {this.state.isSuccess && <p className="has-text-success">Your Post has been submitted!</p>}
              <div className="control">
              {auth.isAuthenticated
                ? <input className={`button is-primary ${this.state.isLoading ? 'is-loading' : ''}`} type="submit" value='Submit'/>
                : <Link to="/login" className="button is-light has-text-info">Please Login</Link>
              }
                </div>
                <p className="control">
                    <a className="button is-light">
                        Cancel
                    </a>
                </p>
                </div>
>>>>>>> b552daf44ef99176a87e69f3a263cc3f1ca9c252
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => ({auth})

export default connect(mapStateToProps)(PostForm)
