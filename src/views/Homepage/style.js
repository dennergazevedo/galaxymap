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

const rocketFloat = keyframes`
    0% {
        transform: translatey(0vh);
    }
    50% {
        transform: translatey(3vh);
    }
    100% {
        transform: translatey(0vh);
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

export const Rocket = styled(motion.img)`
    position: absolute;
    right: 10vw;
    margin-top: 50px;
    width: auto;
    height: 70vh;
    transform: translatey(0px);
    align-self: flex-end;
    animation: 5s ${rocketFloat} ease-in-out infinite;
    z-index: -1;
`;

export const CardBody = styled(motion.div)`
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: auto;
    margin-top: 100px;
    overflow: hidden;
    align-self: flex-end;

    @media (max-width: 1024px){
        overflow: scroll;
        margin-top: 0px;
    }
`;

export const TitleBody = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    transition: 1s all;
    padding: 0px 50px;

    .rocket{
        @media (max-width: 600px){
            display: none;
        }
    }
`;

export const TitlePage = styled.span`
    display: flex;
    margin-top: 20px;
    color: #FFF;
    text-shadow: 2px 2px #3335;
    font-size: 6rem;
    font-weight: 600;

    @media (max-width: 1024px){
        font-size: 40px;
        margin-bottom: 20px;
    }

    @media (max-width: 600px){
        max-width: 80vw;
        font-size: 2.5rem;
        align-self: flex-start;
    }
`;

export const SubtitlePage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #60CAAD;
    text-shadow: 2px 2px #3335;
    font-size: 3.5rem;
    font-weight: 600;
    margin-top: -10px;
    margin-left: 100px;

    @media (max-width: 1024px){
        margin-left: 0;
        font-size: 24px;
        margin-top: -15px;
    }

    @media (max-width: 600px){
        max-width: 80vw;
        font-size: 1.5rem;
        align-self: flex-start;
    }
`;

export const Smoke = styled(motion.img)`
    position: absolute;
    bottom: 0;
    width: 100vw;
`;

export const ButtonTitle = styled.button`
    background-color: #60CAAD;
    border-radius: 100px;
    padding: 10px 50px;
    text-transform: lowercase;
    font-variant: small-caps;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 50px;
    transition: 0.5s all;
    color: #FFF;
    opacity: 1;

    :hover{
        opacity: 0.5;
        transition: 0.5s all;
    }
`;

export const DescribeTitle = styled.div`
    font-size: 1rem;
    color: #FFF5;
    width: 20vw;
    min-width: 300px;
    height: auto;
    margin-top: 30px;

    @media (max-width: 600px){
        font-size: 0.8rem;
        min-width: 220px;
    }
`;