import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'shared/hooks/authHooks';
import { useLoginUserMutation } from 'services/userApi';
import { useRegisterUserMutation } from 'services/userApi';
import { Pages } from 'core/variables/constants';
import { IServerError } from 'core/interfaces/dataModels';
import SocialIcons from 'components/SocialIcons';
import ImageWrapper from 'components/ImageWrapper';
import FormField from 'components/FormField';
import Button from 'components/Button/Button';
import {
  ImageContainer,
  FormBody,
  ErrorMessage,
  FormFields,
} from 'assets/styles/CommonStyles';
import { REGISTER_TEXTS } from 'core/variables/locales';
import FormHeader from 'components/FormHeader';
import FormAction from 'components/FormAction';
import { Wrapper, FormContainer, FIO, Text } from './Registration.styles';

interface IRegistrationProps {
  onSuccess?: () => void;
  onError?: (error: unknown) => void;
}

export const Registration: React.FC<IRegistrationProps> = ({
  onSuccess,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
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
        navigate(Pages.Board);

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
        setIsLoading(false);
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
    (!!formError && !isTouched);
  const buttonVariant = isButtonDisabled ? 'disabled' : 'default';

  const inputFiledFirstName =
    formik.touched.firstName && formik.errors.firstName ? 'error' : 'default';

  const inputFiledlastName =
    formik.touched.lastName && formik.errors.lastName ? 'error' : 'default';

  const inputFiledEmail =
    formik.touched.email && formik.errors.email ? 'error' : 'default';

  const inputFiledPass =
    formik.touched.password && formik.errors.password ? 'error' : 'default';

  return (
    <Wrapper>
      <ImageContainer>
        <ImageWrapper />
      </ImageContainer>
      <FormContainer>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <FormHeader
              title={REGISTER_TEXTS.title}
              subtitle={REGISTER_TEXTS.subtitle}
            />
            <FormFields>
              <FIO>
                <FormField
                  label={REGISTER_TEXTS.firstNameLabel}
                  id="firstName"
                  name="firstName"
                  placeholder={REGISTER_TEXTS.firstNamePlaceholder}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    !!(formik.touched.firstName && formik.errors.firstName)
                  }
                  $variant={inputFiledFirstName}
                  children={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : ''
                  }
                />
                <FormField
                  label={REGISTER_TEXTS.lastNameLabel}
                  id="lastName"
                  name="lastName"
                  placeholder={REGISTER_TEXTS.lastNamePlaceholder}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.lastName && formik.errors.lastName)}
                  $variant={inputFiledlastName}
                  children={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : ''
                  }
                />
              </FIO>
              <FormField
                label={REGISTER_TEXTS.emailLabel}
                id="email"
                name="email"
                placeholder={REGISTER_TEXTS.emailPlaceholder}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!(formik.touched.email && formik.errors.email)}
                $variant={inputFiledEmail}
                children={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ''
                }
              />

              <FormField
                label={REGISTER_TEXTS.passwordLabel}
                id="password"
                name="password"
                type="password"
                placeholder={REGISTER_TEXTS.passwordPlaceholder}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                $variant={inputFiledPass}
                error={!!(formik.touched.password && formik.errors.password)}
                children={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ''
                }
              />
              <Text>
                By continuing, you agree to our <Link to="#">Terms</Link> and
                <Link to="#"> Privacy Policy</Link>
              </Text>
            </FormFields>
            <Button
              type="submit"
              $variant={buttonVariant}
              disabled={isButtonDisabled}
            >
              {isLoading ? 'Registering...' : REGISTER_TEXTS.signUpButton}
            </Button>
            {formError && <ErrorMessage>{formError}</ErrorMessage>}
            <FormAction
              helpText={REGISTER_TEXTS.alreadyHaveAccountText}
              clickText={REGISTER_TEXTS.loginLinkText}
              redirectPath={Pages.Login}
            />
          </div>
          <FormBody>{REGISTER_TEXTS.orText}</FormBody>
          <SocialIcons />
        </form>
      </FormContainer>
    </Wrapper>
  );
};
