module.exports = {
  siteMetadata: {
    title: 'Matviran',
    description: 'A Gatsby-based project developed by Onkar Yaglewad.',
    author: 'Onkar Yaglewad',
    siteUrl: 'http://localhost:8000',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-tailwindcss',
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Matviran',
        short_name: 'Matviran',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007BFF',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // Ensure you have an icon in this path
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
  ],
};
