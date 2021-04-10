import styled from 'styled-components';

export const Container = styled.div`
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
    margin: 0px 30px;

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

export const Describe = styled.div`
    color: #333;
    font-size: 12px;
    padding: 15px 10px;
`;