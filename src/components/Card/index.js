import React from 'react';
import Lottie from 'react-lottie';

/* STYLES */
import {
  Container,
  Title,
  Describe
} from './style.js';

function Card({title, option, describe}) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Lottie options={option} width={'120px'} height={'120px'} style={{pointerEvents:"none", marginTop: "30px"}}/>
      <Describe>
        {describe}
      </Describe>
    </Container>
  );
}

export default Card;