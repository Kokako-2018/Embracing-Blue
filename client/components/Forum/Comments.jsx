import React from 'react'
import { connect } from 'react-redux'

import { apiAddComment, apiGetAllComments, apiEditComment, apiDeleteComment } from '../../actions/comments'



class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }


  }

  componentDidMount() {
    this.refreshComments()
  }

  refreshComments() {
    apiGetAllComments(this.props.post_id, (err, res) => {
      this.setState({ comments: res.body })
    })
  }

  deleteComment(comment) {
    this.props.dispatch(apiDeleteComment(this.props.post_id, comment.id, (err) => {
      if (!err) this.refreshComments()
    }))
  }

  // componentWillReceiveProps({ comments }) {
  //   console.log(comments)
  //   this.setState({ comments })
  // }

  render() {
    let { comments } = this.state
    const {user} = this.props.auth
    return (
      <div>
        <div className="comments">

          {comments.map(comment => {
            return <div className='comment'>
              <div>
                <p className='comment is-size-6'>{comment.comment}</p>
                {(user && user.is_admin == true) && <button className='comment-button button is-danger' onClick={() => this.deleteComment(comment)}>Delete</button>}
              </div>

            </div>

          })}
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({ auth }) => {
  console.log({auth})
  return {
    auth
  }
}

export default connect(mapStateToProps)(Comments)
