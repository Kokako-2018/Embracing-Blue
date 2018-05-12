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
    console.log(posts)
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
          <h1 className='is-size-3'>Stories</h1>
        </div>

        <div className='posts'>

          {posts.map(post => {
            const showEdit = this.state.editPostTarget == post
            return <div className='post'>
              {showEdit
                ? <EditPost post={post} submit={() => this.toggleEdit(null)} />
                : <div>
                  <h2 className='title'>{post.title}</h2>
                  <img className='post-image' src={post.image_url} />
                  <p className='thread-content'>{post.thread_content}</p>
                </div>
              }

              <button onClick={() => this.toggleEdit(post)}>{showEdit ? 'Cancel Edit' : 'Edit'}</button>
              <button className='detetebutton' onClick={() => this.props.dispatch(apiDeletePost(post.id))}>Delete</button>
              {/* <button className='viewcomments' onClick={() => this.props.dispatch(apiGetAllComments(comment.id))}>View Comments</button> */}
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
