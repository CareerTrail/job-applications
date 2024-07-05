/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, TextField } from '@mui/material';
import { BoardMenu } from 'core/variables/constants';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import Column from 'pages/Boards/components/column';
import {
  useGetApplicationsQuery,
  useUpdateApplicationMutation,
} from 'services/applicationApi.ts';
import { Application } from 'services/applicationApi';

export interface ColumnType {
  title: string;
  icon: JSX.Element;
  items: Application[];
}

interface ColumnsType {
  [key: string]: ColumnType;
}

const generateColumns = (data: Application[]): ColumnsType => {
  return {
    WISHLIST: {
      title: BoardMenu.WISHLIST,
      icon: <AutoFixHighOutlinedIcon fontSize="small" />,
      items: data.filter((app) => app.status === 'WISHLIST'),
    },
    APPLIED: {
      title: BoardMenu.APPLIED,
      icon: <InsertDriveFileOutlinedIcon fontSize="small" />,
      items: data.filter((app) => app.status === 'APPLIED'),
    },
    INTERVIEW: {
      title: BoardMenu.INTERVIEW,
      icon: <BusinessCenterOutlinedIcon fontSize="small" />,
      items: data.filter((app) => app.status === 'INTERVIEW'),
    },
    OFFER: {
      title: BoardMenu.OFFER,
      icon: <EmojiEventsOutlinedIcon fontSize="small" />,
      items: data.filter((app) => app.status === 'OFFER'),
    },
  };
};

export const Boards = () => {
  const [columns, setColumns] = useState<ColumnsType | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { data, isLoading } = useGetApplicationsQuery({
    page: 1,
    limit: 10,
    sort: '',
  });

  const [updateApplication] = useUpdateApplicationMutation();

  useEffect(() => {
    if (data) {
      const applications = data.data;
      const newColumns = generateColumns(applications);
      setColumns(newColumns);
    }
  }, [data]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination || !columns) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);

      const updatedItem = { ...removed, status: destination.droppableId };

      destItems.splice(destination.index, 0, updatedItem);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });

      updateApplication({
        id: updatedItem.id,
        data: { status: destination.droppableId },
      })
        .unwrap()
        .then(() => {
          console.log('Application updated successfully');
        })
        .catch((error) => {
          console.error('Failed to update application: ', error);
        });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const handleAddList = () => {
    if (inputValue.trim() === '' || !columns) return;
    const newColumnId = inputValue.trim().toUpperCase();
    const newColumn = {
      title: newColumnId,
      icon: <EmojiEventsOutlinedIcon fontSize="small" />,
      items: [],
    };

    setColumns({
      ...columns,
      [newColumnId]: newColumn,
    });

    setShowInput(false);
    setInputValue('');
  };

  const handleEditColumn = (columnId: string, newTitle: string) => {
    if (!columns) return;
    const updatedColumns = {
      ...columns,
      [columnId]: {
        ...columns[columnId],
        title: newTitle,
      },
    };
    setColumns(updatedColumns);
  };

  const handleDeleteColumn = (columnId: string) => {
    if (!columns) return;
    const { [columnId]: _, ...rest } = columns;
    setColumns(rest);
  };

  if (isLoading || !columns) {
    return <div>Loading...</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          border: '2px solid',
          borderColor: 'divider',
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          height: '100vh',
        }}
      >
        {Object.entries(columns).map(([columnId, column]) => (
          <React.Fragment key={columnId}>
            <Column
              column={column}
              columnId={columnId}
              onEditColumn={handleEditColumn}
              onDeleteColumn={handleDeleteColumn}
            />
            <Divider orientation="vertical" flexItem />
          </React.Fragment>
        ))}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '7rem',
          }}
        >
          {showInput ? (
            <Box>
              <TextField
                label="New List Name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                variant="outlined"
              />
              <Button
                variant="contained"
                onClick={handleAddList}
                sx={{ ml: 2 }}
              >
                Add
              </Button>
              <Button
                variant="outlined"
                onClick={() => setShowInput(false)}
                sx={{ ml: 2 }}
              >
                Cancel
              </Button>
            </Box>
          ) : (
            <Button variant="outlined" onClick={() => setShowInput(true)}>
              + Add List
            </Button>
          )}
        </Box>
      </Box>
    </DragDropContext>
  );
};
