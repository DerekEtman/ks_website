import { createTheme, ThemeProvider } from "@mui/material";
import { fontFamily } from "@mui/system";
import React from "react";
import Splash from "../components/Splash";
import DefaultLayout from "../layouts/DefaultLayout";


const globalTheme = createTheme({
  typography:{
    fontFamily: 'Antic, sans-serif',
  }
})

const IndexPage = () => {
  return (
    <ThemeProvider theme={globalTheme}>
      <main >
        <title>Home Page</title>
        <DefaultLayout>
          <Splash />
        </DefaultLayout>
      </main>
    </ThemeProvider>
  );
};

export default IndexPage;
