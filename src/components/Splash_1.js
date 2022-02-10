import React from "react"
const { useStaticQuery, graphql } = require("gatsby")

const Splash = () =>{

  const dataQuery = useStaticQuery(graphql`
    {
      allContentfulSplashPage {
        edges {
          node {
            splashBackground {
              title
              id
              file {
                url
                fileName
                contentType
                details {
                  size
                }
              }
            }
          }
        }
      }
    }
  `)

  let data = JSON.stringify(dataQuery,null,4)

  console.log("Data", data)
  return(
      <div>
        <img src=""></img>
          <h2>
          Hello there            
          </h2>
      </div>
  )
}

export default Splash