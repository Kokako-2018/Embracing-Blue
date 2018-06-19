import React from 'react'
import { connect } from 'react-redux'

import { apiAddComment } from '../../actions/comments'



class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMessage: null,
      comment: {
        comment: ''
      },
      is_approved: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { comment } = this.state
    comment[e.target.name] = e.target.value
    this.setState({ comment })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { comment } = this.state
    this.setState({ errorMessage: null, comment: { comment: '' } })
    this.props.dispatch(apiAddComment(this.props.post_id, comment, this.props.refreshComments))
    this.props.close()
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className='thingput input is-normal'
          required
          type='text'
          name='comment'
          value={this.state.comment.comment}
          onChange={this.handleChange}
        />
        <input 
          className='addcom button has-background-info is-centered has-text-light' 
          type='submit' 
          value='Add Comment' /> 
        {this.state.errorMessage && this.state.errorMessage}
      </form>
    )
  }

}


export default connect()(CommentForm)
