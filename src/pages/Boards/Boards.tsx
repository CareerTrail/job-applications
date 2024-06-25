import { Box, Button, Divider } from "@mui/material";
import { BoardMenu, getPath, Pages } from "core/variables/constants";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IBoard, initialData } from "store/data";
import Column from "pages/Boards/components/column";

export const Boards = () => {
  const [boards] = useState<IBoard[]>(initialData);
  const navigate = useNavigate();

  const addButtonClickHandler = () => {
    navigate(getPath(Pages.Applications) + "/add");
  };

  const wishlistBoards = boards.filter((board) => board.type === 1);
  const appliedBoards = boards.filter((board) => board.type === 2);
  const interviewBoards = boards.filter((board) => board.type === 3);
  const offerBoards = boards.filter((board) => board.type === 4);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        border: "2px solid",
        borderColor: "divider",
        borderRadius: 1,
        bgcolor: "background.paper",
        color: "text.secondary",
        height: "100vh",
      }}
    >
      <Column
        title={BoardMenu.WISHLIST}
        icon={<AutoFixHighOutlinedIcon fontSize={"small"} />}
        boards={wishlistBoards}
      />
      <Divider orientation="vertical" flexItem />
      <Column
        title={BoardMenu.APPLIED}
        icon={<InsertDriveFileOutlinedIcon fontSize={"small"} />}
        boards={appliedBoards}
      />
      <Divider orientation="vertical" flexItem />
      <Column
        title={BoardMenu.INTERVIEW}
        icon={<BusinessCenterOutlinedIcon fontSize={"small"} />}
        boards={interviewBoards}
      />
      <Divider orientation="vertical" flexItem />
      <Column
        title={BoardMenu.OFFER}
        icon={<EmojiEventsOutlinedIcon fontSize={"small"} />}
        boards={offerBoards}
      />
      <Divider orientation="vertical" flexItem />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "7rem",
        }}
      >
        <Button variant="outlined" onClick={addButtonClickHandler}>
          + Add List
        </Button>
      </Box>
    </Box>
  );
};
