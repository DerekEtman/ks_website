import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useStaticQuery, graphql, Link } from "gatsby";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

const DrawerNav = (props) => {
  return (
    <List>
      {props.map((linkItem) => {
        return (
          <ListItem button >
            <Link to={linkItem.link} key={linkItem.name}>
              {linkItem.name}
            </Link>
          </ListItem>
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
        <Typography>Kris Simeon</Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="top" open={navAnchor} onClose={handleClose}>
        {DrawerNav(menuLinks)}
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
