import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from 'services/userApi';
import { Pages, SocialLinks, getPath } from 'core/variables/constants';
import { useAuth } from 'shared/hooks/authHooks';
import { IServerError } from 'core/interfaces/dataModels';
import loginBg from 'assets/images/auth/login-bg.jpg';
import GoogleIcon from 'assets/images/google.svg';
import AppleIcon from 'assets/images/apple.svg';
import FacebookIcon from 'assets/images/facebook.svg';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import {
  GlobalStyle,
  Wrapper,
  ImageContainer,
  FormContainer,
  AuthActions,
  CheckBox,
  RememberMeLabel,
  StyledLink,
  Title1,
  Title2,
  LaberForEmail,
  ActionToReg,
  LaberForReg,
  Body1,
  SocialIcons,
  SocialIconWrapper,
  ErrorMessage,
} from './Login.styles';

export const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isTouched, setIsTouched] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

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
    },
    validationSchema: LoginUserSchema,
    onSubmit: async (values, { setSubmitting }) => {
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
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (formik.touched.email || formik.touched.password) {
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
          <img src={loginBg} alt="Background" />
        </ImageContainer>
        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Title1>Log in</Title1>
            <Title2>
              Log in to access the best job opportunities and career tools
            </Title2>
            <LaberForEmail htmlFor="email">Email</LaberForEmail>
            <Input
              type="text"
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
            <LaberForEmail htmlFor="password">Password</LaberForEmail>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant={
                formError
                  ? 'error'
                  : formik.touched.password
                    ? 'active'
                    : 'default'
              }
              children={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ''
              }
              error={!!(formik.touched.password && formik.errors.password)}
            />
            <AuthActions>
              <div>
                <CheckBox type="checkbox" id="rememberMe" name="rememberMe" />
                <RememberMeLabel htmlFor="rememberMe">
                  Remember me
                </RememberMeLabel>
              </div>
              <div>
                <StyledLink to={getPath(Pages.RecoveryPass)}>
                  Forgot your password?
                </StyledLink>
              </div>
            </AuthActions>
            <Button
              type="submit"
              variant={buttonVariant}
              disabled={isButtonDisabled}
            >
              Log in
            </Button>
            {formError && <ErrorMessage>{formError}</ErrorMessage>}{' '}
            <ActionToReg>
              <LaberForReg>Don’t have an account yet? </LaberForReg>
              <StyledLink to={getPath(Pages.Reg)}>Sign up </StyledLink>
            </ActionToReg>
            <Body1>or</Body1>
            <SocialIcons>
              <SocialIconWrapper href={SocialLinks.Google}>
                <img src={GoogleIcon} alt="Google" />
              </SocialIconWrapper>
              <SocialIconWrapper href={SocialLinks.Apple}>
                <img src={AppleIcon} alt="Apple" />
              </SocialIconWrapper>
              <SocialIconWrapper href={SocialLinks.Facebook}>
                <img src={FacebookIcon} alt="Facebook" />
              </SocialIconWrapper>
            </SocialIcons>
          </form>
        </FormContainer>
      </Wrapper>
    </>
  );
};
