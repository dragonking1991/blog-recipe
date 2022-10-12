module.exports = {
  siteMetadata: {
    title: `blog-recipe`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "dcHuoi9-K4jcVapCdMjNyYF95J0dfMP3QCMctNXq9Yg",
        spaceId: "y7we1dkn5v3d",
      },
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
  ],
};
