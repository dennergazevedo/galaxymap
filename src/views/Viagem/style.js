import styled from 'styled-components';
import { motion } from "framer-motion";

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
  z-index: -1;
  margin: 0 auto;
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
    width: auto;
    max-width: 1400px;
    position: relative;
    transition: 1s all;
    padding: 0px 50px;

    .rocket{
        @media (max-width: 600px){
            display: none;
        }
    }

    @media (max-width: 600px){
        align-items: center;
        justify-content: center;
        padding: 0;
        margin-top: -30px;
    }
`;

export const TitlePage = styled.span`
    display: flex;
    margin-top: 20px;
    color: #FFF;
    text-shadow: 2px 2px #3335;
    font-size: 6rem;
    font-weight: 600;

    @media (max-width: 600px){
        font-size: 2.5rem;
        text-align: center;
    }
`;

export const SubtitlePage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #60CAAD;
    width: 25vw;
    text-shadow: 2px 2px #3335;
    font-size: 3rem;
    font-weight: 600;
    margin-top: -10px;

    @media (min-width: 600px) and (max-width: 1024px){
        width: auto;
        max-width: 400px;
        margin-left: 0;
        font-size: 24px;
        margin-top: -15px;
    }

    @media (max-width: 600px){
        width: auto;
        font-size: 1rem;
        align-self: flex-start;
        text-align: center;
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

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0px 30px;
    
    @media (max-width: 1024px){
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;

        ::-webkit-scrollbar{
            display: none;
        }
    }

    @media (max-height: 900px){
        overflow: scroll;
        scrollbar-width: none;
        -ms-overflow-style: none;

        ::-webkit-scrollbar{
            display: none;
        }
    }
`;

export const Form = styled(motion.form)`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #3335;
    width: 25vw;
    min-width: 350px;

    @media (max-width: 600px){
        margin-top: 30px;
        margin-bottom: 30px;
        min-width: 260px !important;
    }

    @media (min-width: 600px) and (max-width: 1024px){
        margin-bottom: 30px;
        min-width: 350px;
    }

    .row{
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: #333;
        text-transform: lowercase;
        font-variant: small-caps;
        margin: 10px 0px;

        select, input {
            padding: 10px;
            width: 100%;
            border: 1px solid #f2f2f2;
        }
    }

    .buyButton{
        padding: 10px;
        background-color: #60CAAD;
        color: #FFF;
        text-transform: lowercase;
        font-variant: small-caps;
        font-weight: 600;
        margin-top: 30px;
    }
`;