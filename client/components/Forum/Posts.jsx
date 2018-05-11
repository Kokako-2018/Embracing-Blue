import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import EditPost from './EditPost'
import { apiEditPost, apiDeletePost } from '../../actions/posts'

class Posts extends React.Component {
  constructor(props) {
    console.log(props)
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
      <div>
        <div className='homebutton'>
          <Link className='button' to='/'>Home</Link>
        </div>

        <h1>Stories</h1>

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
            </div>

          })}
        </div>

      </div>

    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Posts)