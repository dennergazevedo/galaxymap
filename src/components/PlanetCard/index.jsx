import React from 'react';
import { Link } from 'react-router-dom';

/* STYLES */
import {
  Container,
  Image,
  Attribute,
  Body
} from './style.js';

/* ICONS */
import { IoPlanet, IoResize } from 'react-icons/io5';
import { GiWeight } from 'react-icons/gi';
import { RiPinDistanceFill } from 'react-icons/ri';
import { FaSun } from 'react-icons/fa';

function PlanetCard({ name, size, mass, distance, image, sollar_system }) {
  return (
    <Link to={`/viagem?name=${name}`}>
      <Container>
        <Image src={image} alt={name}/>
        <Body>
          <Attribute className="name">
            <IoPlanet className="icon" />
            {name}
          </Attribute>
          <Attribute className="size">
            <IoResize className="icon" />
            {size}
          </Attribute>
          <Attribute className="mass">
            <GiWeight className="icon" />
            {mass}
          </Attribute>
          <Attribute className="distance">
            <RiPinDistanceFill className="icon" />
            {distance}
          </Attribute>
          <Attribute className="sollar_system">
            <FaSun className="icon" />
            {sollar_system}
          </Attribute>
        </Body>
      </Container>
    </Link>
  );
}

export default PlanetCard;