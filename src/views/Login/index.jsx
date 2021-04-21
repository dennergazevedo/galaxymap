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
import { toast } from 'react-toastify';

function Login() {
  const { handleLogin } = useLogin();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  function loginRequest(){
    global.event.preventDefault();
    if(!show){
      toggle();
    }else{
      if(loading){
        toast.info('Aguarde, carregando...');
      }else{
        setLoading(true);
        handleLogin(email, password)
      }
    }
  }

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Body onSubmit={loginRequest}>
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
        <Button type="submit">{loading? 'CARREGANDO...' : 'ENTRAR'}</Button>
        <Link to="/register" className="link">
          <Register>Não tem uma conta? Cadastre-se!</Register>
        </Link>
      </Body>
      <Footer />
    </Container>
  );
}

export default Login;
