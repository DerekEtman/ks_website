import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const musicContainer = {
  height: "100vh",
  width: "100%",
};

const Music = () => {
  useEffect(() => {
    let ifrm = document.getElementById("spotifyEmbed");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
  }, []);

  return (
    <DefaultLayout>
      <Grid container style={musicContainer}>
        <Grid item xs></Grid>

        <Grid item xs={11}>
          <iframe
            style={{ borderRadius: "12px" }}
            id="spotifyEmbed"
            src="https://open.spotify.com/embed/artist/5qgDnzBPL4eLkDKIoSQIs9?utm_source=generator"
            width={"100%"}
            height={"100%"}
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
