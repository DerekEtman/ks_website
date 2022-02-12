import { Grid, Typography } from "@mui/material";
import { typography } from "@mui/system";
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      <Grid>
        <Typography variant="h4">About</Typography>
        <Typography variant="p">
          Kris Simeon is a singer-songwriter from Oxnard, California. He picked
          up the guitar at age 14 and never put it down. Kris has always had a
          penchant for crafting words together, and this eventually developed
          into a deep love for songwriting. His songs and stories (often
          autobiographical) are about love and love lost, life and death, and
          everything in between. He is currently recording a collection of songs
          that he has written over the past few years as a solo artist. You can
          find his latest tracks at
        </Typography>
        <a href="https://soundcloud.com/krissimeon">
          soundcloud.com/krissimeon
        </a>{" "}
        and
        <a href="https://youtube.com/krissimeon">youtube.com/krissimeon</a>
      </Grid>
    </DefaultLayout>
  );
};

export default About;
