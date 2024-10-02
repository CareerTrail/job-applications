import { useState } from 'react';
import { BOARD_TEXTS } from 'core/variables/locales';
import SideBar from 'components/SideBar';
import BoardItem from 'pages/Board/BordItem';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';

const Wrapper = styled.div`
  background-color: ${Colors.tertiary_stroke};
  display: flex;
`;

export const Board = () => {
  const [title] = useState(BOARD_TEXTS.JOB_SEARCH_TITLE);
  return (
    <Wrapper>
      <SideBar title={title} />
      <BoardItem title={title} />
    </Wrapper>
  );
};
