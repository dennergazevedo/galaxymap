import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const float = keyframes`
    0% {
        height: 100vh;
    }
    50% {
        height: 110vh;
    }
    100% {
        height: 100vh;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

export const Background = styled.img`
  display: flex;
  position: absolute;
  top: 0;
  height: 100vh;
  width: auto;
  min-width: 100vw;
  object-fit: cover;
  transform: translatey(0px);
  animation: 30s ${float} ease-in-out infinite;
  z-index: -1;
  margin: 0 auto;
`;

export const Body = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px;
    overflow: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Title = styled(motion.span)`
    font-size: 2rem;
    color: #FFF;
    font-weight: 600;
    margin-bottom: 30px;
`;