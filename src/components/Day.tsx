import styled from "styled-components";
import Flex from "./Flex";

import Text from "./Text";
import Button from "./Button";
import React from "react";

type day = {
  dayNumber: number;
  dayWeek: string;
  border?: boolean;
  bgColorActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type styledDay = {
  minWidth?: string;
};

const StyledDay = styled.div<styledDay>`
  min-width: ${({ minWidth }) => minWidth || "30px"};
`;

const Day: React.FC<day & styledDay> = React.memo((props) => {
  const { dayNumber, dayWeek, border, bgColorActive, onClick, minWidth } =
    props;

  return (
    <StyledDay minWidth={minWidth}>
      <Flex direction="column" align="center">
        <Text>{dayWeek}</Text>
        <Button
          circle
          width="30px"
          height="30px"
          border={border}
          bgColorActive={bgColorActive}
          color={bgColorActive ? "#fff" : ""}
          onClick={onClick}
        >
          <Text fontSize="0.95rem">{dayNumber}</Text>
        </Button>
      </Flex>
    </StyledDay>
  );
});

export default Day;
