import React, { useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import { BoardMenu, getPath, Pages } from "core/variables/constants";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { useNavigate } from "react-router-dom";
import { DragDropContext, OnDragEndResponder } from "@hello-pangea/dnd";
import Column from "pages/Boards/components/column";
import { IBoard, initialData } from "store/data";

export const Boards: React.FC = () => {
  const [boards, setBoards] = useState<IBoard[]>(initialData);
  const navigate = useNavigate();

  const addButtonClickHandler = () => {
    navigate(getPath(Pages.Applications) + "/add");
  };

  const onDragEnd: OnDragEndResponder = (result) => {
    console.log("Drag End:", result);
    if (!result.destination) {
      return;
    }
    const { source, destination } = result;
    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      const updatedBoards = Array.from(boards);
      const [movedBoard] = updatedBoards.splice(source.index, 1);
      updatedBoards.splice(destination.index, 0, movedBoard);
      setBoards(updatedBoards);
    }
  };

  const wishlistBoards = boards.filter((board) => board.type === 1);
  const appliedBoards = boards.filter((board) => board.type === 2);
  const interviewBoards = boards.filter((board) => board.type === 3);
  const offerBoards = boards.filter((board) => board.type === 4);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
          icon={<AutoFixHighOutlinedIcon fontSize="small" />}
          boards={wishlistBoards}
        />
        <Divider orientation="vertical" flexItem />
        <Column
          title={BoardMenu.APPLIED}
          icon={<InsertDriveFileOutlinedIcon fontSize="small" />}
          boards={appliedBoards}
        />
        <Divider orientation="vertical" flexItem />
        <Column
          title={BoardMenu.INTERVIEW}
          icon={<BusinessCenterOutlinedIcon fontSize="small" />}
          boards={interviewBoards}
        />
        <Divider orientation="vertical" flexItem />
        <Column
          title={BoardMenu.OFFER}
          icon={<EmojiEventsOutlinedIcon fontSize="small" />}
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
    </DragDropContext>
  );
};
