import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dashboard, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {ReactElement} from "react";

/**
 * AppMenu component for rendering the application menu.
 *
 * @component AppMenu
 *
 * @returns {ReactElement} The rendered AppMenu component.
 */
export const AppMenu = (): ReactElement => {
  const navigator = useNavigate();
  return (
    <Box
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      role="presentation"
    >
      <nav aria-label="main dashboard">
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigator("/")}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigator("/applications")}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText primary={"Applications"} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
