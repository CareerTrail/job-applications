import SideBar from 'components/SideBar';
import BoardItem from 'pages/Board/BordItem';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';

const Wrapper = styled.div`
  background-color: ${Colors.tertiary_stroke};
  display: flex;
`;

export const Board = () => {
  return (
    <Wrapper>
      <SideBar />
      <BoardItem />
    </Wrapper>
  );
};
