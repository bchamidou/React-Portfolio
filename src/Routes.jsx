// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// Import your other components as needed (e.g., Home, Portfolio, Contact)

function Routes() {
  return (
    <Router>
      <Header />
      <Navigation />

      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/Resume" component={Resume} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default Routes;

