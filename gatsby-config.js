module.exports = {
  siteMetadata: {
    title: 'My Portfolio',
    author: 'Gaël HOUNGBEDJI'
  },
  plugins: [
   {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
  ]
}
