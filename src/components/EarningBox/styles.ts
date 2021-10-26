import styled from 'styled-components';

export const Container = styled.div<{ type: 'balance' | 'comein' | 'comeout' }>`
  width: 300px;
  height: 160px;

  background-color: ${props => props.type === 'balance' && `#4E41F0`};
  background-color: ${props => props.type === 'comein' && `#F7931B`};
  background-color: ${props => props.type === 'comeout' && `#E44C4E`};
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  padding: 20px;

  img {
    height: 100%;

    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Text = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;

  color: #FFFFFF;
`;

export const Value = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  /* identical to box height */


  color: #FFFFFF;
`;

export const BottomText = styled.span`
  position: absolute;
  bottom: 10px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */


  color: #FFFFFF;
`;
