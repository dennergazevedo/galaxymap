import React, { useState } from 'react';

/* ASSETS */
import background from '../../assets/background01.jpg';
import userIcon from '../../assets/userIcon.png';

/* STYLED COMPONENTS */
import {
  Container,
  Background,
  Body,
  UserIcon,
  Button,
  ToggleContainer,
  Input,
  Register
} from './style.js'

/* ICONS */
import { FaRegEnvelope, FaUser } from 'react-icons/fa';

/* SERVICES */
import history from '../../services/history';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [show] = useState(true);

  function handleRegister(){
    history.push('/home');
    window.location.reload();
  }

  function handleLogin(){
    history.push('/');
    window.location.reload();
  }

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Body>
        <UserIcon src={userIcon} alt="USERICON" />
        <ToggleContainer show={show}>
          <div>
            <FaUser className="icon"/>
            <Input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.email)}
              placeholder="João Silva"
              />
          </div>
          <div>
            <FaRegEnvelope className="icon"/>
            <Input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.email)}
              placeholder="exemplo@email.com"
              />
          </div>
        </ToggleContainer>
        <Button onClick={handleRegister}>REGISTRAR</Button>
        <Register onClick={handleLogin}>Já tem uma conta? Entre agora!</Register>
      </Body>
    </Container>
  );
}

export default RegisterPage;
