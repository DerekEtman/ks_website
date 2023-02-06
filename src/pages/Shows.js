import React, { useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

let iframeContainer = {
  height: "100vh",
  width: "100%",
};

const Shows = () => {
  useEffect(() => {
    let ifrm = document.getElementById("showIframe");
    ifrm.setAttribute("src", "https://bnds.us/9g4ib9");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
  }, []);

  return (
    <DefaultLayout>
      <div style={iframeContainer}>
        <iframe
          src=""
          width={"100%"}
          id="showIframe"
          title="Bands In Town - Kris Simeon Shows"
        />
      </div>
    </DefaultLayout>
  );
};

export default Shows;
