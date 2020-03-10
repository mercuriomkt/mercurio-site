import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';

export default props => (
  <div id='page-wrapper'>
    <Header />
    {props.home ? <Banner /> : null}
    <section id='wrapper'>{props.children}</section>
    <Footer />
  </div>
);
