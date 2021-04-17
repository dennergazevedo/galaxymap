import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    box-shadow: 1px 1px 10px #3335;
    background-color: #FFF;
    opacity: 0.5;
    transition: 0.5s all;
    width: 300px;
    height: auto;
    min-height: 350px;
    cursor: pointer;
    border: none;
    margin: 0px 30px;

    :hover{
        opacity: 1;
        transition: 0.2s all;
    }

    @media (max-width:1024px){
        margin: 10px;
        height: auto;
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #60CAAD;
    color: #FFF;
    text-transform: lowercase;
    font-variant: small-caps;
    font-size: 24px;
    width: 100%;
    padding: 10px 0px;
`;

export const Describe = styled.div`
    color: #333;
    font-size: 12px;
    padding: 30px 20px;
`;