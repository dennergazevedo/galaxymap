import React from 'react'

/* STYLES */
import {
  Container,
  Part,
  Title,
  Info,
  Identification,
  Body
} from './style';

/* ICONS */
import { FaTicketAlt } from 'react-icons/fa';

export default function Travel( { travel } ) {
  return (
    <Container>
      <Identification>
        TICKET: 
        <FaTicketAlt className="icon"/>
        {("00000000" + travel.id).slice(-8)}
      </Identification>
      <Body>
        <Part>
          <Title>Planeta de Partida</Title>
          <Info>{travel.start_planet}</Info>
        </Part>
        <Part>
          <Title>Planeta de Destino</Title>
          <Info>{travel.destiny_planet}</Info>
        </Part>
        <Part>
          <Title>Distância</Title>
          <Info>{travel.distance} AL</Info>
        </Part>
        <Part>
          <Title>Foguete</Title>
          <Info>{travel.rockets_name}</Info>
        </Part>
        <Part>
          <Title>Valor Pago</Title>
          <Info>{travel.cost}BTC</Info>
        </Part>
        <Part>
          <Title>Data da Partida</Title>
          <Info>{travel.date_start}</Info>
        </Part>
        <Part>
          <Title>Data da Chegada</Title>
          <Info>{String(travel.date_arrival).replace('/', '-').replace('/','-')}</Info>
        </Part>
      </Body>
    </Container>
  )
}
