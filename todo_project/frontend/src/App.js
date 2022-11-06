import React from 'react';
import './App.css';
import axios from 'axios';

import Menu from './components/Menu';
import UserList from './components/Users';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'users': [],
    }
  }

  componentDidMount() {
    // get data from BACKEND
    axios.get('http://127.0.0.1:8000/api/user')
      .then(response => {
        const users = response.data
        this.setState({ 'users': users })
      }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Menu />
        <UserList users={this.state.users} />
        <Footer />
      </div>
    )
  }
}


export default App;
