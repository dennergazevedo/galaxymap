import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: linear-gradient(to bottom, #0009, #0000);
`;

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    background-color: transparent;
    padding: 20px 50px;
    padding-bottom: 50px;

    span{
      font-size: 16px;
      margin: 0px 20px;
      color: #FFF;
      text-transform: lowercase;
      font-variant: small-caps;
      text-shadow: 2px 2px #3335;
    }
`;

export const Logomarca = styled.img`
  height: 50px;
  width: auto;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 350px;

  .link{
    font-weight: 400;
    cursor: pointer;
    transition: 0.2s all;

    :hover{
      font-weight: 600;
      transition: 0.2s all;
    }
  }
`;