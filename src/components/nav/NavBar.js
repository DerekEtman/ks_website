import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import { textAlign } from "@mui/system";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";

const DrawerNav = (menuLinks) => {
  return (
    <List>
      {menuLinks.map((linkItem) => {
        return (
          <div key={linkItem.name}>
            <ListItemButton component={Link} to={linkItem.link}>
              <ListItemText
                primary={linkItem.name.toUpperCase()}
                // inset={true}
                sx={{ textAlign: "center", padding: ".5rem 2.5rem " }}
              />
            </ListItemButton>
          </div>
        );
      })}
    </List>
  );
};

export default function NavBar({ location }) {
  const [navAnchor, setNavAnchor] = useState(false);

  const handleClick = (event) => {
    setNavAnchor(true);
  };

  const handleClose = () => {
    setNavAnchor(false);
  };

  const {
    site: {
      siteMetadata: { menuLinks, title, siteUrl },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
          title
          siteUrl
        }
      }
    }
  `);

  const pathname = location?.pathname;

  return (
    <header>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar varient="dense">
          <ListItemButton component={Link} to={"/"}>
            <Typography variant="h3" sx={{ flexGrow: 1, fontWeight: 800 }}>
              Kris Simeon
            </Typography>
          </ListItemButton>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <SwipeableDrawer anchor="right" open={navAnchor} onClose={handleClose}>
          <IconButton
            size="small"
            color="inherit"
            aria-label="close menu"
            onClick={handleClose}
            disableRipple={true}
          >
            <CloseIcon />
          </IconButton>
          <Divider />

          {DrawerNav(menuLinks)}
        </SwipeableDrawer>
      </AppBar>
    </header>
  );
}
