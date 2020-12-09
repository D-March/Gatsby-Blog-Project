module.exports = {
  siteMetadata: {
    title: 'Web Developer Blog',
    description: 'A blog site for a web developer created with Gatsby',
    author: 'D-March',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
