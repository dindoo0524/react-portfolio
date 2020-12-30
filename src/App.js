import React from 'react';
import './App.css';
import './Common.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Header from './components/Header';
import Home from './pages/Home';
import Info from './pages/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="header-line"></div>
      {/* <Header /> */}
      <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/info/:type/:id" component={Info}/>
      </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
