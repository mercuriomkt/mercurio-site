import React from 'react';

export default ({ link, icon, label }) => (
  <li>
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className={`icon fa-${icon}`}
    >
      <span className='label'>{label}</span>
    </a>
  </li>
);
