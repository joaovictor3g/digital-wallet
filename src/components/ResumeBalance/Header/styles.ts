import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 40px;
  align-self: flex-start;

  h3 {
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;

    color: #FFFFFF;

    &::after {
      content: '';
      width: 59px;
      height: 8px;
      background-color: #F7931B;
    }
  }

  > div {
    width: 10px;
  }
`;


