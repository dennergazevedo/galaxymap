import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .link{
    background-color: transparent;
    font-size: 1.2rem;
    color: #FFF;
    font-variant: small-caps;
    text-transform: lowercase;
    margin-top: 20px;
    font-weight: 500;
    cursor: pointer;

    :hover{
      font-weight: 600;
    }
  }
`;

export const Logomarca = styled.img`
  width: auto;
  height: 80px;
  margin-top: 500px;

  @media (max-width: 600px){
    margin-top: 300px;
    height: auto;
    width: 80vw;
  }
`;