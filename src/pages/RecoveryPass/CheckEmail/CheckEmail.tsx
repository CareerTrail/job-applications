import { useLocation } from 'react-router-dom';
import { useSendResetPasswordEmailMutation } from 'services/userApi';
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
} from './CheckEmail.styles';

export const CheckEmail = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [sendResetPasswordEmail] = useSendResetPasswordEmailMutation();

  const handleResendEmail = async () => {
    try {
      await sendResetPasswordEmail({ email });
    } catch (err) {
      console.error('Error resending reset email:', err);
    }
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
              <Title>Check your email</Title>
              <SubTitle>
                We have sent password reset instructions to the following email
                address: {email}. Please make sure you received the email.
              </SubTitle>
            </Header>

            <Button type="button" onClick={handleResendEmail}>
              Resend Email
            </Button>
          </form>
        </FormContainer>
      </Wrapper>
    </>
  );
};
