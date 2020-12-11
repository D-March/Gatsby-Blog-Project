module.exports = {
  siteMetadata: {
    title: 'A blog about the blog',
    description: 'A blog site created with Gatsby',
    author: 'D-March',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'f4jj3n0yoio3',
        accessToken: '3VAdUGhqcZeWLYx6YOeKM6PiSJkXe94LLGvMQGcgDbA',
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
              'gatsby-remark-relative-images',
              {
                resolve: `gatsby-remark-images`,
                options: {
                  maxWidth: 590,
                  linkImagesToOriginal: false
              }
          }
        ]
      }
    }
  ]
}
