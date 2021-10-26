import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: max-content 1fr;
  grid-template-areas: 
    "aside header"
    "aside main-dashboard"
  ;
  row-gap: 20px;
`;
