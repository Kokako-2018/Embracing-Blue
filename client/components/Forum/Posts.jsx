import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import EditPost from './EditPost'

import Comments from './Comments'


import { apiEditPost, apiDeletePost } from '../../actions/posts'
import { apiGetAllComments } from '../../actions/comments'


class Posts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editPostTarget: null,
      showCommentsForPostId: null
    }
  }

  toggleEdit(post) {
    if (this.state.editPostTarget == post) post = null
    this.setState({ editPostTarget: post })
  }

  showComments(postId) {
    if (this.state.showCommentsForPostId == postId) postId = null
    this.setState({ showCommentsForPostId: postId })
  }

  render() {

    let { posts } = this.props

    return (

      <div className='box'>
        <div className='content'>
          <h1 className='story is-size-2'>Stories</h1>
        </div>

        <div className='posts'>

          {posts.map(post => {
            const showEdit = this.state.editPostTarget == post
            const showComments = this.state.showCommentsForPostId

            return <div id='post box'>

              {showEdit
                ? <EditPost post={post} submit={() => this.toggleEdit(null)} />
                : <div>
                  <h2 className='post-title is-size-3'>{post.title}</h2>
                  <p className='post-para is-size-5'>{post.thread_content}</p>
                </div>
              }

              {showComments
                ? <Comments post_id={post.id} submit={() => this.showComments(null)} />
                : ''}

              <button className='post-button button has-background-info is-centered' onClick={() => this.toggleEdit(post)}>{showEdit ? 'Cancel Edit' : 'Edit'}</button>

              <button className='post-button button is-danger is-centered' onClick={() => this.props.dispatch(apiDeletePost(post.id))}>Delete</button>

              <button id='comment-button' className='post-button button has-background-info is-centered' onClick={() => this.showComments(post.id)}>{showComments ? 'Hide Comments' : 'View Comments'}</button>

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
