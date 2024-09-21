import { useLocation } from 'react-router-dom';
import { useSendResetPasswordEmailMutation } from 'services/userApi';
import Button from 'components/Button';
import ImageWrapper from 'components/ImageWrapper';
import FormHeader from 'components/FormHeader';
import { CHECK_EMAIL } from 'core/variables/locales';
import { Wrapper, ImageContainer, FormContainer } from './CheckEmail.styles';

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
    <Wrapper>
      <ImageContainer>
        <ImageWrapper />
      </ImageContainer>
      <FormContainer>
        <form>
          <FormHeader
            title={CHECK_EMAIL.title}
            subtitle={`We have sent password reset instructions to the following email address:`}
            email={email}
          />

          <Button type="button" onClick={handleResendEmail}>
            Resend Email
          </Button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};
