import { Grid, Icon, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { Instagram } from "@mui/icons-material";

const footerContainer = {
  minHeight: "5vh",
  padding: "0 24px",
};

const copyrightText = {
  width: "100%",
};

let currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer style={footerContainer}>
      <Grid container spacing={2}>
        <Grid item xs={10} style={copyrightText}>
          <Typography variant="p">
            ©{currentYear} Kris Simeon. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs />

        <Grid item xs={1}>
          <Link
            href="https://www.facebook.com/krissimeonmusic/"
            target="_blank"
          >
            <FacebookIcon color="disabled" />
          </Link>
          <Link
            href="https://twitter.com/krissimeonmusic"
            class="twitter"
            target="_blank"
          >
            <TwitterIcon color="disabled" />
          </Link>
          <Link
            href="https://www.instagram.com/krissimeonmusic/"
            class="instagram"
            target="_blank"
          >
            <InstagramIcon color="disabled" />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
