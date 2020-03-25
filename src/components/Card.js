import React from 'react';

import CardIcons from './CardIcons';

export default ({ link, image, category, title, description, social }) => {
  const socialLinks = social.map((element, index) => (
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
        <img src={image} alt='banner' />
      </a>
      <h6>{category}</h6>
      <h3 className='major'>{title}</h3>
      <p>{description}</p>
      <ul className='icons'>{socialLinks}</ul>
    </article>
  );
};
