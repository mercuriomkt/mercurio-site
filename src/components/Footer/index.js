import React from 'react';

import Form from './Form';

export default () => (
  <section id='footer'>
    <div className='inner'>
      <h2 className='major'>Manda um alô</h2>
      <p>
        Utilize o formulário abaixo para nos enviar uma mensagem, tirar todas as suas
        dúvidas e receber uma consultoria gratuita para a sua empresa. Tá esperando o que?
      </p>
      <Form />
      <ul className='contact'>
        <li className='fa-home'>
          Mercurio Marketing <br />
          Av. Cassiano Ricardo, nº 601 - Sala 172 <br />
          17º andar - Ed. The One <br />
          Jardim Aquarius. São José dos Campos - SP
        </li>
        <li className='fa-phone'>(12) 99603-2167</li>
        <li className='fa-envelope'>
          <a href='mailto:atendimento@mercuriomkt.com'>atendimento@mercuriomkt.com</a>
        </li>
        <li className='fa-linkedin'>
          <a
            href='https://www.linkedin.com/company/mercurio-marketing'
            target='_blank'
            rel='noopener noreferrer'
          >
            /mercurio-marketing
          </a>
        </li>
        <li className='fa-facebook'>
          <a
            href='https://www.facebook.com/mercuriomkt'
            target='_blank'
            rel='noopener noreferrer'
          >
            /mercuriomkt
          </a>
        </li>
        <li className='fa-instagram'>
          <a
            href='https://www.instagram.com/mercuriomkt'
            target='_blank'
            rel='noopener noreferrer'
          >
            @mercuriomkt
          </a>
        </li>
      </ul>
      <ul className='copyright'>
        <li>Mercurio Digital - Todos os direitos reservados &copy; 2016-2020</li>
      </ul>
    </div>
  </section>
);
