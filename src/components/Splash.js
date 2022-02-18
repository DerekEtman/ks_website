import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "@mui/material";


// STYLES
const imageWrapper = {
  // border:"1px solid red"
}

const leftBoxWrapper = {
  // border:"1px solid blue"

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
  console.log(splashBackground);

  return (
    <Grid container>
      <Grid item xs={0} md={7} style={leftBoxWrapper}>hello</Grid>
      <Grid item xs={12}  md={5} style={imageWrapper}>
        <img
          src={file.url}
          alt={description}
          width={"100%"}
        />
      </Grid>
    </Grid>
  );
};

export default Splash;
