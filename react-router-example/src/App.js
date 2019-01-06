import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';


const User = (props) => {
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
      <h1>Welcome {props.username}</h1>
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

  handleLoggedIn = () => {
    console.log('working', this.state.loggedIn)
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    })
    )
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/' exact >HOME</NavLink></li>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/login' exact  >LOGIN</NavLink></li>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/user/peter' exact >USER</NavLink></li>
              <li><NavLink activeStyle={{ color: 'lightblue' }} to='/about/' exact >ABOUT</NavLink></li>
            </ul>
            <Prompt
              when={!this.state.loggedIn}
              message={(location) => {
                return location.pathname.startsWith('/user') ? 'Are you sure you want route cause you not logged in!' : true;
              }}
            />
            <input type="button" value={this.state.loggedIn ? 'logged In' : 'logged Out'} onClick={this.handleLoggedIn.bind(this)} />
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

          <Route path='/user/:username' exact strict render={({ match }) => (
            this.state.loggedIn ? (<User username={match.params.username} />) : (<Redirect to='/' />)
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
