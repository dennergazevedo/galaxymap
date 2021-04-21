import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/** COMPONENTS */
import { SwipeableDrawer } from '@material-ui/core';

/** ICONS */
import { 
  FaTimes,
  FaBars,
  FaMapSigns,
  FaRocket,
  FaUser,
  FaDoorOpen
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
  MenuContainer,
  ButtonLink
} from './style';

/* ASSETS */
import logomarca from '../../assets/logo-completa.png';

/* CONTEXT */
import { useLogin } from '../../context';

function Header() {

  const { handleLogout } = useLogin();
  const [menu, setMenu] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  const toggleMenu = () => setMenu(!menu);

  window.addEventListener('resize', function(){
    resizeComponent();
  });

  function resizeComponent(){
    setSize(window.innerWidth);
  }

  return (
    <Container>
      <Body>
        <Link to="/home">
          <Logomarca src={logomarca} alt="LOGOMARGA" />
        </Link>
        {
          size > 1024?
          <LinkContainer>
            <Link className="link" to="/home">
              home
            </Link>
            <Link className="link" to="/viagem">
              Viagem
            </Link>
            <Link className="link" to="/planetas">
              Planetas
            </Link>
            <Link className="link" to="/foguetes">
              Foguetes
            </Link>
            <Link className="link" to="/minhas-viagens">
              Minhas Viagens
            </Link>
            <ButtonLink onClick={() => handleLogout()}>
              sair
            </ButtonLink>
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
                <Link to="/home">
                  <span className="item"><FaMapSigns className="icon"/> Home</span>
                </Link>
                <Link to="/viagem">
                  <span className="item"><FaMapSigns className="icon"/> Viagem</span>
                </Link>
                <Link to="/foguetes">
                  <span className="item"><FaRocket className="icon"/> Foguetes</span>
                </Link>
                <Link to="/planetas">
                  <span className="item"><IoIosPlanet className="icon"/> Planetas</span>
                </Link>
                <Link className="link" to="/minhas-viagens">
                  <span className="item"><FaUser className="icon"/> Minhas Viagens</span>
                </Link>
                <div className="link" onClick={() => handleLogout()}>
                  <span className="item"><FaDoorOpen className="icon"/> Sair</span>
                </div>
              </MenuContainer>
            </SwipeableDrawer>
          </>
        }
      </Body>
    </Container>
  );
}

export default Header;