import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonColor } from 'components/Button/AddPlus/AddPlus';
import { Colors } from 'core/variables/constants';
import Active from 'assets/images/components/activeStar.svg';
import Simple from 'assets/images/components/simpleStar.svg';
import EditIcon from 'assets/images/components/edit.svg';
import WorkIcon from 'assets/images/components/workIcon.svg';

const Wrapper = styled.div<{ color: ButtonColor }>`
  border-left: 1px solid ${({ color }) => Colors[color]};
  aspect-ratio: 2.86;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DescriptionVac = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  h3 {
    font-size: 18px;
    color: ${Colors.primary};
  }

  p {
    font-size: 14px;
    color: ${Colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 4px;

    svg {
      width: 12px;
      height: 12px;
      transform: translateY(-2px);
    }
  }
`;

const MoveVac = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const AddEdit = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const ActiveIconWrapper = styled.a``;
const EditIconWrapper = styled.a``;

interface VariantProps {
  color: ButtonColor;
}

const Vacancy: React.FC<VariantProps> = ({ color }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Wrapper color={color}>
      <DescriptionVac>
        <h3>Designer</h3>
        <p>
          <WorkIcon />
          <div>Epam</div>
        </p>
      </DescriptionVac>
      <MoveVac>
        <AddEdit onClick={toggleEdit}>
          {isEditing ? (
            <ActiveIconWrapper href="#">
              <Simple />
            </ActiveIconWrapper>
          ) : (
            <ActiveIconWrapper href="#">
              <Active />
            </ActiveIconWrapper>
          )}
          <EditIconWrapper href="#">
            <EditIcon />
          </EditIconWrapper>
        </AddEdit>
        <div>2d</div>
      </MoveVac>
    </Wrapper>
  );
};

export default Vacancy;
