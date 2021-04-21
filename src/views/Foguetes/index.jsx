import React, { useState, useEffect } from 'react';

/* ASSETS */
import background from '../../assets/bg01.png';

/* STYLED COMPONENTS */
import {
  Container,
  Background,
  Body,
  Title
} from './style.js';

/* COMPONENTS */
import Header from '../../components/Header'; 
import RocketCard from '../../components/RocketCard'; 

/* ASSETS */
import api from '../../services/api';

function Foguetes() {

  const [rockets, setRockets] = useState();

  async function loadRockets(){
    const response = await api.get('/search-all-rockets');
    setRockets(response.data);
  }

  useEffect(()=>{
    loadRockets();
  }, [])

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Header />
      <Title 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ duration: 1 }}
      >
        Nossos foguetes
      </Title>
      <Body
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ duration: 1 }}
      >

        {
          rockets && rockets.map(item => {
            return <RocketCard
              name={item.name}
              speed={item.speed}
              cost={item.cost}
              capacity={item.capacity}
              image={item.image}
            />
          })
        }
        
      </Body>
    </Container>
  );
}

export default Foguetes;