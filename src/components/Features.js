import React from 'react';

import Feature from './Feature';

export default () => (
  <section className='features'>
    <Feature title='Mídias Sociais' icon='comment'>
      Se tem uma coisa que a Mercurio entende são as mídias sociais. Com a gente, o seu
      negócio ganha presença e relevância no mundo online.
    </Feature>
    <Feature title='Design Gráfico e Editorial' icon='pencil'>
      A beleza é a nossa paixão. Aqui, o design vai além do logotipo. Envolve pesquisa,
      planejamento e o objetivo da entrega é sempre o mesmo: levar sua melhor imagem ao
      consumidor final.
    </Feature>
    <Feature title='Sistemas de Informação' icon='laptop'>
      A Mercurio entrou de cabeça no mundo digital, e agora nós oferecemos a opção de
      informatizar totalmente a sua empresa com o desenvolvimento de sistemas e aplicações
      web, mobile e desktop.
    </Feature>
    <Feature title='Audiovisual' icon='camera-retro'>
      A forma como seu produto é apresentado ao cliente interfere significativamente na
      decisão de compra. Valorize o que você faz de melhor com imagens de alta qualidade.
    </Feature>
  </section>
);
