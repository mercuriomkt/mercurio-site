import React from 'react';

export default ({ children, text }) => (
  <div className='wrapper'>
    <div className='inner'>
      {text}
      <section className='features'>{children}</section>
    </div>
  </div>
);
