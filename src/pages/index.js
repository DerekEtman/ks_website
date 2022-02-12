import { fontFamily } from "@mui/system";
import * as React from "react"
import Splash from "../components/Splash"
import DefaultLayout from "../layouts/DefaultLayout";

const globalStyle = {
  fontFamily:'antic'
}

const IndexPage = () => {
  return (
    <main style={globalStyle}>
      <title>Home Page</title>
      <DefaultLayout>
        <Splash />
      </DefaultLayout>
    </main>
  )
}

export default IndexPage
