import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

// STYLES
const imageWrapper = {
  // border:"1px solid red"
};

const leftBoxWrapper = {
  // border:"1px solid blue"
};

const mainTitleContainer = {
  margin:"0 auto",
  border:"1px solid red",
  width:"80%",
}

const Splash = () => {
  const {
    allContentfulSplashPage: {
      nodes: [splashContent],
    },
  } = useStaticQuery(graphql`
    {
      allContentfulSplashPage {
        nodes {
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

  const { splashBackground, splashSectionDesc, splashSectionTitle } =
    splashContent;
  const { description, file } = splashBackground;
  let descTest = JSON.stringify(splashSectionDesc.raw, null, 4);
  console.log(splashSectionDesc);

  return (
    <Grid container>
      <Grid item xs={0} md={7} style={leftBoxWrapper}>
        <Box sx={mainTitleContainer}>
          <Typography variant="h4">{splashSectionTitle}</Typography>
          <Typography variant="p">{splashSectionDesc?.raw}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} style={imageWrapper}>
        <img src={file.url} alt={description} width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default Splash;
