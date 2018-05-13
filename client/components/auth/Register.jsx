import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../../actions/register'
import {loginError} from '../../actions/login'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      contact_number: '',
      email_address: '',
      password: '',
      confirm_password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validatePassword = this.validatePassword.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  //if the email addresss is not valid we need to STOP IT.
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {user_name, password, confirm_password, email_address, contact_number} = this.state
    function confirmation (){
      if (confirm_password != password)
        return false
      else
        return true
    }
    console.log('Does password match?', confirmation())
    const isEmail = this.validateEmail(email_address)
    const passwordsNotSame = (confirm_password != password)
    const isPass = this.validatePassword(password)

    console.log('isEmail valid :' + isEmail)
    console.log('passwords not same:' + passwordsNotSame)
    console.log('Is the password valid?' + isPass)

    if (!isEmail || passwordsNotSame) return this.props.dispatch(loginError("Incorrect email/Passwords don't match"))
    //if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    else if (!isPass) return this.props.dispatch(loginError('Password strength must be 8 or above and must include atleast one number '))
    else return this.props.dispatch(registerUserRequest(this.state))
    }

  //this just checks if the email is valid or not.
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = re.test(String(email).toLowerCase());
    // console.log('No joke', isValid)
    return isValid
  }

  validatePassword(pass) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var isPasswordValid = re.test(String(pass));
    return isPasswordValid
  }



  render() {
    const {auth} = this.props
    return (
      <form onSubmit={this.submit}>
        <h1>Register</h1>
        <hr />
        <b>{auth.errorMessage && <span>{auth.errorMessage}</span>}</b>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label>Username</label >
          </div>
           <input   className="input is-medium"required placeholder="User Name" type="text" name="user_name" onChange={this.updateDetails}/>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label>Contact Number</label>
          </div>
          <input className="input is-medium"required placeholder="Contact Number" type="text" name="contact_number" onChange={this.updateDetails}/>
        </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label>Email Address</label>
            </div>
            <div className="field-body">
                <div className="field">
                  <input className="input is-medium"required placeholder="Email Address" type="text" name="email_address" onChange={this.updateDetails}/>
                </div>
            </div>
          </div>

        <div className="field is-horizontal">
          <div className="field is-horizontal">
            <label>Password</label>
          </div>
            <input className="input is-medium"required placeholder="Password" type="password" name="password" onChange={this.updateDetails}/>
        </div>
        <div className="field is-horizontal">
          <div className="field is-horizontal">
            <label>Confirm Password</label>
          </div>
            <input className="input is-medium"required placeholder="Confirm Password" type="password" name="confirm_password" onChange={this.updateDetails}/>
         </div>
        <input className="button is-primary" value="Register" type="submit" />

      </form>
    )
  }
}

const mapStateToProps = ({auth}) => ({auth}) //auth is being passed in by props and then it executes it, auth is being destructured from state by this fn

//Structurin Mehn!
// function mapStateToProps (state) {
//   var auth = state.auth
//   return {
//     auth: auth
//   }
// }

export default connect(mapStateToProps)(Register)
