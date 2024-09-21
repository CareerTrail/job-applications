import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Pages, getPath } from 'core/variables/constants';
import Input from 'components/Input';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import ImageWrapper from 'components/ImageWrapper';
import { useSendResetPasswordEmailMutation } from 'services/userApi';
import {
  GlobalStyle,
  Wrapper,
  ImageContainer,
  FormContainer,
  Header,
  Title,
  SubTitle,
  ErrorMessage,
  ActionToReg,
} from './RecoveryPass.styles';

export const RecoveryPass = () => {
  const [sendResetPasswordEmail] = useSendResetPasswordEmailMutation();
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);
  const [isTouched, setIsTouched] = useState(false);

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ResetPasswordSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await sendResetPasswordEmail({ email: values.email });
        navigate(getPath(Pages.CheckEmail), { state: { email: values.email } });
      } catch (err) {
        setFormError('Error sending reset password email');
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (formik.touched.email) {
      setIsTouched(true);
    }
  }, [formik.touched]);

  const isButtonDisabled = !formik.isValid || formik.isSubmitting || !isTouched;

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ImageContainer>
          <ImageWrapper />
        </ImageContainer>
        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Header>
              <Title>Reset Password</Title>
              <SubTitle>
                Forgot your password? No problem, a reset link will be sent to
                your email.
              </SubTitle>
            </Header>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                name="email"
                placeholder="Your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant={
                  formError
                    ? 'error'
                    : formik.touched.email
                      ? 'active'
                      : 'default'
                }
                children={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ''
                }
                error={!!(formik.touched.email && formik.errors.email)}
              />
            </div>
            <Button
              type="submit"
              variant={isButtonDisabled ? 'disabled' : 'default'}
              disabled={isButtonDisabled}
            >
              Send Reset Link
            </Button>
            {formError && <ErrorMessage>{formError}</ErrorMessage>}
            <ActionToReg>
              <div>Go back to</div>
              <Link to={getPath(Pages.Auth)}>Log in</Link>
            </ActionToReg>
          </form>
        </FormContainer>
      </Wrapper>
    </>
  );
};
