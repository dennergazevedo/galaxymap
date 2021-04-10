import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

/* STYLES */
import {
  Container,
  Title,
  Describe
} from './style.js';

function Card({title, option, describe, link}) {
  return (
    <Link to={link}>
      <Container>
        <Title>
          {title}
        </Title>
        <Lottie options={option} width={'120px'} height={'120px'} style={{pointerEvents:"none", marginTop: "30px"}}/>
        <Describe>
          {describe}
        </Describe>
      </Container>
    </Link>
  );
}

export default Card;