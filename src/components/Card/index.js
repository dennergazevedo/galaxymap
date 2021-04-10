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
      <Lottie className="imageCard" options={option} width={'150px'} height={'150px'}/>
      <Describe>
        {describe}
      </Describe>
    </Container>
  );
}

export default Card;