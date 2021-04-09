import React from 'react';
import Lottie from 'react-lottie';

/* ASSETS */
import background from '../../assets/travel-background.jpg';
import * as viagemCard from '../../assets/json/viagemCard.json';
import * as rocketCard from '../../assets/json/rocketCard.json';
import * as planetCard from '../../assets/json/planetCard.json';

/* STYLED COMPONENTS */
import {
  Container,
  Background,
  Body,
  Card,
  Title,
  Subtitle,
  TitlePage
} from './style.js';

/* COMPONENTS */
import Header from '../../components/Header';

function Homepage() {

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
      <TitlePage>
        Comece a sua viagem!
      </TitlePage>
      <Body>
        <Card>
          <Title>
            Viagem
          </Title>
          <Lottie className="imageCard" options={viagemCardOption} width={'150px'} height={'150px'}/>
          <Subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </Subtitle>
        </Card>
        <Card>
          <Title>
            Foguetes
          </Title>
          <Lottie className="imageCard" options={rocketCardOption} width={'150px'} height={'200px'}/>
          <Subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </Subtitle>
        </Card>
        <Card>
          <Title>
            Planetas
          </Title>
          <Lottie className="imageCard" options={planetCardOption} width={'150px'} height={'150px'}/>
          <Subtitle>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book.
          </Subtitle>
        </Card>
      </Body>
    </Container>
  );
}

export default Homepage;