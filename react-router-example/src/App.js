import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';


const User = ({ match }) => {
  const style = {
    one: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '200px',
      width: '100vw',
      border: '3px solid red',
      padding: '1rem'
    }
  }
  return (
    <div style={style.one}>
      <h1>Welcome {match.params.username}</h1>
      <form action='/user/' method='GET'>
        <fieldset>
          <legend>This is a form</legend>
          UserName: <br />
          <input type='text' name='username' />
          <input type='submit' value='submit' />
        </fieldset>
      </form>
    </div>
  )
}





class App extends Component {
  state = {
    loggedIn: false
  }

  handleLoggedIn = (prevState) => {
    alert('working')
    this.setState({
      loggedIn: !prevState
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/' exact >HOME</NavLink></li>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/login' exact  >LOGIN</NavLink></li>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/user' exact >USER</NavLink></li>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/about/' exact >ABOUT</NavLink></li>
            </ul>
            <input type="button" value='logged In' onClick={this.handleLoggedIn.bind(this)} />
          </nav>
          <Route path='/' exact strict
            render={
              () => (<h1> Welcome To The Good Life!!</h1>)
            } />
          <Route path='/about/' exact strict
            render={
              () => (<h1> About Life!!</h1>)
            } />
          <Route path='/login' exact strict component={User} />

          <Route path='/user/:username' exact strict component={User} />
        </div>
      </Router>
    )
  }
}

export default App;
