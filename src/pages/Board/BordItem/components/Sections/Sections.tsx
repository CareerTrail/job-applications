import React from 'react';
import styled from 'styled-components';
import { Colors } from 'core/variables/constants';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
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

const Sections = () => {
  const sectionData = useSelector(
    (state: RootState) => state.sections.sectionData
  );

  return (
    <Wrapper>
      {sectionData.map((section, index) => (
        <React.Fragment key={section.id}>
          <Column>
            <SectionItem title={section.title} color={section.color} />
          </Column>
          {index < sectionData.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default Sections;
