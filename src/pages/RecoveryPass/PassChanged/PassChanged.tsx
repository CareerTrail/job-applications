import { useNavigate } from 'react-router-dom';
import { Pages, getPath } from 'core/variables/constants';
import Button from 'components/Button';

import ImageWrapper from 'components/ImageWrapper';
import {
  GlobalStyle,
  Wrapper,
  ImageContainer,
  FormContainer,
  Header,
  Title,
  SubTitle,
} from './PassChanged.styles';

export const PassChanged = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(getPath(Pages.Auth));
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ImageContainer>
          <ImageWrapper />
        </ImageContainer>
        <FormContainer>
          <form>
            <Header>
              <Title>Password changed</Title>
              <SubTitle>Your password have been changed succesfully</SubTitle>
            </Header>

            <Button onClick={handleNavigate}>Back to login</Button>
          </form>
        </FormContainer>
      </Wrapper>
    </>
  );
};
