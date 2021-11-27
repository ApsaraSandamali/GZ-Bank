import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AllAccount from './components/AllAccount';
import CreateAccount from './components/CreateAccount';
import EditAccount from './components/EditAccount';
import Header from './components/Header';
import Home from './components/Home';

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
      </div>
    </Router>

  );
}

export default App;