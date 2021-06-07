import {Navbar} from './Components';
import React from 'react';
import  {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Footer from './Footer';
import Services from './pages/Services/Services';
import Products from './pages/Product/Product';
import SignUP from './pages/SignUP/SignUP';

function App() {
  return (
    <Router>
        <GlobalStyle/>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/Products" exact component={Products}/>
          <Route path="/sign-up" exact component={SignUP}/>
          
          
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
