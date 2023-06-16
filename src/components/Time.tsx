import React from "react";
import styled, { css } from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { selectCells, selectEvents } from "../redux/slices/cells/selectors";
import { selectDate } from "../redux/slices/date/selectors";
import { setDeleteActive } from "../redux/slices/cells/slice";

import { event } from "../redux/slices/cells/types";

import Text from "./Text";
import Flex from "./Flex";
import Button from "./Button";

type grid = {
  children?: React.ReactNode;
  cells?: number;
};

const Grid = styled.div<grid>`
  display: grid;
  grid-template-columns: ${({ cells }) => `repeat(${cells}, 1fr)`};

  height: 100%;
  overflow-y: scroll;

  div {
    aspect-ratio: 1;
    ${({ cells }) => {
      const border = "1px solid #000";
      return css`
        &:not(:nth-child(${cells}n), :nth-child(${cells}n + 1)) {
          border-right: ${border};
        }
        &:not(:nth-last-child(-n + ${cells}), :nth-child(${cells}n + 1)) {
          border-bottom: ${border};
        }
        &:nth-child(${cells}n + 1) {
          transform: translateY(-6px);
        }
      `;
    }}
  }
`;

const TimeButton = styled(Button)`
  background-color: ${({ bgColorActive }) =>
    bgColorActive ? "#d6d4d4" : "#fff"};
`;

const Time: React.FC = () => {
  const { cells, columnCount } = useAppSelector(selectCells);

  const dispatch = useAppDispatch();
  const date = useAppSelector(selectDate);
  const events = useAppSelector(selectEvents(date));
  const arrCells = [...new Array(cells)];

  const onClickCell = (event: event | undefined) =>
    dispatch(setDeleteActive(event));

  const getFirstCell = (hour: number, i: number) => {
    if (i === 0) return <div key={i}></div>;
    return (
      <Text key={i}>
        <Flex justify="center">{`${hour}:00`}</Flex>
      </Text>
    );
  };

  const getCells = React.useMemo(() => {
    return arrCells.map((_, i) => {
      const firstCell = i % columnCount;
      const hour = Math.trunc(i / columnCount);
      const minutes = (firstCell - 1) * 10;
      const event = events.find(
        (event) => event.hour === hour && event.minutes === minutes
      );

      if (!Boolean(firstCell)) {
        return getFirstCell(hour, i);
      }

      return (
        <Flex
          key={i}
          padding="3px"
          justify="center"
          align="center"
          minHeight="100%"
        >
          <TimeButton
            width="100%"
            height="100%"
            bgColorActive={Boolean(event)}
            onClick={() => onClickCell(event)}
          />
        </Flex>
      );
    });
  }, [JSON.stringify(events)]);

  return <Grid cells={columnCount}>{getCells}</Grid>;
};

export default Time;
