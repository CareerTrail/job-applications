import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSendResetPasswordEmailMutation } from "services/userApi";

export const RecoveryPass: React.FC = () => {
  const [sendResetPasswordEmail, { isLoading, isError, isSuccess }] =
    useSendResetPasswordEmailMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        await sendResetPasswordEmail({ email: values.email }).unwrap();
      } catch (err) {
        console.error("Failed to send reset email:", err);
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
        }}
      >
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={formik.isSubmitting || isLoading}
          >
            {formik.isSubmitting || isLoading
              ? "Sending..."
              : "Send Reset Link"}
          </Button>
          {isError && (
            <Alert severity="error">
              Failed to send reset link. Please try again.
            </Alert>
          )}
          {isSuccess && (
            <Alert severity="success">
              Reset link sent! Please check your email.
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};
