import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': []
    }
  }

//   componentDidMount() {
//   const authors = [
//     {
//       'first_name': 'Федор',
//       'last_name': 'Достоевский',
//       'birthday_year': '1821',
//     },
//     {
//       'first_name': 'Александр',
//       'last_name': 'Грин',
//       'birthday_year': '1880',
//     },
//   ]
//   this.setState(
//       {
//         'authors': authors
//       }
//   )
// }

  componentDidMount() {
      axios.get('http://127.0.0.1:8000/api/users')
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
          <UserList users={this.state.users} />
        </div>
    )
  }
}

export default App;