import styled from 'styled-components';
import { Colors } from 'core/variables/constants';
import Header from './components/Header';

const Wrapper = styled.div`
  border-radius: 24px;
  height: 100vh;
  background-color: ${Colors.bg_white};
  flex-grow: 16;
  padding: 32px;
  margin: 20px 18px 20px 0;
  height: calc(100vh - 40px);
`;

interface BoardItemProps {
  title: string;
}

const BoardItem: React.FC<BoardItemProps> = ({ title }) => {
  return (
    <Wrapper>
      <Header title={title} />
    </Wrapper>
  );
};

export default BoardItem;
