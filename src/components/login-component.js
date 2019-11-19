import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      usernameInputData: '',
      passwordInputData: '',
      username: 'admin',
      password: 'admin'
    };
  }

  onChangeUsername = ({target:{value}}) => {
    this.setState({
      usernameInputData: value
    })
  }

  onChangePassword = ({target:{value}}) => {
    this.setState({
      passwordInputData: value
    })
  }

  render() {

    const {
      usernameInputData,
      passwordInputData,
      username,
      password
    } = this.state;

    return(
      <div className='login__wrapper'>
        <div className='login__title'>
          <p>Welcome to Admin Panel!</p>
        </div>
        <div className='login__form'>
          <form>
            <input type='text' value={usernameInputData} placeholder='username' onChange={this.onChangeUsername}/>
            <input type='password' value={passwordInputData} placeholder='password' onChange={this.onChangePassword}/>
          </form>
          <div>
            {usernameInputData === username && passwordInputData === password ? (
              <Link to='/admin'>GO</Link>
            ) : (
              <Link to='/'>GO</Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}


