import React, {Component} from 'react';

export default class Admin extends Component {

  state = {
    usersArray: [
      {id: 1, userName: 'Batman', personName: 'Bruce', personSurname: 'Wayne'},
      {id: 2, userName: 'Superman', personName: 'Clarck', personSurname: 'Kent'},
      {id: 3, userName: 'Flash', personName: 'Barry', personSurname: 'Allen'},
    ],
    searchValue: ''
  }

  onChange = ({target: {value}}) => {
    this.setState({
      searchValue: value
    });
  }

  searchFuction = () => {
    const searchUsername = this.state.searchValue;
    const result = this.state.usersArray.filter(user => user.userName === searchUsername);
    console.log(result);
  }

  searchUser = (e) => {
    e.preventDefault();
    this.searchFuction();
  }

  render() {

    const {
      usersArray,
      searchValue
    } = this.state;

    const usersTable = usersArray.map((user, id) =>
      <tr key={id}>
        <td><a href='/user'>{user.userName}</a></td>
        <td>{user.personName}</td>
        <td>{user.personSurname}</td>
        <td><button>change</button></td>
        <td><button>remove</button></td>
      </tr>
    );

    return(
      <div className='admin__wrapper'>
        <div>
          <p>Admin Panel</p>
        </div>
        <div className='search__wrapper'>
          <form>
            <input type='text' onChange={this.onChange} value={searchValue} placeholder='search'/>
            <button onClick={this.searchUser}>ok</button>
          </form>
        </div><br/>
        <div className='users__wrapper'>
          <table>
            <tbody>
              {usersTable}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


