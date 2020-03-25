import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../App';

export default () => {
  const toggleMenu = useContext(Context);
  const _onClick = () => {
    toggleMenu();
    window.scrollTo(0, 0);
  };

  return (
    <nav id='menu'>
      <div className='inner'>
        <h2>Menu</h2>
        <ul className='links'>
          <li>
            <Link to='/' onClick={_onClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/sobre-nos' onClick={_onClick}>
              Sobre nós
            </Link>
          </li>
          {/* <li>
            <a href='https://mercuriomkt.com/blog' onClick={_onClick}>
              Blog
            </a>
          </li> */}
        </ul>
        <button
          style={{ boxShadow: 'none', backgroundPosition: '50%' }}
          className='close'
          onClick={toggleMenu}
        >
          Fechar
        </button>
      </div>
    </nav>
  );
};
