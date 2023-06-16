import styled from "styled-components";

type wrapper = {
  children?: React.ReactNode;
  width?: string;
  maxWidth?: string;
  height?: string;
  disableBottomBorder?: boolean;
  padding?: string;
  minHeight?: string;
  flex?: string;
  overflow?: string;
};

const StyledWrapper = styled.div<wrapper>`
  width: ${({ width }) => width || "100%"};
  max-width: ${({ maxWidth }) => maxWidth || "100%"};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ padding }) => padding};
  flex: ${({ flex }) => flex};
  overflow: ${({ overflow }) => overflow};
  border-bottom: ${({ disableBottomBorder }) =>
    !disableBottomBorder && "solid 1.5px #00000025"};
`;

const Wrapper: React.FC<wrapper> = (props) => {
  return <StyledWrapper {...props} />;
};

export default Wrapper;
