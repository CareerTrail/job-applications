import React from 'react';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { updateVacancySection } from 'features/board/vacancy/vacancySlice';
import SectionItem from './SectionItem';

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  height: calc(100vh - 170px);
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
`;

const Divider = styled.div`
  width: 1px;
  background-color: ${Colors.tertiary_stroke};
  height: 100%;
`;

const AddButton = styled.button<{ $isCollapsed: boolean }>`
  flex: 1;
  color: ${Colors.primary};
  border: none;
  cursor: pointer;
  position: absolute;
  font-size: 20px;
  top: 10vh;
  &:hover {
    transform: scale(1.1);
  }
`;

type SectionProps = {
  isCollapsed: boolean;
};

const Sections: React.FC<SectionProps> = ({ isCollapsed }) => {
  const sectionData = useSelector(
    (state: RootState) => state.sections.sectionData
  );
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const vacancyId = Number(result.draggableId);
      const newSectionId = Number(destination.droppableId);

      dispatch(updateVacancySection({ id: vacancyId, newSectionId }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        {sectionData.map((section) => (
          <React.Fragment key={section.id}>
            <Column>
              <SectionItem
                title={section.title}
                id={section.id}
                color={section.color}
              />
            </Column>
            <Divider />
          </React.Fragment>
        ))}
        {isCollapsed && (
          <Column>
            <AddButton $isCollapsed={isCollapsed}>+ Add List</AddButton>
          </Column>
        )}
      </Wrapper>
    </DragDropContext>
  );
};

export default Sections;
