import Tooltip from "./components/Tooltip";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledContainer = styled.div`
  min-height: 100vh;
  margin: 20px;
`;

const StyledTrigger = styled.button`
  cursor: pointer;
  background: var(--black);

  padding: 0px 8px;
  border-radius: 5px;
`;

const App = () => {
  const trigger = (
    <StyledTrigger>
      <h1>Click</h1>
    </StyledTrigger>
  );

  return (
    <>
      <GlobalStyles />

      <StyledContainer>
        <Tooltip trigger={trigger}>
          <p>Lorem ipsum, dolor sit.</p>
        </Tooltip>
      </StyledContainer>
    </>
  );
};

export default App;
