import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

/* ASSETS */
import * as notFound from '../../assets/json/notfound.json';
import logo from '../../assets/logo-completa.png';

/* STYLES */
import {
  Container,
  Logomarca
} from './style.js';

function Notfound() {

  const notFoundOption = {
    loop: true,
    autoplay: true,
    animationData: notFound.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const lottieStyle = {
    pointerEvents:"none",
    zIndex: -1,
    position: "absolute",
    minHeight: "100vh",
    minWidth: "100vw"
  }

  return (
    <Container>
      <Logomarca src={logo} alt="LOGO" />
      <Lottie options={notFoundOption} width={'auto'} height={'100vh'} style={lottieStyle}/>
      <Link className="link" to="/home">
        <span>voltar para página inicial</span>
      </Link>
    </Container>
  );
}

export default Notfound;
