import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
import { FaEnvelope, FaLock } from 'react-icons/fa';

/* COMPONENTS */
import Footer from '../../components/Footer';

/* CONTEXT */
import { useLogin } from '../../context';

function Login() {
  const { handleLogin } = useLogin();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  function loginRequest(){
    if(!show){
      toggle();
    }else{
      handleLogin(email, password)
    }
  }

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Body>
        <UserIcon src={userIcon} alt="USERICON" />
        <ToggleContainer show={show}>
          <div>
            <FaEnvelope className="icon"/>
            <Input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              />
          </div>
          <div>
            <FaLock className="icon"/>
            <Input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              />
          </div>
        </ToggleContainer>
        <Button onClick={loginRequest}>ENTRAR</Button>
        <Link to="/register" className="link">
          <Register>Não tem uma conta? Cadastre-se!</Register>
        </Link>
      </Body>
      <Footer />
    </Container>
  );
}

export default Login;
