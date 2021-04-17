import React from 'react';

/* STYLES */
import {
  Container,
  Image,
  Attribute
} from './style.js';

/* ICONS */
import { IoPlanet, IoResize } from 'react-icons/io5';
import { GiWeight } from 'react-icons/gi';
import { RiPinDistanceFill } from 'react-icons/ri';

function PlanetCard({ name, size, mass, distance, image }) {
  return (
    <Container>
      <Image src={image} alt={name}/>
      <Attribute>
        <IoPlanet className="icon" />
        {name}
      </Attribute>
      <Attribute>
        <IoResize className="icon" />
        {size}
      </Attribute>
      <Attribute>
        <GiWeight className="icon" />
        {mass}
      </Attribute>
      <Attribute>
        <RiPinDistanceFill className="icon" />
        {distance}
      </Attribute>
    </Container>
  );
}

export default PlanetCard;