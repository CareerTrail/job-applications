import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import AppMenu from "../Menu";
import {ReactElement, useState} from "react";
import { useLocation } from "react-router-dom";
import { Pages } from "core/variables/constants";

/**
 * AppBarComponent for rendering the application's top app bar.
 *
 * @component AppBarComponent
 *
 * @returns {ReactElement} The rendered AppBarComponent.
 */
export const AppBarComponent = (): ReactElement => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    return pathname === "/"
      ? "MAIN"
      : pathname.slice(1, pathname.length).toUpperCase();
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
          <Button color="inherit" href={Pages.reg}>Sign up</Button>
          <Button color="inherit" href={Pages.auth}>Sign in</Button>
        </Toolbar>
        <Drawer anchor={"left"} open={isMenuOpen} onClose={appMenuCloseHandler}>
          <AppMenu />
        </Drawer>
      </AppBar>
    </Box>
  );
};
