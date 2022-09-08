import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const Videos = () => {
  return (
    <DefaultLayout>
      <div style={{height:"100%"}}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9Ogee1YHTqU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </DefaultLayout>
  );
};

export default Videos;
