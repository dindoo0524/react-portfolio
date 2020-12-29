import React from 'react';
import './App.css';
import './Common.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Switch>
          <Route exact path="/portfolio" component={Home}/>
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
