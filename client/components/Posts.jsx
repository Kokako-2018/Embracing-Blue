import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Posts = (props) => {
  const {posts} = props

  return (

    <div>
      <div className='homebutton'>
        <Link className='button' to='/'>Home</Link>
      </div>

      <h1>Stories</h1>

      <div className='posts'>

        {posts.map(post => {

          return  <div className='post'>
            <h2 className='title'>{post.title}</h2>
            <img className='post-image' src={post.image_url}/>
            <p className='thread-content'>{post.thread_content}</p>
            <button className='detetebutton'>Delete</button>
          </div>
        
        })}
      </div>

    </div>

  )
}

const mapStateToProps = ({posts}) => {
  return {
    posts
  }
}

export default connect(mapStateToProps)(Posts)