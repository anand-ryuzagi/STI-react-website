import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';
import Typing from './components/pages/Typing/Typing';
import Services from './components/pages/Services/Services'

function App() {
  return (
    <Router>    
      <Navbar />
      <Switch>
        <Route path ='/' exact component = {Home} />
        <Route path ='/services' component = {Services} />
        <Route path ='/typing' component = {Typing} />
        <Route path = '/contact' component ={Footer} />
      </Switch>
    </Router>
  );
}

export default App;
