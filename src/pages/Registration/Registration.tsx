import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/authHooks';
import { useLoginUserMutation } from 'services/userApi';
import { useRegisterUserMutation } from 'services/userApi';
import { Pages, SocialLinks, getPath } from 'core/variables/constants';
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
  FIO,
} from './Registration.styles';

interface IRegistrationProps {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const Registration: React.FC<IRegistrationProps> = ({
  onSuccess,
  onError,
}) => {
  const [addNewUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isTouched, setIsTouched] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const AddUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is Required.')
      .min(1, 'First Name is Too Short.'),
    lastName: Yup.string()
      .required('Last Name is Required.')
      .min(1, 'Last Name is Too Short.'),
    email: Yup.string().email().required('Email is Required.'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: AddUserSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await addNewUser({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        }).unwrap();
        onSuccess?.();
        const { access_token } = await loginUser(values).unwrap();
        login(access_token);
        navigate(getPath(Pages.Applications));

        formik.resetForm();
      } catch (err) {
        const serverError = err as IServerError;
        const errorResponse =
          serverError.data?.message ||
          'Failed to register user. Please try again.';
        setFormError(errorResponse);
        console.error('Failed to register user:', serverError);
        onError?.(err);
      } finally {
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
            <Title1>Sign Up</Title1>
            <Title2>
              Sign up now to access top job opportunities and career tools
            </Title2>
            <FIO>
              <div>
                <LaberForEmail htmlFor="firstName">First Name</LaberForEmail>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your first name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    !!(formik.touched.firstName && formik.errors.firstName)
                  }
                  variant={
                    formik.touched.firstName && formik.errors.firstName
                      ? 'error'
                      : 'default'
                  }
                  children={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : ''
                  }
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <LaberForEmail htmlFor="lastName">Last Name</LaberForEmail>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.lastName && formik.errors.lastName)}
                  variant={
                    formik.touched.lastName && formik.errors.lastName
                      ? 'error'
                      : 'default'
                  }
                  children={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : ''
                  }
                  style={{ width: '100%' }}
                />
              </div>
            </FIO>
            <LaberForEmail htmlFor="email">Email</LaberForEmail>
            <Input
              type="text"
              id="email"
              name="email"
              placeholder="Your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.email && formik.errors.email)}
              variant={
                formik.touched.email && formik.errors.email
                  ? 'error'
                  : 'default'
              }
              children={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ''
              }
              style={{ width: '100%' }}
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
              error={!!(formik.touched.password && formik.errors.password)}
              variant={
                formik.touched.password && formik.errors.password
                  ? 'error'
                  : 'default'
              }
              children={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ''
              }
              style={{ width: '100%' }}
            />
            <div>By continuing, you agree to our Terms and Privacy Policy</div>
            <Button
              type="submit"
              variant={buttonVariant}
              disabled={isButtonDisabled}
            >
              Sign Up
            </Button>
            {formError && <ErrorMessage>{formError}</ErrorMessage>}
            <ActionToReg>
              <LaberForReg>Already have an account?</LaberForReg>
              <StyledLink to={getPath(Pages.Auth)}>Log in</StyledLink>
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
