import React from 'react';
import styled from 'styled-components';
import { ButtonColor } from 'components/Button/AddPlus/AddPlus';
import { Colors } from 'core/variables/constants';
import Active from 'assets/images/components/activeStar.svg';
import Simple from 'assets/images/components/simpleStar.svg';
import EditIcon from 'assets/images/components/edit.svg';
import WorkIcon from 'assets/images/components/workIcon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import { toggleLike } from 'features/board/vacancy/vacancySlice';

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

interface VacancyProps {
  color: ButtonColor;
  sectionId: number;
}

const Vacancy: React.FC<VacancyProps> = ({ color, sectionId }) => {
  const vacanciesData = useSelector(
    (state: RootState) => state.vacancies.vacanciesData
  );
  const dispatch = useDispatch();

  const filteredVacancies = vacanciesData.filter(
    (vacancy) => vacancy.sectionId === sectionId
  );

  const timeSince = (dateString: string) => {
    const date = new Date(dateString); // Преобразуем строку в Date
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval;

    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    } else if (seconds < 3600) {
      interval = Math.floor(seconds / 60);
      return `${interval} minute${interval !== 1 ? 's' : ''} ago`;
    } else if (seconds < 86400) {
      interval = Math.floor(seconds / 3600);
      return `${interval} hour${interval !== 1 ? 's' : ''} ago`;
    } else if (seconds < 2592000) {
      interval = Math.floor(seconds / 86400);
      return `${interval} day${interval !== 1 ? 's' : ''} ago`;
    } else {
      interval = Math.floor(seconds / 2592000);
      return `${interval} month${interval !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <>
      {filteredVacancies.map((vacancy) => (
        <Wrapper key={vacancy.id} color={color}>
          <DescriptionVac>
            <h3>{vacancy.jobTitle}</h3>
            <p>
              <WorkIcon />
              <span>{vacancy.company}</span>
            </p>
          </DescriptionVac>
          <MoveVac>
            <AddEdit onClick={() => dispatch(toggleLike(vacancy.id))}>
              {vacancy.like ? (
                <ActiveIconWrapper href="#">
                  <Active />
                </ActiveIconWrapper>
              ) : (
                <ActiveIconWrapper href="#">
                  <Simple />
                </ActiveIconWrapper>
              )}
              <EditIconWrapper href="#">
                <EditIcon />
              </EditIconWrapper>
            </AddEdit>
            {timeSince(vacancy.createdDate)}
          </MoveVac>
        </Wrapper>
      ))}
    </>
  );
};

export default Vacancy;
