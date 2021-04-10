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
import RocketCard from '../../components/RocketCard'; 

/* ASSETS */
import rocket from '../../assets/rocket02.png';

function Foguetes() {

  const mapTemp = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Header />
      <Title>
        Conheça os nossos foguetes
      </Title>
      <Body>

        {
          mapTemp.map(item => {
            return <RocketCard
              name={"X1A"}
              speed={"56000ms"}
              cost={"0.00003"}
              capacity={"15AN"}
              image={rocket}
            />
          })
        }
        
      </Body>
    </Container>
  );
}

export default Foguetes;