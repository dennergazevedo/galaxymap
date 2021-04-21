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
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

export const Background = styled.img`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: auto;
  min-width: 100vw;
  object-fit: cover;
  transform: translatey(0px);
  animation: 20s ${float} ease-in-out infinite;
  z-index: -1;
`;

export const Body = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 10px;
  padding: 30px;
  max-width: 350px;
  width: 90vw;
  min-height: 400px;
  z-index: 1;

  .link{
    margin-top: 10px;
  }
`;

export const UserIcon = styled.img`
  display: flex;
  width: 60px;
  height: auto;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: ${props => props.show ? "100px" : "0px"};
  margin: 10px 0px;
  transition: 1s all;
  overflow: hidden;
  margin: 10px 0px;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 3px;
    background-color: #3335;

    .icon{
      color: #FFF;
      margin: 10px;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  font-size: 12px;
  padding: 5px 10px;
  width: 100%;
  background-color: #FFF8;
  height: 40px;
`;

export const Register = styled.span`
  cursor: pointer;
  color: #3338;
  font-size: 12px;
  margin-top: 10px;

  :hover{
    color: #333;
  }
`;