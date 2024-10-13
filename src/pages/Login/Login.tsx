import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from 'services/userApi';
import { Pages, getPath } from 'core/variables/constants';
import { useAuth } from 'shared/hooks/authHooks';
import { IServerError } from 'core/interfaces/dataModels';
import { LOGIN_TEXTS } from 'core/variables/locales';
import FormField from 'components/FormField';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import RememberMeCheckbox from 'components/RememberMeCheckbox';
import ImageWrapper from 'components/ImageWrapper';
import SocialIcons from 'components/SocialIcons';
import FormHeader from 'components/FormHeader';
import FormAction from 'components/FormAction';
import {
  Wrapper,
  ImageContainer,
  FormBody,
  FormFields,
  ErrorMessage,
} from 'assets/styles/CommonStyles';
import { FormContainer, AuthActions } from './Login.styles';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const LoginUserSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is Required.'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: LoginUserSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setIsLoading(true);
      setFormError(null);
      try {
        const { access_token } = await loginUser(values).unwrap();
        login(access_token);
        navigate(getPath(Pages.Applications));
      } catch (err) {
        const serverError = err as IServerError;
        const errorResponse =
          serverError.data?.message ||
          'User with these credentials was not found.';
        setFormError(errorResponse);
      } finally {
        setIsLoading(false);
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (formik.touched.email || formik.touched.password) {
      setIsTouched(true);
    }
  }, [formik.touched]);

  const isButtonDisabled =
    !formik.isValid ||
    formik.isSubmitting ||
    !isTouched ||
    !!formError ||
    (!!formError && !isTouched);
  const buttonVariant = isButtonDisabled ? 'disabled' : 'default';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setFormError(null);
  };
  const inputFieldEmail = formError
    ? 'error'
    : formik.touched.email
      ? 'active'
      : 'default';

  const inputFieldPass = formError
    ? 'error'
    : formik.touched.email
      ? 'active'
      : 'default';

  return (
    <Wrapper>
      <ImageContainer>
        <ImageWrapper />
      </ImageContainer>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <FormHeader
              title={LOGIN_TEXTS.title}
              subtitle={LOGIN_TEXTS.subtitle}
            />
            <FormFields>
              <FormField
                label="Email"
                id="email"
                name="email"
                placeholder={LOGIN_TEXTS.emailPlaceholder}
                value={formik.values.email}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                $variant={inputFieldEmail}
                error={!!(formik.touched.email && formik.errors.email)}
                children={formik.touched.email && formik.errors.email}
              />
              <FormField
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder={LOGIN_TEXTS.passwordPlaceholder}
                value={formik.values.password}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                $variant={inputFieldPass}
                error={!!(formik.touched.password && formik.errors.password)}
                children={formik.touched.password && formik.errors.password}
              />
              <AuthActions>
                <RememberMeCheckbox
                  checked={formik.values.rememberMe}
                  onChange={formik.handleChange}
                />
                <div>
                  <Link to={getPath(Pages.RecoveryPass)}>
                    {LOGIN_TEXTS.forgotPassword}
                  </Link>
                </div>
              </AuthActions>
            </FormFields>
            <Button
              type="submit"
              $variant={buttonVariant}
              disabled={isButtonDisabled || isLoading}
            >
              {isLoading ? 'Logging in...' : LOGIN_TEXTS.title}
            </Button>
            {formError && <ErrorMessage>{formError}</ErrorMessage>}
            <FormAction
              helpText={LOGIN_TEXTS.noAccount}
              clickText={LOGIN_TEXTS.signUp}
              redirectPath={getPath(Pages.Reg)}
            />
          </div>
          <FormBody>{LOGIN_TEXTS.or}</FormBody>
          <SocialIcons />
        </form>
      </FormContainer>
    </Wrapper>
  );
};
