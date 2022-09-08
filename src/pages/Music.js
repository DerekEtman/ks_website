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
            width="100%"
            height="300"
            scrolling="no"
            frameBorder={0}
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/564437382&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Music;
