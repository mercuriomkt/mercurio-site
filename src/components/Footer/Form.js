import React, { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const submit = async event => {
    event.preventDefault();
    try {
      const config = {
        method: 'Post',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: { name, email, msg }
      };
      const response = await fetch('https://mercuriomkt.com/api/mail', config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setName('');
    setEmail('');
    setMsg('');
  };

  return (
    <form action='#'>
      <div className='fields'>
        <div className='field'>
          <label>Nome</label>
          <input type='text' onChange={e => setName(e.target.value)} value={name} />
        </div>
      </div>
      <div className='fields'>
        <div className='field'>
          <label>E-mail</label>
          <input type='email' onChange={e => setEmail(e.target.value)} value={email} />
        </div>
      </div>
      <div className='fields'>
        <div className='field'>
          <label>Sua mensagem</label>
          <textarea rows='4' onChange={e => setMsg(e.target.value)} value={msg} />
        </div>
      </div>
      <ul className='actions'>
        <li>
          <input type='submit' value='Enviar mensagem' onClick={submit} />
        </li>
      </ul>
    </form>
  );
};
