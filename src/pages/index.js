import * as React from "react"
import Splash from "../components/Splash_1"

import DefaultLayout from "../layouts/DefaultLayout";

const pageStyles= {
  backgroundColor:"Green"
}

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <DefaultLayout>
        <Splash />
      </DefaultLayout>

      
    </main>
  )
}

export default IndexPage
