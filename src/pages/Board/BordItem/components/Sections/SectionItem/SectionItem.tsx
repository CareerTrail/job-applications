import React, { useState } from 'react';
import styled from 'styled-components';
import EditIcon from 'assets/images/components/edit.svg';
import { Colors } from 'core/variables/constants';
import AddPlus from 'components/Button/AddPlus';
import { ButtonColor } from 'components/Button/AddPlus/AddPlus';
import Vacancy from 'pages/Board/BordItem/components/Vacancy';
import AddJobModal from 'components/AddVacancyModal';

interface SectionItemProps {
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

const SectionItem: React.FC<SectionItemProps> = ({ title, color }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
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
        <SubTitle>item</SubTitle>
      </div>
      <Btn>
        <AddPlus color={color} onClick={handleOpenModal} />
      </Btn>
      <VacancyWrapper>
        <Vacancy color={color} />
      </VacancyWrapper>

      <AddJobModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </Wrapper>
  );
};

export default SectionItem;
