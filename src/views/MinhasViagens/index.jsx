/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

/* ASSETS */
import background from '../../assets/bg01.png';
import * as noTicket from '../../assets/json/no-ticket.json';

/* STYLED COMPONENTS */
import {
  Container,
  Background,
  Body,
  Title,
  TitleContainer,
  Subtitle,
  BodyContainer
} from './style.js';

/* COMPONENTS */
import Header from '../../components/Header'; 
import Travel from '../../components/Travel';

/* SERVICES */
import api from '../../services/api';
import Lottie from 'react-lottie';

function MinhasViagens() {

  const noTicketOption = {
    loop: true,
    autoplay: true,
    animationData: noTicket.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }

  let user = window.localStorage.getItem('@galaxymap:user');
  user = JSON.parse(user);

  const [viagens, setViagens] = useState();

  async function loadData(){
    const response = await api.get(`/search-all-travel/${user.email}`);
    setViagens(response.data);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <Container>
      <Background src={background} alt="BACKGROUND" />
      <Header />
      <Body>
        <TitleContainer>
          <Title>
            Olá, <strong>{user.name}</strong>
          </Title>
          <Subtitle>
            Aqui você pode acompanhar as suas viagens agendadas e histórico de viagens.
          </Subtitle>
        </TitleContainer>
        <BodyContainer>
          {
            viagens &&
            viagens.length > 0 ? 
            viagens.map(item => (
              <Travel travel={item}/>
            ))
            :
            <>
              <Lottie options={noTicketOption} width={'auto'} height={'50vh'}/>
              <span className="noTicket">Você não possui nenhum ticket de viagem!</span>
            </>
          }
        </BodyContainer>
      </Body>
    </Container>
  );
}

export default MinhasViagens;