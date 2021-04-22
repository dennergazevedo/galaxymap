import React from 'react';

/* STYLES */
import {
  Container,
  Image,
  Attribute,
  Body
} from './style.js';

/* ICONS */
import { FaRocket, FaBtc } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { BsBatteryHalf } from 'react-icons/bs';

function RocketCard({ name,speed, cost, capacity, image }) {
  return (
    <Container>
      <Image src={image} alt={name}/>
      <Body>
        <Attribute className="name">
          <FaRocket className="icon" />
          {name}
        </Attribute>
        <Attribute className="speed">
          <HiLightningBolt className="icon" />
          {speed}ALH
        </Attribute>
        <Attribute className="cost">
          <FaBtc className="icon" />
          {`${Number(cost).toFixed(5)} BTC / AL`}
        </Attribute>
        <Attribute className="capacity">
          <BsBatteryHalf className="icon" />
          {capacity} AL
        </Attribute>
      </Body>
    </Container>
  );
}

export default RocketCard;
