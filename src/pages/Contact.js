import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const formIframe = {
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   border: 0,
};

const Contact = () => {


  return (
    <DefaultLayout>
      <iframe
        id="jotFormIframe"
        style={formIframe}
        width="100%"
        height="100%"
        src="https://form.jotform.us/71770480881159"
      ></iframe>
    </DefaultLayout>
  );
};

export default Contact;
