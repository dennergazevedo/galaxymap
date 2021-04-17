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
import { FaLock, FaUser } from 'react-icons/fa';

/* SERVICES */
import { useHistory } from 'react-router-dom';

/* COMPONENTS */
import Footer from '../../components/Footer';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  const toggle = () => setShow(!show);

  function handleLogin(){
    if(!show){
      toggle();
    }else{
      history.push('/home');
    }
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
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.email)}
              placeholder="exemplo@email.com"
              />
          </div>
          <div>
            <FaLock className="icon"/>
            <Input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.email)}
              placeholder="********"
              />
          </div>
        </ToggleContainer>
        <Button onClick={handleLogin}>ENTRAR</Button>
        <Link to="/register" className="link">
          <Register>Não tem uma conta? Cadastre-se!</Register>
        </Link>
      </Body>
      <Footer />
    </Container>
  );
}

export default Login;
