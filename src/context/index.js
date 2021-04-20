
import React, {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

// SERVICES
import api from '../services/api';

const UserContext = createContext({user: '', setUser: ''});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  useEffect(()=>{
    async function loadStorageData(){
      const storageUser = window.localStorage.getItem('@galaxymap:user');
      if(storageUser) setUser(JSON.parse(storageUser));
    }
    loadStorageData();
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  );
};

function useLogin() {
  const context = useContext(UserContext);
  const history = useHistory();

  if (!context)
    throw new Error("User provider not found.");

  const { user, setUser } = context;

  function handleLogout(){
    setUser(null);
    window.localStorage.setItem('@galaxymap:user', '');
    toast.success('Deslogando...', { position: 'bottom-left' });
    setTimeout(function(){
      history.push('/');
    }, 3000)
  }

  async function handleLogin(email, password){
    try{
      const response = await api.post('/login', { email, password });
      setUser(response.data);
      window.localStorage.setItem('@galaxymap:user', JSON.stringify(response.data));
      toast.success('Logado com sucesso!', { position: 'bottom-left' });
      setTimeout(function(){
        history.push('/home');
      },3000)
    }catch(err){
      toast.error('Ops! Algo deu errado, verifique os dados e tente novamente.', { position: 'bottom-left' });
    }
  }
  return {
    user,
    handleLogin,
    handleLogout
  }
}

export { UserProvider, useLogin };