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
  height: 45px;
  width: auto;

  @media (max-width: 600px){
    height: 30px;
  }
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
    color: #FFF;
    font-variant: small-caps;
    text-transform: lowercase;
    margin: 0px 10px;

    :hover{
      font-weight: 600;
      transition: 0.2s all;
    }
  }
`;

export const MenuButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: 0;
  color: #FFF;
  font-size: 24px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 30px;

  .closeButton{
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
  }

  .item{
    width: 100%;
    min-width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-transform: lowercase;
    font-variant: small-caps;
    font-weight: 600;
    padding: 15px 0px;
    border-bottom: 1px solid #F2F2F2;
    color: #333;

    .icon{
      color: #60CAAD;
    }
  }
`;