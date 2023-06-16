import styled from "styled-components";

type container = {
  children?: React.ReactNode;
  maxWidth?: string;
  minHeight?: string;
};

const StyledContainer = styled.div<container>`
  width: 100%;
  height: 100%;
  min-height: ${({ minHeight }) => minHeight || "100%"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  margin: 0 auto;
  overflow: hidden;
`;

const Container: React.FC<container> = (props) => {
  return <StyledContainer {...props} />;
};

export default Container;
