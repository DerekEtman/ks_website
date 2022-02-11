import React from "react";
const { useStaticQuery, graphql } = require("gatsby");

const Splash = () => {
  const {
    allContentfulSplashPage:{
      nodes:[splashPageContent]
    }
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
 const [splashSectionTitle, splashBackground, splashSectionDesc] = splashPageContent

 console.log(splashSectionTitle)
  return (
    <div>
    </div>
  );
};

export default Splash;
