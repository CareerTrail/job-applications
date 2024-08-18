import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useLoginUserMutation } from 'services/userApi';
import { Pages, getPath } from 'core/variables/constants';
import { useAuth } from 'hooks/authHooks';
import { IServerError } from 'core/interfaces/dataModels';
import styles from './Login.module.css';
import loginBg from 'assets/images/auth/login-bg.jpg';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

export const Login = () => {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <img src={loginBg} alt="Background"></img>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <Input
            backgroundColor="bg_white"
            borderColor="tertiary_stroke"
            borderRadius="12px"
            borderStyle="solid"
            borderWidth="1px"
            height="52px"
            padding="16px"
            placeholder="Your email"
            width="400px"
          />
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          /> */}

          <Input
            backgroundColor="bg_white"
            borderColor="tertiary_stroke"
            borderRadius="12px"
            borderStyle="solid"
            borderWidth="1px"
            height="52px"
            isPassword
            padding="16px"
            placeholder="Password"
            width="400px"
          />
          {/* <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          /> */}

          <Button
            color="accent"
            fontSize="16px"
            fontWeight="500"
            gap="8px"
            height="52px"
            padding="16px 207px"
            radius="12px"
            textTransform="none"
            width="400px"
          />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={formik.isSubmitting || isLoading}
          >
            {formik.isSubmitting || isLoading ? 'Signing in...' : 'Sign In'}
          </Button> */}

          <div>
            <div>
              <Link to={getPath(Pages.RecoveryPass)}>Forgot password?</Link>
            </div>
            <div>
              <Link to={getPath(Pages.Reg)}>
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
