import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useResetPasswordMutation } from 'services/userApi';
import { Pages, getPath } from 'core/variables/constants';
import { IServerError } from 'core/interfaces/dataModels';
import Button from 'components/Button';
import FormHeader from 'components/FormHeader';
import FormField from 'components/FormField';
import ImageWrapper from 'components/ImageWrapper';
import { NEW_PASS } from 'core/variables/locales';
import {
  Wrapper,
  ImageContainer,
  ErrorMessage,
  FormFields,
} from 'assets/styles/CommonStyles';
import { FormContainer } from './NewPass.styles';

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
        navigate(getPath(Pages.PasswordChanged));
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

  const inputFieldPass =
    formik.touched.password && formik.errors.password ? 'error' : 'default';

  const inputFieldPassConfirm =
    formik.touched.confirmPassword && formik.errors.confirmPassword
      ? 'error'
      : 'default';

  return (
    <Wrapper>
      <ImageContainer>
        <ImageWrapper />
      </ImageContainer>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <FormHeader title={NEW_PASS.title} />
          <FormFields>
            <FormField
              label={NEW_PASS.passwordLabel}
              id="password"
              name="password"
              type="password"
              placeholder={NEW_PASS.passwordPlaceholder}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant={inputFieldPass}
              error={!!(formik.touched.password && formik.errors.password)}
              children={formik.touched.password && formik.errors.password}
            />
            <FormField
              label={NEW_PASS.confirmPasswordLabel}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={NEW_PASS.confirmPasswordPlaceholder}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant={inputFieldPassConfirm}
              error={
                !!(
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                )
              }
              children={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
          </FormFields>
          <Button
            type="submit"
            variant={buttonVariant}
            disabled={isButtonDisabled}
          >
            {NEW_PASS.sendButton}
          </Button>

          {formError && (
            <ErrorMessage>{formError || NEW_PASS.defaultError}</ErrorMessage>
          )}
        </form>
      </FormContainer>
    </Wrapper>
  );
};
