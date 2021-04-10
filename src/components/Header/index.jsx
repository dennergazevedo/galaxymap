import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/** COMPONENTS */
import { SwipeableDrawer } from '@material-ui/core';

/** ICONS */
import { 
  FaTimes,
  FaBars,
  FaMapSigns,
  FaRocket
} from 'react-icons/fa';
import { 
  IoIosPlanet
} from 'react-icons/io';

/* STYLED COMPONENTS */
import { 
  Container,
  Body,
  LinkContainer,
  Logomarca,
  MenuButton,
  MenuContainer
} from './style';

/* ASSETS */
import logomarca from '../../assets/logo-completa.png';

function Header() {

  const [menu, setMenu] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const toggleMenu = () => setMenu(!menu);

  window.addEventListener('resize', function(){
    resizeComponent();
  });

  function resizeComponent(){
    setSize(window.innerWidth);
    console.log(window.innerWidth);
  }

  return (
    <Container>
      <Body>
        <Link to="/home">
          <Logomarca src={logomarca} alt="LOGOMARGA" />
        </Link>
        {
          size > 600?
          <LinkContainer>
            <Link to="/viagem">
              <span className="link">Viagem</span>
            </Link>
            <span className="link">Foguetes</span>
            <span className="link">Planetas</span>
          </LinkContainer>
        :
          <>
            <MenuButton onClick={toggleMenu}>
              <FaBars className="icon"/>
            </MenuButton>
            <SwipeableDrawer
              anchor={'right'}
              open={menu}
              onClose={toggleMenu}
              onOpen={toggleMenu}>
              <MenuContainer>
                <FaTimes onClick={toggleMenu} className="closeButton"/>
                <Link to="/viagem">
                  <span className="item"><FaMapSigns className="icon"/> Viagem</span>
                </Link>
                <span className="item"><FaRocket className="icon"/> Foguetes</span>
                <span className="item"><IoIosPlanet className="icon"/> Planetas</span>
              </MenuContainer>
            </SwipeableDrawer>
          </>
        }
      </Body>
    </Container>
  );
}

export default Header;