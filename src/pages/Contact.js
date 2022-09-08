import { Grid } from "@mui/material";
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const jotFormContainer = {
  width: "100%",
  height: "80vh",
};

const formIframe = {
  //   width: "100%",
  margin: "0 auto",
  //   padding: 0,
  //   border: 0,
};

const Contact = () => {
  return (
    <DefaultLayout>
      <Grid container style={jotFormContainer}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          {/* Have a question? */}
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <iframe
            id="jotFormIframe"
            width={"100%"}
            height={"100%"}
            src="https://form.jotform.us/71770480881159"
            frameBorder={0}
          ></iframe>
        </Grid>
      </Grid>
    </DefaultLayout>
  );
};

export default Contact;
