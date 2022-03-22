import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Transfer from './components/Transfer';
import TransferForm from './components/TransferForm';
import EmailConfirm from './components/EmailConfirm';
import TransferSuccess from './components/TransferSuccess';
import Ceb from './components/ceb/Ceb';
import CebConfirm from './components/ceb/CebConfirm';
import CebAcc from './components/ceb/CebAcc';

import Crib from './components/Crib';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />      
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/transfer' exact component={Transfer} />
        <Route path='/verifyEmail' exact component={EmailConfirm} />
        <Route path='/email' exact component={TransferForm} />
        <Route path='/success' exact component={TransferSuccess} />
        <Route path='/crib' exact component={Crib} />
        <Route path='/ceb' exact component={Ceb} />
        <Route path='/cebconfirm' exact component={CebConfirm} />
        <Route path='/cebacc' exact component={CebAcc} />
      </div>
    </Router>

  );
}

export default App;
