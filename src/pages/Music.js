import { Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const Music = () => {
  const musicContainer = {
    width: "100%",
    height: "90vh",
  };
  return (
    <DefaultLayout>
      <Grid container id={musicContainer}>
        <Grid item xs></Grid>

        <Grid item xs={10}>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/5qgDnzBPL4eLkDKIoSQIs9?utm_source=generator"
            width="100%"
            height="352"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Grid>

        <Grid item xs></Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Music;
