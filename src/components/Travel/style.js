import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 10px;
  margin: 10px 0px;
  width: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Part = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
  padding: 0px 20px;
  height: 60px;
  cursor: default;
`;

export const Title = styled.span`
  font-size: 14px;
  color: #333;
  text-transform: lowercase;
  font-variant: small-caps;
  cursor: default;
`;

export const Info = styled.span`
  font-size: 24px;
  color: #60CAAD;
  text-transform: lowercase;
  font-variant: small-caps;
  font-weight: 600;
  cursor: default;
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