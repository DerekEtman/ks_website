import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Grid, Typography, Masonry } from "@mui/material";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import DefaultLayout from "../layouts/DefaultLayout";


const PhotoMasonry = (photoBulkArray) => {
  console.log(photoBulkArray)
  return(
    <Masonry columns={4} spacing={2} >
      {photoBulkArray.map((photo,index) => (
        <img key={photo.index-index} > </img>
      ))}
    </Masonry>
  )
}


const About = () => {

  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>
  
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        )
      },
    },
  }


  const {allContentfulAboutPage:{edges}} = useStaticQuery(graphql`
    {
      allContentfulAboutPage {
        edges {
          node {
            bio {
              raw
            }
            photoGallery {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  let node = edges[0]?.node
  let bioRaw = node.bio?.raw
  let photoGallery = node.photoGallery

  console.log(node, photoGallery)
  
  return (
    <DefaultLayout>

      {/* {renderRichText(bioRaw,options)} */}
      <Grid>
        <Typography variant="h4">About Kris Simeon</Typography>
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
