import styled from "styled-components";

type flex = {
  children?: React.ReactNode;
  align?: "center" | string;
  justify?: "center" | string;
  height?: string;
  direction?: string;
  minHeight?: string;
  overflow?: string;
  maxWidth?: string;
  padding?: string;
};

const StyledFlex = styled.div<flex>`
  display: flex;
  align-items: ${({ align }) => align || ""};
  justify-content: ${({ justify }) => justify || ""};
  flex-direction: ${({ direction }) => direction};

  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height || "100%"};
  min-height: ${({ minHeight }) => minHeight};

  overflow: ${({ overflow }) => overflow};
  padding: ${({ padding }) => padding};
`;

const Flex: React.FC<flex> = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
