import './App.css';
import Header from  '../Header/Header';
import Input from '../Input';
import Game from '../Game';
import Games from '../Games';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../History';
import { Component } from 'react';
class App extends Component 
{


  render() {
    return (
    <Router history={ history }>
      <Header />
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Input />
        </Route>
        <Route path={`/games/:id`} render={ ({ match }) => (
          <Game gameID={match.params.id}/>
        ) }>
        </Route>
        <Route exact path="/all">
          <Games />
        </Route>
      </Switch>
      </div>
    </Router>
  )
  }
  
}

export default App;
