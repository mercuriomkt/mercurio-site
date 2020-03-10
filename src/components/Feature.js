import React from 'react';

export default ({ icon, title, children }) => (
  <article>
    <div className='logo'>
      <span className={`icon fa-${icon}`} />
    </div>
    <h3 className='major'>{title}</h3>
    <p>{children}</p>
  </article>
);
