import React from 'react'
import Home1 from "./Home1";
import Info from './Info'
import Navbar from './Navbar';
import About from './About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index1.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path='/' component={Home1}></Route>
      <Route path='/info/:id' component={Info}></Route>
      <Route path='/about' component={About}></Route>
    </Router>
    
  );
}

export default App;
