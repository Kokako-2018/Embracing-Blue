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
    apiGetAllComments(this.props.post_id, (err, res) => {
      this.setState({ comments: res.body })
    })
  }

  // componentWillReceiveProps({ comments }) {
  //   console.log(comments)
  //   this.setState({ comments })
  // }

  render() {
    let { comments } = this.state

    return (
      <div>
        <div className="comments">

          {comments.map(comment => {
            return <div className='comment'>
              <div>
                <p className='comment is-size-6'>{comment.comment}</p>
              </div>

            </div>

          })}
        </div>
      </div>
    )
  }

}


export default connect()(Comments)
