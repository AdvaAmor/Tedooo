import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  height: 100vh;
  display: grid;
  background:  ${({ theme: { colors } }) => `${colors.background.page}`};
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'navbar navbar'
    'main main';
`;