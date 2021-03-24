import './App.css';
import Header from  './components/Header/Header';
import Input from './components/Input/Input';
import Game from './components/Game/Game';
import Games from './components/Games';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Input />
        </Route>
        <Route exact path="/game">
          <Game />          
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
