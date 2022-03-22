import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AllAccount from './components/AllAccount';
import CreateAccount from './components/CreateAccount';
import EditAccount from './components/EditAccount';
import Header from './components/Header';
import NewAccount from './components/NewAccount';
import Home from './components/Home';
import ConfirmnewAcc from './components/ConfirmnewAcc';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/update/' component={EditAccount} />
        <Route path='/add' exact component={CreateAccount} />
        <Route path='/allaccounts' exact component={AllAccount} />       
        <Route path='/newacc' exact component={NewAccount} /> 
        <Route path='/confirmacc' exact component={ConfirmnewAcc} />
      </div>
    </Router>

  );
}

export default App;