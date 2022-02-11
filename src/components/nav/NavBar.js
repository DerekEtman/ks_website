import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useState } from "react";

const DrawerNav = (props) => {
  return (
    <List>
      {props.map((linkItem) => {
        return (
          <div key={linkItem.name}>
            <ListItemButton component={Link} to={linkItem.link}>
              <ListItemText primary={linkItem.name.toUpperCase()} />
            </ListItemButton>
          </div>
        );
      })}
    </List>
  );
};

const NavBar = () => {
  const [navAnchor, setNavAnchor] = useState(false);
  //   const open = Boolean(navAnchor);

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

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar varient="dense">
        <Typography sx={{ flexGrow: 1 }}>Kris Simeon</Typography>
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

      <Drawer anchor="top" open={navAnchor} onClose={handleClose}>
        {DrawerNav(menuLinks)}

        <IconButton
          size="large"
          color="inherit"
          aria-label="close menu"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
