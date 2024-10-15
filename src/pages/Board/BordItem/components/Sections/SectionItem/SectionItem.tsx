import React, { useState } from 'react';
import styled from 'styled-components';
import EditIcon from 'assets/images/components/edit.svg';
import { Colors } from 'core/variables/constants';
import AddPlus from 'components/Button/AddPlus';
import { ButtonColor } from 'components/Button/AddPlus/AddPlus';
import Vacancy from 'pages/Board/BordItem/components/Vacancy';
import AddJobModal from 'components/AddVacancyModal';
import { Droppable } from '@hello-pangea/dnd';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { MODAL_VALUES } from 'core/variables/locales';

interface SectionItemProps {
  id: number;
  title: string;
  color: ButtonColor;
}

const Wrapper = styled.div`
  position: relative;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-size: 18px;
  color: ${Colors.secondary};
  margin: 0;
`;

const EditIconWrapper = styled.a`
  position: absolute;
  top: 10px;
  right: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Btn = styled.div`
  margin-top: 20px;
`;

const VacancyWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionItem: React.FC<SectionItemProps> = ({ id, title, color }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentId, setCurrentId] = useState<number>(id);

  const vacanciesData = useSelector(
    (state: RootState) => state.vacancies.vacanciesData
  );

  const vacancyCount = vacanciesData.filter(
    (vacancy) => vacancy.sectionId === id
  ).length;

  const handleOpenModal = () => {
    setCurrentId(id);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Wrapper>
      <div>
        <EditIconWrapper href="#">
          <EditIcon />
        </EditIconWrapper>
        <Title>{title}</Title>
        <SubTitle>{vacancyCount} item(s)</SubTitle>
      </div>
      <Btn>
        <AddPlus color={color} onClick={handleOpenModal} />
      </Btn>
      <Droppable droppableId={id.toString()}>
        {(provided) => (
          <VacancyWrapper ref={provided.innerRef} {...provided.droppableProps}>
            <Vacancy color={color} sectionId={id} />
            {provided.placeholder}
          </VacancyWrapper>
        )}
      </Droppable>

      {isModalVisible && (
        <AddJobModal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          sectionId={currentId}
          title={MODAL_VALUES.ADD_JOB}
        />
      )}
    </Wrapper>
  );
};

export default SectionItem;
