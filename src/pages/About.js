import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import {
  Grid, ImageList,
  ImageListItem, Typography
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import DefaultLayout from "../layouts/DefaultLayout";

const aboutContainer = {
  margin: "0 auto",
  width: "95%",
};

const PhotoMasonry = (photoBulkArray) => {

  const handleMouseClick = (e,imageData) => {
    console.log("Handling mouseover", e, imageData)
  }


  return (
    <ImageList variant="quilted" cols={4} >
      {photoBulkArray.map(({ gatsbyImageData, ...props }, index) => (
        <ImageListItem key={index} >
          <GatsbyImage image={gatsbyImageData} alt={"test" + index} onClick={() => handleMouseClick(gatsbyImageData)} />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const useRenderRichText = (rawText) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>;
  const Text = ({ children }) => <p className="align-center">{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  // let test = renderRichText(testSomething, options);

  // console.log("RawTExt:", test)

  // return test;
};

const About = () => {
  const {
    allContentfulAboutPage: { edges },
  } = useStaticQuery(graphql`
    {
      allContentfulAboutPage {
        edges {
          node {
            bio {
              raw
            }
            photoGallery {
              gatsbyImageData(
                placeholder: BLURRED
                width: 500
                cropFocus: CENTER
              )
            }
          }
        }
      }
    }
  `);

  // let node = edges[0]?.node;
  const { node } = edges[0];
  // const { raw } = node.bio;
  const { photoGallery } = node;

  return (
    <DefaultLayout>
      <Grid container spacing={2} style={aboutContainer} id="aboutPage">
        <Grid item xs={12} order={{ xs: 1, sm: 1, md: 1 }}>
          <Typography variant="h4">About Kris Simeon</Typography>
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 3, sm: 3, md: 2 }} >
          {PhotoMasonry(photoGallery)}
        </Grid>

        <Grid item xs={12} md={6} order={{ xs: 2, sm: 2, md: 3 }}>
          <Typography variant="p">
            Kris Simeon is a singer-songwriter from Oxnard, California. He
            picked up the guitar at age 14 and never put it down.
            <br /> Kris has always had a penchant for crafting words together,
            and this eventually developed into a deep love for songwriting.
            <br /> His songs and stories (often autobiographical) are about love
            and love lost, life and death, and everything in between.
            <br />
            He is currently recording a collection of songs that he has written
            over the past few years as a solo artist.
            <br /> You can find his latest tracks at
          </Typography>
          <a href="https://soundcloud.com/krissimeon">
            soundcloud.com/krissimeon 
          </a>
          and
          <a href="https://youtube.com/krissimeon"> youtube.com/krissimeon </a>
          {/* {useRenderRichText(node?.bio?.raw)} */}
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default About;
