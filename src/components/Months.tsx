import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { decrementMonths, incrementMonths } from "../redux/slices/date/slice";
import { selectDate } from "../redux/slices/date/selectors";

import Flex from "./Flex";
import DisableSelect from "./DisableSelect";
import Button from "./Button";
import Text from "./Text";

const StyledMonths = styled.div`
  min-height: 50px;
`;

const Months: React.FC = () => {
  const { year, months } = useAppSelector(selectDate);
  const dispatch = useAppDispatch();

  let date = new Date(year, months);
  const monthName = date.toLocaleString("en", { month: "long" });

  return (
    <DisableSelect>
      <Flex justify="space-between">
        <Button onClick={() => dispatch(decrementMonths())}>
          <Text>{"<"}</Text>
        </Button>
        <Text>{`${monthName} ${year}`}</Text>
        <Button onClick={() => dispatch(incrementMonths())}>
          <Text>{">"}</Text>
        </Button>
      </Flex>
    </DisableSelect>
  );
};

export default Months;
