import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: max-content;

  border-bottom: 1px solid #ffffff;
  justify-content: flex-end;
  padding: 10px;
  grid-area: header;

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LargeText = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */


  color: #FFFFFF;
`;

export const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */


  color: #FFFFFF;
`;