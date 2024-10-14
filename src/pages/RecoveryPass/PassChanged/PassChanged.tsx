import { useNavigate } from 'react-router-dom';
import { Pages } from 'core/variables/constants';
import Button from 'components/Button';
import ImageWrapper from 'components/ImageWrapper';
import FormHeader from 'components/FormHeader';
import PassChange from 'assets/images/auth/passChanged.svg';
import { Wrapper, ImageContainer } from 'assets/styles/CommonStyles';
import { FormContainer } from './PassChanged.styles';

export const PassChanged = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(Pages.Login);
  };

  return (
    <Wrapper>
      <ImageContainer>
        <ImageWrapper />
      </ImageContainer>
      <FormContainer>
        <form>
          <div>
            <PassChange />
          </div>
          <FormHeader
            title="Password changed"
            subtitle="Your password have been changed succesfully"
          />
          <Button onClick={handleNavigate}>Back to login</Button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};
