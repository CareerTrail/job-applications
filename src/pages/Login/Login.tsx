// Login.tsx
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from 'services/userApi';
import { Pages, getPath } from 'core/variables/constants';
import { useAuth } from 'hooks/authHooks';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
          'Failed to register user. Please try again.';
        setErrorMessage(errorResponse);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const isButtonDisabled = !formik.isValid || formik.isSubmitting;

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
              backgroundColor="bg_white"
              type="text"
              id="email"
              name="email"
              borderColor="tertiary_stroke"
              borderWidth="1px"
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            )}
            <LaberForEmail htmlFor="password">Password</LaberForEmail>
            <Input
              backgroundColor="bg_white"
              borderColor="tertiary_stroke"
              borderWidth="1px"
              isPassword
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            )}
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
              backgroundColor="accent"
              color="bg_white"
              type="submit"
              isDisabled={isButtonDisabled}
            />
            <ActionToReg>
              <LaberForReg>Don’t have an account yet? </LaberForReg>
              <StyledLink to={getPath(Pages.Reg)}>Sign up </StyledLink>
            </ActionToReg>
            <Body1>or</Body1>
            <SocialIcons>
              <SocialIconWrapper href="https://google.com">
                <img src={GoogleIcon} alt="Google" />
              </SocialIconWrapper>
              <SocialIconWrapper href="https://apple.com">
                <img src={AppleIcon} alt="Apple" />
              </SocialIconWrapper>
              <SocialIconWrapper href="https://facebook.com">
                <img src={FacebookIcon} alt="Facebook" />
              </SocialIconWrapper>
            </SocialIcons>
          </form>
        </FormContainer>
      </Wrapper>
    </>
  );
};
