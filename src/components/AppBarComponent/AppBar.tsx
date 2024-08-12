import React, { ReactElement, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  Avatar,
  Menu,
  MenuItem,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import AppMenu from '../Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import { Pages } from 'core/variables/constants';
import { useAuth } from 'shared/hooks/authHooks';

/**
 * AppBarComponent for rendering the application's top app bar.
 *
 * @component AppBarComponent
 *
 * @returns {ReactElement} The rendered AppBarComponent.
 */
export const AppBarComponent = (): ReactElement => {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  /**
   * Handles the click event for the menu button, toggling the menu's open state.
   * @function
   * @private
   */
  const menuButtonClickHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  /**
   * Closes the app menu.
   * @function
   * @private
   */
  const appMenuCloseHandler = () => {
    setIsMenuOpen(false);
  };

  /**
   * Returns the dashboard item name based on the current pathname.
   * @function
   * @private
   * @returns {string} The dashboard item name.
   */
  const getDashboardItemName = (): string => {
    return pathname === '/'
      ? 'MAIN'
      : pathname.slice(1, pathname.length).toUpperCase();
  };

  /**
   * Handles opening the user menu.
   * @function
   * @private
   */
  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Handles closing the user menu.
   * @function
   * @private
   */
  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  /**
   * Handles user logout.
   * @function
   * @private
   */
  const handleLogout = () => {
    logout();
    handleUserMenuClose();
    navigate(getPath(Pages.Auth));
  };

  const showProfile = () => {
    handleUserMenuClose();
    navigate(getPath(Pages.Profile));
  };

  const showApplications = () => {
    handleUserMenuClose();
    navigate(getPath(Pages.Applications));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={menuButtonClickHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {getDashboardItemName()}
          </Typography>
          {user ? (
            <>
              <IconButton onClick={handleUserMenuOpen} color="inherit">
                <Avatar />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleUserMenuClose}
              >
                <MenuItem onClick={showProfile}>Your profile</MenuItem>
                <MenuItem onClick={showApplications}>
                  Your applications
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" href={getPath(Pages.Reg)}>
                Sign up
              </Button>
              <Button color="inherit" href={getPath(Pages.Auth)}>
                Sign in
              </Button>
            </>
          )}
        </Toolbar>
        <Drawer
          anchor={'left'}
          open={isMenuOpen}
          onClose={appMenuCloseHandler}
          onClick={appMenuCloseHandler}
        >
          <AppMenu />
        </Drawer>
      </AppBar>
    </Box>
  );
};
