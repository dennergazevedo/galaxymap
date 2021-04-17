import React from 'react';

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

/* ASSETS */
import terra from '../../assets/earth.png';

function Planetas() {

  const mapTemp = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Header />
      <Title 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ duration: 1 }}
      >
        Encontre seu destino
      </Title>
      <Body
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ duration: 1 }}
      >

        {
          mapTemp.map(item => {
            return <PlanetCard
              name={"Terra"}
              size={"12.742km"}
              mass={"5,972 × 10^24 kg"}
              distance={"150 × 10^6 km"}
              image={terra}
            />
          })
        }
        
      </Body>
    </Container>
  );
}

export default Planetas;