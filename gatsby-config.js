require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `KS_1`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks:[
      {
        name:'home',
        link:'/'
      },
      {
        name:'about',
        link:'/About'
      },
      {
        name:'shows',
        link:'/Shows'
      },
      {
        name:'music',
        link:'/Music'
      },
      {
        name:'videos',
        link:'/Videos'
      },
      {
        name:'contact',
        link:'/Contact'
      },
    ]

  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_PREVIEW_API_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID,
      "host":`preview.contentful.com`
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },]
};
