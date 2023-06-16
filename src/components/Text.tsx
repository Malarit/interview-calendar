import React from "react";
import styled from "styled-components";

export type text = {
  children?: React.ReactNode;
  fontSize?: string;
  weight?: string;
};

const StyledText = styled.div<text>`
  font-size: ${({ fontSize }) => fontSize || "max(16px, 1vw)"};
  font-weight: ${({ weight }) => weight};
  font-family: Arial, Helvetica, sans-serif;
`;

const Text: React.FC<text> = React.memo((props) => {
  return <StyledText {...props} />;
});

export default Text;
