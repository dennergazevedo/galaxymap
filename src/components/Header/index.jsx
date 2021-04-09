import React from 'react';

/* STYLED COMPONENTS */
import { 
  Container,
  Body,
  LinkContainer,
  Logomarca
} from './style';

/* ASSETS */
import logomarca from '../../assets/logo-completa.png';

function Header() {
  return (
    <Container>
      <Body>
        <Logomarca src={logomarca} alt="LOGOMARGA" />
        <LinkContainer>
          <span className="link">Viagem</span>
          <span className="link">Foguetes</span>
          <span className="link">Planetas</span>
        </LinkContainer>
      </Body>
    </Container>
  );
}

export default Header;