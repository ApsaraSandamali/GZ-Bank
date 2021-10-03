import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AllStudents from './components/AllStudents';
import Contact from './components/Contact';
import EditStudent from './components/EditStudent';
import Header from './components/Header';
import Home from './components/Home';
import Transfer from './components/Transfer';
import TransferForm from './components/TransferForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />      
        <Route path='/home' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/transfer' exact component={Transfer} />
        <Route path='/update/:id' exact component={EditStudent} />
        <Route path='/get/:id' exact component={TransferForm} />
        <Route path='/' exact component={AllStudents} />        
      </div>
    </Router>

  );
}

export default App;
