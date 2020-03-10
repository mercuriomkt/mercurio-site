import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../App';

export default () => {
  const toggleMenu = useContext(Context);

  return (
    <>
      <header id='header' className='alt'>
        <h1>
          <Link onClick={toggleMenu} to='/'>
            Home
          </Link>
        </h1>
        <nav>
          <a href='#menu' onClick={toggleMenu}>
            Menu
          </a>
        </nav>
      </header>
    </>
  );
};
