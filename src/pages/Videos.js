import { Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const Videos = () => {
  const videoContainer = {
    width: "100%",
    height: "90vh",
  };
  return (
    <DefaultLayout>
      <Grid container style={videoContainer}>
        <Grid item xs></Grid>
        <Grid item xs={9}>
          <iframe
            width="100%"
            height="80%"
            src="https://www.youtube.com/embed/9Ogee1YHTqU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs></Grid>

      </Grid>
    </DefaultLayout>
  );
};

export default Videos;
