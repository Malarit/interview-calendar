import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { selectDeleteActive } from "../redux/slices/cells/selectors";
import { deleteEvent } from "../redux/slices/cells/slice";
import { setToday } from "../redux/slices/date/slice";

import Flex from "./Flex";
import Button from "./Button";
import Text from "./Text";

type footer = {
  padding?: string;
};

const StyledFooter = styled.div<footer>`
  padding: ${({ padding }) => padding};
  height: 50px;
`;

const Footer: React.FC<footer> = (props) => {
  const dispatch = useAppDispatch();
  const deleteActive = useAppSelector(selectDeleteActive);

  const clickToday = () => {
    dispatch(setToday());
  };

  const clickDelete = () => {
    if (!deleteActive) return;
    dispatch(deleteEvent(deleteActive));
  };

  return (
    <StyledFooter {...props}>
      <Flex align="center" justify="space-between">
        <Button onClick={clickToday}>
          <Text>Today</Text>
        </Button>
        {deleteActive && (
          <Button onClick={clickDelete}>
            <Text>Delete</Text>
          </Button>
        )}
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
