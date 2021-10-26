import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 300px;

  border-right: 1px solid #ffffff;
  height: 100vh;
  grid-area: aside;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const CifraBox = styled.div`
  background: #E44C4E;
  border-radius: 10px;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.h3`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #FFFFFF;
`;