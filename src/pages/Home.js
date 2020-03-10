import React from 'react';

import Wrapper from '../components/Wrapper';
import Section from '../components/Section';
import Features from '../components/Features';

import pic01 from '../assets/img/pic01.jpg';
import pic02 from '../assets/img/pic02.jpg';
import pic03 from '../assets/img/pic03.jpg';

export default () => (
  <Wrapper home>
    <Section
      img={pic01}
      styleNumber='1'
      title='Marketing Digital'
      link='/sobre-nos'
      linkText='Saiba mais'
      spotlight
    >
      <p>
        A Mercurio se destaca de outras empresas de marketing digital pela qualidade de
        seus serviços. Mais do que gerenciar mídias sociais, nós trabalhamos de forma
        holística com todos os canais online da empresa, elaborando estratégias e
        planejando a melhor forma de alcançar o seu cliente. Nós contamos com
        profissionais das áreas de marketing, comunicação e computação, que garantem o
        sucesso dos serviços prestados em diversos aspectos do mundo digital.
      </p>
    </Section>
    <Section img={pic02} styleNumber='2' title='Criatividade Digital' spotlight alt>
      <p>
        A Mercurio já atendeu mais de 70 clientes, prestando serviços que incluem a
        criação de logotipos e identidade visual, gestão de mídias sociais como o Facebook
        e o Instagram, desenvolvimento de sites e sistemas digitais, entre outros.
      </p>
    </Section>
    <Section
      img={pic03}
      styleNumber='3'
      title='Informação e Entretenimento'
      link='/blog'
      linkText='Ir para o blog'
      spotlight
    >
      <p>
        Aproveite e fique por dentro de todas as novidades da comunicação, marketing e
        desenvolvimento. Visite o nosso blog.
      </p>
    </Section>
    <Section title='Serviços' styleNumber='2' alt>
      <p>
        A Mercurio oferece uma gama de serviços de Marketing Digital. Conheça alguns dos
        principais!
      </p>
      <Features />
    </Section>
  </Wrapper>
);
