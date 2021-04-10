import React from 'react';

/* STYLES */
import {
  Container,
  Image,
  Attribute
} from './style.js';

/* ICONS */
import { FaRocket, FaBtc } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import { BsBatteryHalf } from 'react-icons/bs';

function RocketCard({ name,speed, cost, capacity, image }) {
  return (
    <Container>
      <Image src={image} alt={name}/>
      <Attribute>
        <FaRocket className="icon" />
        {name}
      </Attribute>
      <Attribute>
        <HiLightningBolt className="icon" />
        {speed}
      </Attribute>
      <Attribute>
        <FaBtc className="icon" />
        {`${Number(cost).toFixed(5)}BTC`}
      </Attribute>
      <Attribute>
        <BsBatteryHalf className="icon" />
        {capacity}
      </Attribute>
    </Container>
  );
}

export default RocketCard;