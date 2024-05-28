import React, { useState } from "react";
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
import { useAddNewUserMutation } from "services/userApi";
import { Link } from "react-router-dom";
import { Pages } from "core/variables/constants";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export const Registration: React.FC = () => {
  const [addNewUser, { isLoading }] = useAddNewUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const AddUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is Required.")
      .min(1, "First Name is Too Short."),
    lastName: Yup.string()
      .required("Last Name is Required.")
      .min(1, "Last Name is Too Short."),
    email: Yup.string().email().required("Email is Required."),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
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
        setSuccessMessage("You have successfully registered to our site.");
        formik.resetForm();
        navigate(Pages.auth);
      } catch (err) {
        setErrorMessage("Failed to register user. Please try again.");
        console.error("Failed to register user:", err);
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
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            {formik.isSubmitting || isLoading ? "Registering..." : "Register"}
          </Button>
          {errorMessage && (
            <Alert severity="error" onClose={() => setErrorMessage(null)}>
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert severity="success" onClose={() => setSuccessMessage(null)}>
              {successMessage}
            </Alert>
          )}
          <Grid container>
            <Grid item>
              <Link to={Pages.auth}>{"Already have an account? Sign In"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
