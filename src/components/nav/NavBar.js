import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Drawer,
  Grid,
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
    // <Grid container>
    // <Grid item xs={0} md={6}>
    // </Grid>
    // <Grid item xs={12} md={6}>
    <List>
      {props.map((linkItem) => {
        return (
          <div key={linkItem.name}>
            <ListItemButton
              component={Link}
              to={linkItem.link}
              alignItems={"center"}
            >
              <ListItemText primary={linkItem.name.toUpperCase()} />
            </ListItemButton>
          </div>
        );
      })}
    </List>
    // </Grid>
    // </Grid>
  );
};

export default function NavBar({location}) {
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

  const pathname = location?.pathname;
  console.log(pathname)

  return (
    <header>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar varient="dense">
          <ListItemButton component={Link} to={"/"}>

            {/* {pathname === "/" && ( */}
              <Typography variant="h3" sx={{ flexGrow: 1, fontWeight: 800 }}>
                Kris Simeon
              </Typography>
            {/* )} */}

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
    </header>
  );
}
