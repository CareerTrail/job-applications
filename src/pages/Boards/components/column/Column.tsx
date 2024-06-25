import { Box, IconButton, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IBoard } from "store/data";
import Draggable from "react-draggable";

export const Column = ({
  title,
  icon,
  boards,
}: {
  title: string;
  icon: JSX.Element;
  boards: IBoard[];
}) => (
  <Box sx={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "7rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "50%",
        }}
      >
        <IconButton color="inherit">{icon}</IconButton>
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <IconButton color="inherit">
          <MenuOutlinedIcon fontSize={"small"} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography>{boards.length} job(s)</Typography>
      </Box>
    </Box>
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4rem",
        position: "relative",
      }}
    >
      <IconButton
        color="inherit"
        sx={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          bottom: "0.5rem",
          left: "0.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
        onClick={() => console.log("add")}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 0.3s ease-in-out",
            ":hover": {
              borderColor: "grey.800",
              transform: "scale(1.05)",
            },
          }}
        >
          <AddIcon fontSize={"large"} />
        </Paper>
      </IconButton>
    </Box>
    <Box>
      {boards.map((board) => (
        <Draggable>
          <IconButton sx={{ width: "100%", padding: 0 }} key={board.id}>
            <Paper
              elevation={3}
              sx={{
                margin: "0.5rem",
                height: "5rem",
                width: "100%",
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                transition: "all 0.3s ease-in-out",
                ":hover": {
                  borderColor: "grey.800",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                sx={{
                  alignSelf: "center",
                  fontWeight: "bold",
                }}
              >
                {board.position}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.875rem",
                  marginTop: "0.5rem",
                }}
              >
                {board.company.name}
              </Typography>
            </Paper>
          </IconButton>
        </Draggable>
      ))}
    </Box>
  </Box>
);

export default Column;
