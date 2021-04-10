import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/* ASSETS */
import background from '../../assets/bg01.png';
import smoke from '../../assets/smoke01.png';
import rocket from '../../assets/rocket01.png';

/* STYLED COMPONENTS */
import {
  Container,
  Background,
  TitleBody,
  TitlePage,
  SubtitlePage,
  Smoke,
  Rocket,
  ButtonTitle,
  DescribeTitle
} from './style.js';

/* COMPONENTS */
import Header from '../../components/Header'; 

function Homepage() {

  const history = useHistory();
  const [showCards, setShowCards] = useState(false);
  const [name] = useState('Nome do Usuário');

  const toggleCards = () => {
    setShowCards(true);
    setTimeout(function(){
      history.push('/embarque');
    }, 2000)
  };

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Smoke src={smoke} initial={{bottom: 0}} animate={{bottom: '-100%'}} transition={{ duration: 2 }}/>
      <Header />
      <TitleBody 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ duration: 2 }}>
        <TitlePage>
          Embarque
        </TitlePage>
        <SubtitlePage>
          nessa jornada!
        </SubtitlePage>
        <DescribeTitle>
          Ora ora, quem apareceu por aqui, bom te ver {name}. Seja bem-vindo meu caro amigo! Desde já, 
          te convido a entrar em nosso foguete, pois tem vários planetas que acontecem coisas inusitadas…. 
          (vrummmmm) faça muito barulho, e venha nessa jornada conosco.
        </DescribeTitle>
        <ButtonTitle onClick={toggleCards}>
          embarcar
        </ButtonTitle>
        {
          showCards ? 
          <Rocket src={rocket} alt="ROCKET" initial={{top: 0}} animate={{top: -1000}} transition={{ duration: 2 }}/>
          :
          <Rocket src={rocket} alt="ROCKET" initial={{top: 1000}} animate={{top: 0}} transition={{ duration: 2 }}/>
        }
      </TitleBody>
    </Container>
  );
}

export default Homepage;