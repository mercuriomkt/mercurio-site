import React from 'react';

import Wrapper from '../components/Wrapper';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import pic04 from '../assets/img/pic04.jpg';

export default () => {
  const oftalmoLinks = [
    { label: 'Site', icon: 'globe', link: 'https://oftalmoguara.com.br/' },
    { label: 'Facebook', icon: 'facebook', link: 'https://www.facebook.com/oftalmoguara' }
  ];

  const sectionText = (
    <p>
      A Mercurio surgiu em 2016, na cidade de Campos do Jordão. Atualmente localizada em
      São José dos Campos, a nossa empresa cresceu e hoje faz parte da{' '}
      <a href='https://www.proisolucoes.com.br/'>Proi Soluções</a>, onde buscamos nos
      tornar referência em marketing e comunicação digital no Vale do Paraíba, oferecendo
      serviços globais aliados a uma estratégia de negócios inteligente. <br />
      <br />
      Conheça alguns de nossos projetos.
    </p>
  );

  return (
    <Wrapper>
      <SectionHeader>Sobre nós</SectionHeader>
      <SectionWrapper text={sectionText}>
        <Card
          link='https://oftalmoguara.com.br/'
          title='Oftalmo Guará'
          subtitle='Marketing Digital'
          img={pic04}
          links={oftalmoLinks}
        >
          Nosso trabalho com a clínica de oftalmologia Oftalmo Guará consistiu na criação
          de um website e uma página do facebook, na qual são produzidos conteúdos
          relevantes para a marca e seus clientes.
        </Card>
      </SectionWrapper>
    </Wrapper>
  );
};
