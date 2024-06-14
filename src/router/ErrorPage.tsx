import { Container, Typography, Button, Box } from "@mui/material";
import {
  useNavigate,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import KeyboardReturnSharpIcon from "@mui/icons-material/KeyboardReturnSharp";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as { statusText: string; message: string };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h5" align="center" color="textPrimary">
          Something went wrong 😢
        </Typography>
        {isRouteErrorResponse(error) ? (
          <Typography variant="body1" align="center">
            {error.data}
          </Typography>
        ) : (
          <Typography variant="body1" align="center" color="textPrimary">
            Unknown error occurred
          </Typography>
        )}
        <Button
          onClick={() => navigate(-1)}
          variant="outlined"
          startIcon={<KeyboardReturnSharpIcon />}
          sx={{ mt: 2 }}
        >
          Go back
        </Button>
      </Box>
    </Container>
  );
};
