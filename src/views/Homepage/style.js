import styled, { keyframes } from 'styled-components';

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

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    box-shadow: 1px 1px 10px #3335;
    background-color: #FFF;
    overflow: hidden;
    opacity: 0.5;
    transition: 0.5s all;
    max-width: 300px;
    min-height: 400px;
    cursor: pointer;
    border: none;

    :hover{
        opacity: 1;
        transition: 0.2s all;
    }

    .imageCard{
        margin: 20px 0px;
        height: auto;
    }

    @media (max-width:1024px){
        opacity: 1;
    }

    @media (max-width: 600px){
        margin-bottom: 15px;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #FFF;
    text-transform: lowercase;
    font-variant: small-caps;
    font-size: 24px;
    width: 100%;
    height: 80px;
`;

export const Subtitle = styled.div`
    color: #333;
    font-size: 12px;
    padding: 15px 10px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    margin-top: 100px;
    overflow: hidden;

    @media (max-width: 1024px){
        overflow: scroll;
        margin-top: 0px;
    }
`;

export const TitlePage = styled.span`
    display: flex;
    margin-top: 20px;
    font-size: 60px;
    color: #FFF;
    text-shadow: 2px 2px #3335;
    font-style: italic;
    font-family: none;
    padding: 0px 40px;

    @media (max-width: 1024px){
        font-size: 40px;
        margin-bottom: 20px;
    }

    @media (max-width: 600px){
        max-width: 80vw;
        font-size: 30px;
        align-self: flex-start;
    }
`;