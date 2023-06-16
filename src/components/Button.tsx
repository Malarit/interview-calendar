import React from "react";
import styled from "styled-components";

type button = {
  children?: React.ReactNode;
  border?: boolean;
  width?: string;
  height?: string;
  circle?: boolean;
  color?: string;
  bgColorActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledButton = styled.button<button>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border-radius: ${({ circle }) => (circle ? "50%" : "none")};
  border: ${({ border, theme }) =>
    border ? `1px solid ${theme.colors.primary}` : "none"};

  color: ${({ color, theme }) => color || theme.colors.primary};
  background-color: ${({ bgColorActive, theme }) =>
    bgColorActive ? theme.colors.primary : "transparent"};

  cursor: pointer;
`;

const Button: React.FC<button> = React.memo((props) => {
  return <StyledButton {...props} />;
});

export default Button;
