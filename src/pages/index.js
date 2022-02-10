import * as React from "react"
import Splash from "../components/Splash_1"

const pageStyles= {
  backgroundColor:"Green"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <Splash />
    </main>
  )
}

export default IndexPage
