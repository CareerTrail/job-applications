import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSendResetPasswordEmailMutation } from 'services/userApi';
import Button from 'components/Button';
import ImageWrapper from 'components/ImageWrapper';
import FormHeader from 'components/FormHeader';
import { CHECK_EMAIL } from 'core/variables/locales';
import MailIcon from 'assets/images/auth/mail.svg';
import { Wrapper, ImageContainer } from 'assets/styles/CommonStyles';
import { FormContainer } from './CheckEmail.styles';

export const CheckEmail = () => {
  const location = useLocation();
  const email = location.state?.email;
  const [sendResetPasswordEmail] = useSendResetPasswordEmailMutation();

  const [isTimerActive, setIsTimerActive] = useState(true);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setIsTimerActive(false);
    }
  }, [timer]);

  const handleResendEmail = async () => {
    try {
      await sendResetPasswordEmail({ email });
      setTimer(60);
      setIsTimerActive(true);
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
          <div>
            <MailIcon />
          </div>
          <FormHeader
            title={CHECK_EMAIL.title}
            subtitle="We have sent password reset instructions to the following email address:"
            email={email}
          />

          <Button
            type="button"
            onClick={handleResendEmail}
            disabled={isTimerActive}
          >
            {isTimerActive ? `Resend Email (${timer}s)` : 'Resend Email'}
          </Button>
        </form>
      </FormContainer>
    </Wrapper>
  );
};
