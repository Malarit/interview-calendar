import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { selectDate } from "../redux/slices/date/selectors";
import { setActiveNumber } from "../redux/slices/date/slice";

import getDaysAndWeeks from "../utils/getDaysAndWeeks";
import { splitNumber } from "../utils/splitnumber";

import Day from "./Day";
import Flex from "./Flex";
import DisableSelect from "./DisableSelect";

const SPEED = 15;

type styledMovedDays = {
  children?: React.ReactNode;
  translateX?: number;
};

const StyledMovedDays = styled.div.attrs<styledMovedDays>(({ translateX }) => ({
  style: {
    transform: `translateX(${translateX}px)`,
  },
}))<styledMovedDays>`
  width: 100%;
`;

const MovedDays: React.FC = () => {
  const { year, months, day, activeNumber } = useAppSelector(selectDate);
  const dispatch = useAppDispatch();
  const days = getDaysAndWeeks(year, months);
  const [widthDays, setWidthDays] = React.useState(30);
  const [translate, setTranslate] = React.useState(0);
  const refDisableSelect = React.useRef<HTMLDivElement>(null);

  const move = (movementX: number) => {
    const maxTranslate = -widthDays * days.length;

    setTranslate((curr) => {
      const calc = curr + SPEED * Math.sign(movementX);
      const check = calc > 0 || calc < maxTranslate;

      if (check) {
        return movementX < 0 ? 0 : maxTranslate;
      }
      return calc;
    });
  };

  const onMouseDown = () => {
    window.onmousemove = (e) => move(e.movementX);
  };

  const onTouchStart = () => {
    let previousTouch: Touch;
    window.ontouchmove = (e) => {
      const touch = e.touches[0];
      if (previousTouch) {
        const movementX = touch.pageX - previousTouch.pageX;
        move(movementX);
      }
      previousTouch = touch;
    };
  };

  const onResize = () => {
    if (!refDisableSelect.current) return;
    const width = refDisableSelect.current.offsetWidth;

    const { int, remainder } = splitNumber(width / days.length);
    setWidthDays((30 * Number("0." + remainder)) / int + days.length);
  };

  React.useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    window.onmouseup = () => (window.onmousemove = null);
    window.ontouchend = () => (window.ontouchmove = null);

    return () => {
      window.removeEventListener("resize", onResize);
      window.onmouseup = null;
      window.ontouchend = null;
    };
  }, []);

  const getDays = React.useMemo(() => {
    return days
      .concat(days)
      .map(({ date, week }, i) => (
        <Day
          key={i}
          onClick={() => dispatch(setActiveNumber(date))}
          dayNumber={date}
          dayWeek={week[0]}
          border={day === date}
          bgColorActive={activeNumber === date}
          minWidth={widthDays + "px"}
        />
      ));
  }, [months, activeNumber, widthDays]);

  return (
    <DisableSelect ref={refDisableSelect}>
      <StyledMovedDays
        onTouchStart={onTouchStart}
        onMouseDown={onMouseDown}
        translateX={translate}
      >
        <Flex>{getDays}</Flex>
      </StyledMovedDays>
    </DisableSelect>
  );
};

export default MovedDays;
