import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "services/userApi";
import { Link } from "react-router-dom";
import { Pages } from "core/variables/constants";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Login = () => {
  const [loginUser, { isLoading, isError }] = useLoginUserMutation();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const LoginUserSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginUserSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const { access_token } = await loginUser(values).unwrap();
        localStorage.setItem("accessToken", access_token);
        navigate(Pages.applications);
      } catch (err) {
        console.error("Failed to login user:", err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          width: "fit-content",
        }}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
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
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={formik.isSubmitting || isLoading}
          >
            {formik.isSubmitting || isLoading ? "Signing in..." : "Sign In"}
          </Button>
          {isError && (
            <Alert severity="error">Failed to login. Please try again.</Alert>
          )}
          <Grid container>
            <Grid item xs>
              <Link to={Pages.recoveryPass}>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to={Pages.reg}>{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
