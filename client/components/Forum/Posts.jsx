import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import EditPost from './EditPost'




import { apiEditPost, apiDeletePost } from '../../actions/posts'
import { apiGetAllComments } from '../../actions/comments'


class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editPostTarget: null
    }
  }

  componentWillReceiveProps({ posts }) {
    this.setState({ posts })
  }

  toggleEdit(post) {
    if (this.state.editPostTarget == post) post = null
    this.setState({ editPostTarget: post })
  }

  

  render() {

    let {posts} = this.props

    return (
      
      <div className='box'>
        <div className='content'>
          <h1 className='story is-size-2'>Stories</h1>
        </div>

        <div className='posts'>
        
          {posts.map(post => {
            const showEdit = this.state.editPostTarget == post
<<<<<<< HEAD
            return <div className='post box'>
              {showEdit 
=======
            return <div id='post'>
              {showEdit
>>>>>>> b552daf44ef99176a87e69f3a263cc3f1ca9c252
                ? <EditPost post={post} submit={() => this.toggleEdit(null)} />
                : <div>
                  <h2 id='post-title' className='is-size-3'>{post.title}</h2>
                  <p id='post-para' className='is-size-5'>{post.thread_content}</p>
                </div>
              }
              
              <button id='post-button' className='button is-primary is-centered' onClick={() => this.toggleEdit(post)}>{showEdit ? 'Cancel Edit' : 'Edit'}</button>
              <button id='post-button' className='button is-danger is-centered' onClick={() => this.props.dispatch(apiDeletePost(post.id))}>Delete</button>
              <button id='post-button' className='button is-primary is-centered' onClick={() => this.props.dispatch(apiGetAllComments(comment.id))}>View Comments</button>
            </div>

          })}
        </div>

      </div>

    )
  }
}

const mapStateToProps = ({ posts, comments }) => {
  return {
    posts,
    comments
  }
}

export default connect(mapStateToProps)(Posts)
