import styled from "styled-components";

import Flex from "./Flex";
import Text from "./Text";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectDate } from "../redux/slices/date/selectors";
import { setEvent } from "../redux/slices/cells/slice";
import React from "react";

type header = {
  padding?: string;
};

const StyledHeader = styled.div<header>`
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => padding};
`;

const Header: React.FC<header> = (props) => {
  const dispatch = useAppDispatch();
  const { year, months, day } = useAppSelector(selectDate);

  const onClick = () => {
    const time = prompt(
      "Enter event time: YYYY-MM-DD HH:mm:ss",
      `${year}-${months + 1}-${day} 00:00:00`
    );

    if (!time) {
      return;
    }
    if (!Date.parse(time)) {
      alert("Invalid Date");
      return;
    }

    const date = new Date(time);

    let minutes = Math.round(date.getMinutes() / 10) * 10;
    if (minutes > 50) minutes = 50;

    dispatch(
      setEvent({
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        hour: date.getHours(),
        minutes,
      })
    );
  };

  return (
    <StyledHeader {...props}>
      <Flex align="center" justify="space-between">
        <Text>Interview Calendar</Text>
        <Button onClick={onClick}>
          <Text fontSize="28px">+</Text>
        </Button>
      </Flex>
    </StyledHeader>
  );
};

export default Header;
