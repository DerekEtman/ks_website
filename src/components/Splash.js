import React from "react";
const { useStaticQuery, graphql } = require("gatsby");

const Splash = () => {
  const {
    allContentfulSplashPage:{
      nodes:[splashContent]
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

  const {splashBackground, splashSectionDesc, splashSectionTitle} = splashContent
  let descTest = JSON.stringify(splashSectionDesc.raw,null,4)
  console.log(splashBackground, descTest)

  
  return (
    <div>
      {splashSectionTitle}
      <p>
        {descTest}
      </p>
    </div>
  );
};

export default Splash;
