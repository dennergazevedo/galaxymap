import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    cursor: default;
    border: 1px solid #FFF2;
    border-top: 5px solid #FFF2;
    border-bottom: 5px solid #FFF2;
    border-radius: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    background-color: #FFF1;
    height: 480px;

    :hover{
        background-color: #FFF2;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const Image = styled.img`
    margin-top: 30px;
    width: 250px;
    max-height: 250px;
    margin-bottom: 10px;
    object-fit: contain;
`;

export const Attribute = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 12px;
    text-transform: uppercase;
    font-variant: small-caps;
    color: #FFF;
    width: 90%;
    margin-bottom: 5px;
    background-color: #FFF2;

    .icon{
        font-size: 14px;
        color: #FFF5
    }
`;