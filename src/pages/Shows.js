import React, { useEffect } from "react";
import DefaultLayout from "../layouts/DefaultLayout";

let iframeContainer = {
  height: "100vh",
  width: "100%",
};

const Shows = () => {
  useEffect(() => {
    // var ifrm = document.createElement("iframe");
    let ifrm = document.getElementById("showIframe")
    ifrm.setAttribute("src", "https://bnds.us/9g4ib9");
    ifrm.style.width = "100%";
    ifrm.style.height = "100%";
    // let frameContainer = document.getElementById("showIframe");
    // frameContainer.appendChild(ifrm);
  }, []);

  //   let showFrame = document.getElementById("showIframe");
  //   showFrame.style.height =
  // showFrame.contentWindow.document.body.scrollHeight + "px";
  return (
    <DefaultLayout>
      <div style={iframeContainer}>
        <iframe src="" width={"100%"} id="showIframe" />
      </div>
    </DefaultLayout>
  );
};

export default Shows;
