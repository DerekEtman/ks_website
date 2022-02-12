import React from "react";
import Footer from "../components/footer/Footer";
import NavBar from "../components/nav/NavBar";
import "./DefaultLayout.css"


const main = {
    minHeight:'85vh',
}

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <NavBar />

      <main style={main}>{children}</main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
