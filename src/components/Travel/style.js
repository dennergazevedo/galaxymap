import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space;
  background-color: #FFF;
  border-radius: 10px;
  margin: 10px 0px;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 400px){
    justify-content: center;
  }
`;

export const Part = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 0px 10px;
  height: auto;
  cursor: default;
`;

export const Title = styled.span`
  font-size: 10px;
  color: #333;
  text-transform: lowercase;
  font-variant: small-caps;
  cursor: default;
  text-align: center;
`;

export const Info = styled.span`
  font-size: 16px;
  color: #60CAAD;
  text-transform: lowercase;
  font-variant: small-caps;
  font-weight: 600;
  cursor: default;
  text-align: center;
`;

export const Identification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #60CAAD;
  color: #FFF;
  width: 100%;
  font-weight: 600;
  text-transform: lowercase;
  font-variant: small-caps;

  .icon{
    margin: 0px 5px;
    font-size: 20px;
  }
`;