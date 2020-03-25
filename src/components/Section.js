import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  styleNumber,
  alt,
  img,
  title,
  children,
  link,
  linkText,
  spotlight
}) => (
  <section
    className={`wrapper ${spotlight ? 'spotlight' : null} style${styleNumber} ${
      alt ? 'alt' : null
    }`}
  >
    <div className='inner'>
      <Link to='/' className='image'>
        {img ? <img src={img} alt='Link para home' /> : 'Retornar a home'}
      </Link>
      <div className='content'>
        <h2 className='major'>{title}</h2>
        {children}
        {link ? (
          <Link to={link} className='special'>
            {linkText}
          </Link>
        ) : null}
      </div>
    </div>
  </section>
);
