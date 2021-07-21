module.exports = {
  siteMetadata: {
    title: "Ferdi",
    description: "All your favorite services in one place",
    author: "@vantezzen",
    image: "https://repository-images.githubusercontent.com/169383267/0190e000-f2cd-11e9-85ca-66f5ab21e57a"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Ferdi",
        short_name: "ferdi",
        start_url: `/`,
        background_color: `#CE9FFC`,
        theme_color: `#CE9FFC`,
        display: "minimal-ui",
        icon: "./static/images/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/images",
      },
      __key: "images",
    },
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['PT Serif'],
        },
        custom: {
          families: ['Inter'],
          urls: ['/fonts/fonts.css']
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
