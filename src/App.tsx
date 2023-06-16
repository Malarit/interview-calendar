import styled from "styled-components";

import Header from "./components/Header";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import Flex from "./components/Flex";
import Months from "./components/Months";
import MovedDays from "./components/MovedDays";
import Footer from "./components/Footer";
import Time from "./components/Time";

const StyledApp = styled.div`
  padding: 0 max(1vw, 10px);
  min-height: 100vh;
`;


function App() {
  return (
    <StyledApp>
      <Container maxWidth="740px">
        <Flex minHeight="100vh" direction="column">
          <Wrapper height="max(5vh, 50px)">
            <Header padding="0 max(2vw, 20px)" />
          </Wrapper>
          <Flex justify="end">
            <Wrapper overflow="hidden" maxWidth="90%" padding="5px 0">
              <MovedDays />
              <Months />
            </Wrapper>
          </Flex>
          <Wrapper height="1px" flex="1 1 auto">
            <Time />
          </Wrapper>
          <Wrapper>
            <Footer padding="0 max(2vw, 20px)" />
          </Wrapper>
        </Flex>
      </Container>
    </StyledApp>
  );
}

export default App;
