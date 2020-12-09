---
title: "Creating Blog Posts"
date: "2020-12-09"
---

## How I created posts!

I first started by creating a 'posts' folder in my 'src' directory.
I then created a file in that folder called 'created.md', the 'md' extension makes it a markdown file which is a text file.
Md files use the Markdown markup language which is lightweight and uses plain text and symbols to format the text.
There is a great [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/) provided by markdownguide.org to quickly get started.

The 'created.md' file which I added is going to be the first post that I will add to the blog.
I started by adding a horizontal rule (---) to the first (1) and fourth (4) line of my file.
On line 2 I created a key value pair of title followed by, you guessed it, the title of the post. Written out like so: title: "Gatsby Blog Project".
On line 3 I added another key value pair for the date of the post written out in the same way as the title, date: "2020-12-09".
The date is formatted using ISO 8601 which is a standardised way of presenting dates and times for ease of use.
These key value pairs will then be available to be pulled using GraphQL.
I added a heading to the blog post which I did by using the H2 (##) and a subheading using the H3 (###) heading syntax.
Below the subheading I created an unordered list of the tech which I am using to create the site, each item in the list is starts with a hyphen (-) followed by a space and then the text.

Which will look like so:

- Gatsby
- React

In order to use the markdown file posts in a blog you need to be able to grab the files.
To do this, simply install the Gatsby plugin called [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/).
This is an official plugin supported by Gatsby and it allows sourcing data from your local filesystem into the Gatsby application.
Once it's installed it has to be added to the gatsby-config.js file, the instructions for this can be found on the page for the plugin linked above.

The markdown files then need to be parsed so that they can be displayed in a HTML format.
Gatsby provide an official plugin to do this called [gatsby-transformer-remark](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/?=remark).
This also has to be added to the gatsby-config.js file.

With the use of GraphQL you can then grab the post files and their contents to display them on the blog section of the site.
