import React from 'react';

import Wrapper from '../components/Wrapper';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

import data from './data';

export default () => {
  const projects = data.map(item => (
    <Card
      link={item.link}
      title={item.title}
      image={item.image}
      social={item.social}
      description={item.description}
      key={item.title}
    />
  ));

  const sectionText = (
    <p>
      A Mercurio surgiu em 2016, na cidade de Campos do Jordão. Atualmente localizada em
      São José dos Campos, a nossa empresa cresceu e hoje faz parte da
      <a href='https://www.proisolucoes.com.br/'> Proi Soluções</a>, onde buscamos nos
      tornar referência em marketing e comunicação digital no Vale do Paraíba, oferecendo
      serviços globais aliados a uma estratégia de negócios inteligente. <br />
      <br />
      Conheça alguns de nossos projetos.
    </p>
  );

  return (
    <Wrapper>
      <SectionHeader>Sobre nós</SectionHeader>
      <SectionWrapper text={sectionText}>{projects}</SectionWrapper>
    </Wrapper>
  );
};
