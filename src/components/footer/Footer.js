import { Grid, Typography } from "@mui/material";
import React from "react";

const footerContainer = {
  minHeight: "5vh",
};

const copyrightText = {
  width: "100%",
};

const Footer = () => {
  return (
    <footer style={footerContainer}>
      <Grid container spacing={2}>
        <Grid item xs="auto" style={copyrightText}>
          <Typography  variant="p">
            © 2022 Kris Simeon. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
