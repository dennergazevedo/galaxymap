import React from 'react';

/* ASSETS */
import background from '../../assets/bg01.png';
import * as viagemCard from '../../assets/json/viagemCard.json';
import * as rocketCard from '../../assets/json/rocketCard.json';
import * as planetCard from '../../assets/json/planetCard.json';

/* STYLED COMPONENTS */
import {
  Container,
  Background,
  CardBody,
  Title
} from './style.js';

/* COMPONENTS */
import Header from '../../components/Header'; 
import Card from '../../components/Card';
import Footer from '../../components/Footer';

function Embarque() {

  const viagemCardOption = {
    loop: true,
    autoplay: true,
    animationData: viagemCard.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const rocketCardOption = {
    loop: true,
    autoplay: true,
    animationData: rocketCard.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const planetCardOption = {
    loop: true,
    autoplay: true,
    animationData: planetCard.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Header />
      <Title>
        Por onde quer começar?
      </Title>
        <CardBody initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 2 }}>
          <Card 
            title={'Viagem'}
            option={viagemCardOption}
            describe={'Venha com a gente fazer a viagem da sua vida, conheça nosso sistema solar e toda a vida que o habita.'}
          />
          <Card 
            title={'Foguetes'}
            option={rocketCardOption}
            describe={'Com pressa? Apenas um passeio? Veja nossas naves e escolha qual melhor atenda a suas necessidades, lembre-se que seu conforto é nossa prioridade sempre.'}
          />
          <Card 
            title={'Planetas'}
            option={planetCardOption}
            describe={'Todo sistema solar a um click de distância! Conheça os planetas que nos conectamos.'}
          />
        </CardBody>
        <Footer />
    </Container>
  );
}

export default Embarque;