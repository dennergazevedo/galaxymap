import React, { useEffect, useState } from 'react';

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
import PlanetCard from '../../components/PlanetCard'; 

/* SERVICES */
import api from '../../services/api';

function Planetas() {

  const [planets, setPlanets] = useState();

  async function loadPlanets(){
    const response = await api.get('/search-all-planets');
    setPlanets(response.data);
  }

  useEffect(()=>{
    loadPlanets();
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
        Escolha o seu destino
      </Title>
      <Body
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ duration: 1 }}
      >

        {
          planets && planets.map(item => {
            return <PlanetCard
              name={item.name}
              size={`${item.size}km`}
              mass={`${item.mass} × 10^24 kg`}
              distance={`${item.distance} × 10^6 km`}
              image={item.image}
              sollar_system={item.sollar_systems}
            />
          })
        }
        
      </Body>
    </Container>
  );
}

export default Planetas;