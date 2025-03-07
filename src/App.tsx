import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #0c264f;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

const StyledHeader = styled.h1`
  margin: 0;
`;
function App() {
  return (
    <StyledContainer>
      <StyledHeader>Hi! I'm Sarah</StyledHeader>
      <h2>I'm a Full-stack web developer</h2>
    </StyledContainer>
  );
}

export default App;
