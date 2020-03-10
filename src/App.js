import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Menu';

export const Context = React.createContext();

export default () => {
  const [menu, setMenu] = useState(false);
  const body = document.querySelector('body').classList;
  const toggleMenu = () => (!menu ? setMenu(true) : setMenu(false));

  useEffect(() => {
    if (menu) {
      body.add('is-menu-visible');
    } else {
      body.remove('is-menu-visible');
    }
  }, [menu, body]);

  useEffect(() => {
    const timer = setTimeout(() => {
      body.remove('is-preload');
    }, 100);
    return () => clearTimeout(timer);
  }, [body]);

  return (
    <Router>
      <Context.Provider value={toggleMenu}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sobre-nos'>
            <About />
          </Route>
        </Switch>
        <Menu />
      </Context.Provider>
    </Router>
  );
};
