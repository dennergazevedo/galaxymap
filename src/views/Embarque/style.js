import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";

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
`;

export const CardBody = styled(motion.div)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: auto;
    overflow: hidden;
    max-width: 1400px;
    margin: 100px auto;

    @media (max-width: 1024px){
        overflow: scroll;
        margin-top: 0px;
    }
`;

export const Smoke = styled(motion.img)`
    position: absolute;
    bottom: 0;
    width: 100vw;
`;