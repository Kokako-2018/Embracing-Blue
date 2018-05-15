import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { apiAddComment, apiGetAllComments, apiEditComment, apiDeleteComment } from '../../actions/comments'
import CommentForm from './CommentForm'



class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      showCommentForm: false
    }
    this.toggleAddComment = this.toggleAddComment.bind(this)
  }

  componentDidMount() {
    console.log('hi')
    this.refreshComments()
  }

  refreshComments() {
    apiGetAllComments(this.props.post_id, (res, err) => {
      console.log('response', res)
      this.setState({ comments: res.body })
    })
  }

  toggleAddComment(e) {
    this.setState({showCommentForm: !this.state.showCommentForm})
  }

  deleteComment(comment) {
    this.props.dispatch(apiDeleteComment(this.props.post_id, comment.id, (err) => {
      if (!err) this.refreshComments()
    }))
  }


  render() {
    let { comments } = this.state
    console.log('hi', comments)
    const { user } = this.props.auth
    const { showCommentForm } = this.state

    return (
      <div>
        <div className="comments">

          {(showCommentForm) && <CommentForm close={this.toggleAddComment} />}
        
          {comments.map(comment => {
            return <div className='comment'>
              <div>
                <p className='comment is-size-6'>{comment.comment}</p>
                {(user && user.is_admin == true) && <button className='comment-button button is-danger' onClick={() => this.deleteComment(comment)}>Delete</button>}
              </div>

            </div>

          })}
         <button className="add-comment" onClick={this.toggleAddComment}>Add Comment</button>

        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ auth }) => {
  console.log({ auth })
  return {
    auth
  }
}

export default connect(mapStateToProps)(Comments)
