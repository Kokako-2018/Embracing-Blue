import React from 'react'
import {connect} from 'react-redux'

import {apiAddComment} from '../../actions/comments'



class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: null,
      comment: {
        id: null,
        comment: ''
      },
      is_approved: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault() 
    const {comment} = this.state
    this.setState({errorMessage: null})
    this.props.dispatch(apiAddComment(comment))

  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='comment'
          onChange={this.handleChange}
        />
        <input type='submit' value='Add Comment'/>
        {this.state.errorMessage && this.state.errorMessage}
      </form>
    )
  }

}


export default connect()(CommentForm)
