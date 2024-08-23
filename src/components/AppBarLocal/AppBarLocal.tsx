import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  TextField,
  InputAdornment,
  Button,
  Badge,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { ReactElement, useState } from 'react';
import { useAuth } from 'shared/hooks/authHooks';
import { LocalMenu, Pages, getPath } from 'core/variables/constants';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ContactsIcon from '@mui/icons-material/Contacts';
import FolderIcon from '@mui/icons-material/Folder';
import MapIcon from '@mui/icons-material/Map';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useNavigate } from 'react-router-dom';

export const AppBarLocal = (): ReactElement | null => {
  const { user } = useAuth();
  const [showClearIcon, setShowClearIcon] = useState('none');
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex');
    setValue(() => event.target.value);
  };

  const handleClick = (): void => {
    setShowClearIcon('none');
    setValue(() => '');
  };
  const showBoard = () => {
    navigate(getPath(Pages.Board));
  };

  if (!user) {
    return null;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '1rem' }}
            >
              Job Search 2024
            </Typography>
            <TextField
              size="small"
              value={value}
              variant="outlined"
              onChange={handleChange}
              placeholder={'Search'}
              sx={{ fontSize: '1rem', width: '50%' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    style={{ display: showClearIcon }}
                    onClick={handleClick}
                  >
                    <ClearIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 2 }} />
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <Badge badgeContent={4} color={'secondary'}>
              <Button
                variant="outlined"
                color="inherit"
                onClick={showBoard}
                startIcon={<AssignmentIcon />}
                sx={{
                  fontSize: '0.75rem',
                  textTransform: 'none',
                  ':hover': {
                    fontSize: '1rem',
                  },
                }}
              >
                {LocalMenu.Board}
              </Button>
            </Badge>
            <Button
              variant="outlined"
              color="inherit"
              href="#"
              startIcon={<BusinessCenterIcon />}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none',
                ':hover': {
                  fontSize: '1rem',
                },
              }}
            >
              {LocalMenu.Activities}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="#"
              startIcon={<ContactsIcon />}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none',
                ':hover': {
                  fontSize: '1rem',
                },
              }}
            >
              {LocalMenu.Contacts}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="#"
              startIcon={<FolderIcon />}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none',
                ':hover': {
                  fontSize: '1rem',
                },
              }}
            >
              {LocalMenu.Documents}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="#"
              startIcon={<MapIcon />}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none',
                ':hover': {
                  fontSize: '1rem',
                },
              }}
            >
              {LocalMenu.Map}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              href="#"
              startIcon={<AnalyticsIcon />}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none',
                ':hover': {
                  fontSize: '1rem',
                },
              }}
            >
              {LocalMenu.Metrics}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
