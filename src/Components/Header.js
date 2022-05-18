import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo1 from "../Images/ics.png";
import avatar1 from "../Images/avatar.png";

const Header = () => {
  return (
    <AppBar position="sticky" style={{backgroundColor: "#134B8A"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: "space-between" }}>
            <Box sx={{ flexGrow: 0 }}>
              <img
                src={logo1}
                alt=""
                style={{ width: "45px", height: "45px" }}
              />
            </Box>
            <Box
              sx={{ flexGrow: 0 }}
              mx={2}
            >
              <Badge color="error" variant="dot">
                <NotificationsIcon/>
              </Badge>
              <IconButton sx={{ p: 1 }}>
                <Avatar alt="Akkrapol" src={avatar1} />
              </IconButton>

            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
