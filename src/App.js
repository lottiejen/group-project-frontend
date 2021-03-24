import './App.css';
import Header from  './components/Header/Header';
import Input from './components/Input';
import Game from './components/Game';
import Games from './components/Games';
import { Router, Route, Switch } from 'react-router-dom';
import history from './History';

function App() {
  return (
    <Router history={ history }>
      <Header />
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Input />
        </Route>
        <Route path="/games/:id" render={ ({ match }) => (
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

export default App;
