import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

// STYLES

const leftBoxWrapper = {
  // border:"1px solid blue"
};

const mainTitleContainer = {
  margin: "auto",
  width: "80%",
};
const splashTitle = {
  fontWeight: 800,
};

const splashContainer = {
  minHeight: "80vh",
  // border:"1px solid black",
  paddingTop: "20vh",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right bottom",
};

export default function Splash(props) {
  const {
    allContentfulSplashPage: {
      nodes: [splashContent],
    },
  } = useStaticQuery(graphql`
    {
      allContentfulSplashPage {
        nodes {
          header
          splashSectionTitle
          splashBackground {
            file {
              url
              fileName
              contentType
            }
            description
          }
          splashSectionDesc {
            raw
          }
        }
      }
    }
  `);

  const { splashBackground, splashSectionDesc, splashSectionTitle, header } =
    splashContent;
  const { description, file } = splashBackground;
  let descTest = JSON.stringify(splashSectionDesc.raw, null, 4);

  return (
    <Grid
      container
      style={{ backgroundImage: `url(${file.url})` }}
      sx={splashContainer}
    >
      <Grid item xs={12} md={10} style={leftBoxWrapper}>
        <Box sx={mainTitleContainer}>
          <Typography variant="h1" sx={splashTitle}>
            {header}
          </Typography>

          <Typography variant="h2" sx={splashTitle}>
            {splashSectionTitle}
          </Typography>
          {/* <Typography variant="p">{splashSectionDesc?.raw}</Typography> */}
        </Box>
      </Grid>
      <Grid item xs></Grid>

      {/* 
      <Grid item xs={12} md={4} style={imageWrapper}>
        <img src={file.url} alt={description} width={"100%"} />
      </Grid> */}
    </Grid>
  );
}
