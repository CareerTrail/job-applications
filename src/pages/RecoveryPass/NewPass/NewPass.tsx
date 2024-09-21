import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useResetPasswordMutation } from 'services/userApi';
import { Pages, getPath } from 'core/variables/constants';
import { IServerError } from 'core/interfaces/dataModels';
import Input from 'components/Input';
import Button from 'components/Button';
import ImageWrapper from 'components/ImageWrapper';
import {
  GlobalStyle,
  Wrapper,
  ImageContainer,
  FormContainer,
  Header,
  Title,
  ErrorMessage,
  LaberForEmail,
} from './NewPass.styles';

export const NewPass = () => {
  const [resetPassword] = useResetPasswordMutation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [isTouched, setIsTouched] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const NewPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/(?=.*[0-9])/, 'Password must contain a number'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Please confirm your password'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: NewPasswordSchema,
    onSubmit: async (values, { setSubmitting }) => {
      if (!token) {
        setFormError(
          'Token is missing. Please use the reset link from your email.'
        );
        setSubmitting(false);
        return;
      }

      try {
        await resetPassword({
          code: token,
          password: values.password,
        }).unwrap();
        navigate(getPath(Pages.Auth));
      } catch (err) {
        const serverError = err as IServerError;
        const errorResponse =
          serverError.data?.message || 'Failed to reset password.';
        setFormError(errorResponse);
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (formik.touched.password || formik.touched.confirmPassword) {
      setIsTouched(true);
    }
  }, [formik.touched]);

  const isButtonDisabled = !formik.isValid || formik.isSubmitting || !isTouched;
  const buttonVariant = isButtonDisabled ? 'disabled' : 'default';

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
            </Header>

            <LaberForEmail htmlFor="password">New Password</LaberForEmail>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Your new password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant={
                formik.touched.password && formik.errors.password
                  ? 'error'
                  : 'default'
              }
              children={formik.touched.password && formik.errors.password}
              error={!!(formik.touched.password && formik.errors.password)}
            />

            <LaberForEmail htmlFor="confirmPassword">
              Confirm New Password
            </LaberForEmail>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your new password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? 'error'
                  : 'default'
              }
              children={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              error={
                !!(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
              }
            />

            <Button
              type="submit"
              variant={buttonVariant}
              disabled={isButtonDisabled}
            >
              Reset your password
            </Button>

            {formError && <ErrorMessage>{formError}</ErrorMessage>}
          </form>
        </FormContainer>
      </Wrapper>
    </>
  );
};
