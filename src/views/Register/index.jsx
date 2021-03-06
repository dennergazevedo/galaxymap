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
import { FaLock, FaRegEnvelope, FaUser } from 'react-icons/fa';

/* SERVICES */
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';
import validator from 'validator';

/* COMPONENTS */
import Footer from '../../components/Footer';

function RegisterPage() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const [show] = useState(true);

  async function handleRegister(){
    global.event.preventDefault();
    try{
      if(loading){
        toast.info('Redirecionando...', { position: 'bottom-left '});
        setTimeout(function(){
          history.push('/');
        }, 3000)
      }else {
        if(name.length >= 4){
          if(password.length >= 8){
            if(validator.isEmail(email)){
              setLoading(true);
              const response = await api.post('/register-user', {
                name,
                email,
                password
              })
              toast.success(response.data, { position: 'bottom-left '});
              setTimeout(function(){
                history.push('/home');
              }, 3000)
            }else{
              toast.info('Pleasy, enter a valid email address.', { position: 'bottom-left '})
            }
          }else{
            toast.info('Password must be at least 8 characters.', { position: 'bottom-left '});
          }
        }else{
          toast.info('Name must be at least 4 characters.', { position: 'bottom-left '})
        }
      }
    }catch(err){
      toast.error('Failed, check your data and try again!', { position: 'bottom-left '})
    }
  }

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Body onSubmit={handleRegister}>
        <UserIcon src={userIcon} alt="USERICON" />
        <ToggleContainer show={show}>
          <div>
            <FaUser className="icon"/>
            <Input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)}
              placeholder="Jo??o Silva"
              />
          </div>
          <div>
            <FaRegEnvelope className="icon"/>
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
        <Button type='submit'>REGISTRAR</Button>
        <Link to="/" className="link">
          <Register>J?? tem uma conta? Entre agora!</Register>
        </Link>
      </Body>
      <Footer/>
    </Container>
  );
}

export default RegisterPage;
