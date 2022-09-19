import './App.css';

import Home from "./components/home/home.component";
import Header from "./components/header/header.component";
import Checkout from './components/checkout/checkout.component';
import Login from './components/login/login.component';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
