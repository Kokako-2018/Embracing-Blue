import React from 'react'
import {connect} from 'react-redux'

import {apiAddComment, apiGetAllComments, apiEditComment, apiDeleteComment} from '../../actions/comments'



class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    
  }

  componentWillReceiveProps({ comments }) {
    console.log(comments)
    this.setState({ comments })
  }

  render () {
    let {comments} = this.props

    return (
        <div>
        <div className="comments">
             
          {comments.map(comment => {
            return <div className='comment'>
               <div>
                  <h2 className='title'>{comment.comment}</h2>
              </div>
            {/* <button className='detetebutton' onClick={() => this.props.dispatch(apiDeleteComment(comment.id))}>Delete Comment</button> */}
              
            </div>

          })}
        </div>
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='comment'
          value={this.state.comment}
          onChange={this.handleChange()}
        />
        <input type='submit' />
        {this.state.errorMessage && this.state.errorMessage}
      </form>
    </div>
    )
  }

}


export default connect()(Comments)
