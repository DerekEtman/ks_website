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
            src="<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1181876071&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/krissimeon" title="Kris Simeon" target="_blank" style="color: #cccccc; text-decoration: none;">Kris Simeon</a> · <a href="https://soundcloud.com/krissimeon/dont-keep-your-love-1" title="Don&#x27;t Keep Your Love" target="_blank" style="color: #cccccc; text-decoration: none;">Don&#x27;t Keep Your Love</a></div>"
          ></iframe>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Music;
