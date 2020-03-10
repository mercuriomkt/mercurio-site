import React from 'react';

import logo from '../assets/img/logo_white.png';

export default () => (
  <section id='banner'>
    <div className='inner'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <h2>Mercurio Digital</h2>
      <p>Explore um universo de possibilidades</p>
    </div>
  </section>
);
