import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Pages, getPath } from 'core/variables/constants';
import Button from 'components/Button';
import ImageWrapper from 'components/ImageWrapper';
import { useSendResetPasswordEmailMutation } from 'services/userApi';
import { RECOVERY_PASS } from 'core/variables/locales';
import FormHeader from 'components/FormHeader';
import FormField from 'components/FormField';
import FormAction from 'components/FormAction';
import {
  Wrapper,
  ImageContainer,
  ErrorMessage,
  FormFields,
} from 'assets/styles/CommonStyles';
import { FormContainer } from './RecoveryPass.styles';

export const RecoveryPass = () => {
  const [sendResetPasswordEmail] = useSendResetPasswordEmailMutation();
  const navigate = useNavigate();
  const [formError, setFormError] = useState<string | null>(null);

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ResetPasswordSchema,
    validateOnChange: true,
    validateOnBlur: true,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setFormError(null);
  };

  const isButtonDisabled =
    !formik.values.email ||
    !formik.isValid ||
    formik.isSubmitting ||
    !!formError;

  const inputFieldEmail = formError
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
          <FormHeader
            title={RECOVERY_PASS.title}
            subtitle={RECOVERY_PASS.subTitle}
          />
          <FormFields>
            <FormField
              label="Email"
              id="email"
              name="email"
              placeholder={RECOVERY_PASS.emailPlaceholder}
              value={formik.values.email}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              variant={inputFieldEmail}
              error={!!(formik.touched.email && formik.errors.email)}
              children={formik.touched.email && formik.errors.email}
            />
          </FormFields>
          <Button
            type="submit"
            variant={isButtonDisabled ? 'disabled' : 'default'}
            disabled={isButtonDisabled}
          >
            {RECOVERY_PASS.sendLinkButton}
          </Button>
          {formError && <ErrorMessage>{formError}</ErrorMessage>}
          <FormAction
            helpText={RECOVERY_PASS.goBackText}
            clickText={RECOVERY_PASS.loginLinkText}
            redirectPath={getPath(Pages.Login)}
          />
        </form>
      </FormContainer>
    </Wrapper>
  );
};
