import { useState } from 'react';
import {
  Box,
  Typography,
  Modal,
  Button,
  IconButton,
  Paper,
  TextField,
} from '@mui/material';
import { getPath, Pages } from 'core/variables/constants';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { ColumnType } from 'pages/Boards/Boards';
import AddIcon from '@mui/icons-material/Add';
import { Application } from 'services/applicationApi';
import { useNavigate } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const Column = ({
  column,
  columnId,
  onEditColumn,
  onDeleteColumn,
}: {
  column: ColumnType;
  columnId: string;
  onEditColumn: (columnId: string, newTitle: string) => void;
  onDeleteColumn: (columnId: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<Application | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(column.title);
  const navigate = useNavigate();

  const addButtonClickHandler = () => {
    navigate(getPath(Pages.Applications) + '/add');
  };

  const handleOpen = (board: Application) => {
    setSelectedBoard(board);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBoard(null);
  };

  const handleEdit = () => {
    if (isEditing) {
      onEditColumn(columnId, newTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    onDeleteColumn(columnId);
  };

  return (
    <Box sx={{ flex: 1, p: 2 }}>
      <Box>
        <Box
          display="flex"
          alignItems="center"
          pl={1}
          justifyContent={'center'}
          textAlign={'center'}
        >
          {column.icon}
          {isEditing ? (
            <TextField
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onBlur={handleEdit}
              autoFocus
            />
          ) : (
            <Box ml={1} mr={1} fontWeight="bold">
              {column.title}
            </Box>
          )}
          <IconButton color="inherit" onClick={handleEdit}>
            <EditNoteIcon fontSize={'small'} />
          </IconButton>
          <IconButton color="inherit" onClick={handleDelete}>
            <DeleteForeverIcon fontSize={'small'} />
          </IconButton>
        </Box>
        <Box
          mb={2}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography> {column.items.length} job(s)</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '4rem',
          position: 'relative',
        }}
      >
        <IconButton
          color="inherit"
          sx={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.1rem',
            bottom: '1 rem',
            left: '0.1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
          }}
          onClick={addButtonClickHandler}
        >
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: 'all 0.3s ease-in-out',
              ':hover': {
                borderColor: 'grey.800',
                transform: 'scale(1.05)',
              },
            }}
          >
            <AddIcon fontSize={'large'} />
          </Paper>
        </IconButton>
      </Box>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ minHeight: '100px' }}
          >
            {column.items.map((board, index) => (
              <Draggable key={board.id} draggableId={board.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleOpen(board)}
                    style={{
                      marginBottom: '8px',
                      ...provided.draggableProps.style,
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                        borderRadius: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        cursor: 'pointer',
                        ':hover': {
                          transform: 'scale(1.05)',
                          transition: '0.3s',
                        },
                      }}
                    >
                      <Box fontWeight="bold">{board.position}</Box>
                      <Box fontSize="0.875rem" mt={1}>
                        {board.company.name}
                      </Box>
                    </Box>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            color: 'black',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" component="h2">
            {selectedBoard?.position}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Company: {selectedBoard?.company.name}
          </Typography>
          <Box>
            <Button>edit</Button>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
