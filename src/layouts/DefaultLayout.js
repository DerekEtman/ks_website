import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";

const globalTheme = createTheme({
  typography: {
    fontFamily: "Antic, sans-serif",
  },
});

const main = {
  minHeight: "85vh",
  margin: "3rem auto",
};

const DefaultLayout = ({ children }) => {
  return (
    <ThemeProvider theme={globalTheme}>
      <NavBar />

      <main style={main}>{children}</main>

      <Footer />
    </ThemeProvider>
  );
};

export default DefaultLayout;
