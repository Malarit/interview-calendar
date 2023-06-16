import styled from "styled-components";

type disableSelect = {
  children?: React.ReactNode;
  height?: string;
};

const DisableSelect = styled.div<disableSelect>`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  width: 100%;
  height: ${({ height }) => height};
`;

export default DisableSelect;
