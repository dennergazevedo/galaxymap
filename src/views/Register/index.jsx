import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ASSETS */
import background from '../../assets/background02.png';
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
import { useHistory } from 'react-router-dom';

/* COMPONENTS */
import Footer from '../../components/Footer';

function RegisterPage() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [show] = useState(true);

  function handleRegister(){
    history.push('/home');
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
        <Link to="/" className="link">
          <Register>Já tem uma conta? Entre agora!</Register>
        </Link>
      </Body>
      <Footer/>
    </Container>
  );
}

export default RegisterPage;
