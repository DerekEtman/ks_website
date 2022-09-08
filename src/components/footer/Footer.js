import { Grid, Typography } from "@mui/material";
import React from "react";

const footerContainer = {
  minHeight: "5vh",
};

const copyrightText = {
  width: "100%",
};

let currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <footer style={footerContainer}>
      <Grid container spacing={2}>
        <Grid item xs="auto" style={copyrightText}>
          <Typography variant="p">
            ©{currentYear} Kris Simeon. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
