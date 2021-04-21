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
        <Attribute>
          <FaRocket className="icon" />
          {name}
        </Attribute>
        <Attribute>
          <HiLightningBolt className="icon" />
          {speed}ALH
        </Attribute>
        <Attribute>
          <FaBtc className="icon" />
          {`${Number(cost).toFixed(5)} BTC / ALH`}
        </Attribute>
        <Attribute>
          <BsBatteryHalf className="icon" />
          {capacity} AL
        </Attribute>
      </Body>
    </Container>
  );
}

export default RocketCard;