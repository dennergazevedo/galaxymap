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

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Title = styled.div`
    font-size: 38px;
    color: #FFF;

    strong{
        color: #60CAAD;
    }
`;

export const Subtitle = styled.div`
    font-size: 16px;
    color: #FFF;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0px;
    margin-top: 80px;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    width: 100%;

    .noTicket{
        color: #FFF;
        font-size: 16px;
        font-variant: small-caps;
        text-transform: lowercase;
    }
`;