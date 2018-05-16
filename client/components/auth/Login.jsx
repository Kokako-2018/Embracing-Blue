import React from 'react'
import { connect } from 'react-redux'
import { loginUser, loginError } from '../../actions/login'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      password: ''
    }

    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  submit(e) {
    e.preventDefault()
    let { user_name, password } = this.state
    this.props.dispatch(loginUser({ user_name, password }))
  }
  render() {
    const { auth } = this.props
    return (
      <form className="form box" onSubmit={this.submit}>
        <h1 id='form-title' className="title is-2 has-text-centered">Login</h1>
        <hr />
        {/* {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>} */}
        <label id='form-input' className="form-input label is-large has-text-centered">Username
          <input required className="input has-text-centered is-large" placeholder="User Name" type="text" name="user_name" onChange={this.updateDetails} />
        </label>
        <label id='form-input' className="form-input label is-large has-text-centered">Password
          <input required className="input has-text-centered is-large" placeholder="Password" type="password" name="password" onChange={this.updateDetails} />
        </label>
        <div className='buttons'>
          <input id='submit-auth' className="button has-background-info is-centered is-centered" value='Login' type="submit" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)
