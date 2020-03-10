import React from 'react';

import CardIcons from './CardIcons';

export default ({ link, img, subtitle, title, children, links }) => {
  const cardLinks = links.map((element, index) => (
    <CardIcons
      link={element.link}
      icon={element.icon}
      label={element.label}
      key={index}
    />
  ));

  return (
    <article>
      <a href={link} className='image'>
        <img src={img} alt='banner' />
      </a>
      <h6>{subtitle}</h6>
      <h3 className='major'>{title}</h3>
      <p>{children}</p>
      <ul className='icons'>{cardLinks}</ul>
    </article>
  );
};
