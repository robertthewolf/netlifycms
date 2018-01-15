module.exports = {
  siteMetadata: {
  title: `JNJ Art Group`,
},
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-typography`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
