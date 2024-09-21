import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from 'services/userApi';
import { Pages, SocialLinks, getPath } from 'core/variables/constants';
import { useAuth } from 'shared/hooks/authHooks';
import { IServerError } from 'core/interfaces/dataModels';
import GoogleIcon from 'assets/images/google.svg';
import AppleIcon from 'assets/images/apple.svg';
import FacebookIcon from 'assets/images/facebook.svg';
import Input from 'components/Input';
import Button from 'components/Button';
import { Link } from 'react-router-dom';
import ImageWrapper from 'components/ImageWrapper';
import {
  GlobalStyle,
  Wrapper,
  ImageContainer,
  FormContainer,
  Header,
  Title,
  SubTitle,
  AuthActions,
  RememberMe,
  ErrorMessage,
  ActionToReg,
  Body1,
  SocialIcons,
  SocialIconWrapper,
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
          <ImageWrapper />
        </ImageContainer>
        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <Header>
              <Title>Log in</Title>
              <SubTitle>
                Log in to access the best job opportunities and career tools
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
            <div>
              <label htmlFor="password">Password</label>
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
            </div>
            <AuthActions>
              <RememberMe>
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember me</label>
              </RememberMe>
              <div>
                <Link to={getPath(Pages.RecoveryPass)}>
                  Forgot your password?
                </Link>
              </div>
            </AuthActions>
            <Button
              type="submit"
              variant={buttonVariant}
              disabled={isButtonDisabled}
            >
              Log in
            </Button>
            {formError && <ErrorMessage>{formError}</ErrorMessage>}
            <ActionToReg>
              <div>Don’t have an account yet? </div>
              <Link to={getPath(Pages.Reg)}>Sign up </Link>
            </ActionToReg>
            <Body1>or</Body1>
            <SocialIcons>
              <SocialIconWrapper href={SocialLinks.Google}>
                <GoogleIcon />
              </SocialIconWrapper>
              <SocialIconWrapper href={SocialLinks.Apple}>
                <AppleIcon />
              </SocialIconWrapper>
              <SocialIconWrapper href={SocialLinks.Facebook}>
                <FacebookIcon />
              </SocialIconWrapper>
            </SocialIcons>
          </form>
        </FormContainer>
      </Wrapper>
    </>
  );
};
