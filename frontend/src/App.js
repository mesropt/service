import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import FooterItem from './components/Footer.js'
import MenuItem from './components/Menu.js'

// App.js - это главный компонент
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

  componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/users/')
          .then(response => {
            const users = response.data
                this.setState(
                {
                  'users': users
                }
            )
        }).catch(error => console.log(error))
  }

  render() {
    return (
        <div>
          <MenuItem menu={'Menu'} />
          <UserList users={this.state.users} />
          <FooterItem footer={'Footer'} />
        </div>
    )
  }
}

export default App; // чтобы APP был доступен в других частях программы