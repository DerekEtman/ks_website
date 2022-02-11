import * as React from "react"
import Splash from "../components/Splash"
import DefaultLayout from "../layouts/DefaultLayout";


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
