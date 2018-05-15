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
    this.refreshComments()
  }

  refreshComments() {
    apiGetAllComments(this.props.post_id, (err, res) => {
      if (err) console.log({ err })
      this.setState({ comments: res.body })
    })
  }

  toggleAddComment(e) {
    this.setState({ showCommentForm: !this.state.showCommentForm })
  }

  deleteComment(comment) {
    this.props.dispatch(apiDeleteComment(this.props.post_id, comment.id, (err) => {
      if (!err) this.refreshComments()
    }))
  }


  render() {
    let { comments } = this.state
    const { user } = this.props.auth
    const { showCommentForm } = this.state

    return (
      <div>
        <div className="comments">


          {comments.map(comment => {
            return <div className='comment'>
              <div>
                <p className='comment is-size-6'>{comment.comment}</p>
                {(user && (user.is_admin == true || user.id == comment.user_id)) && <button className='comment-button is-small button is-danger' onClick={() => this.deleteComment(comment)}>Delete</button>}
              </div>

            </div>

          })}
          <CommentForm
            refreshComments={this.refreshComments.bind(this)}
            close={this.toggleAddComment}
            post_id={this.props.post_id}
          />


        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Comments)
