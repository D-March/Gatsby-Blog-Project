---
title: "Displaying Blog Posts"
date: "2020-12-09"
---

## How I rendered blog post pages!

To achieve rendering a page for each blog post I had to make use of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/).

First I had to generate a 'slug' for each blog post which turned the post file name into a string and which can be added at the end of the site blog url.
In the onCreateNode (from the Gatsby Node APIs) configuration I set up an if statement to target nodes only when the node internal type is 'MarkdownRemark', which is the type for the blog posts.
Inside the if statement I added a console log to view each post object and utilised the JSON stringify method to convert the object into a JSON string to be able to read it easier.
I created a new const variable inside the if statement and using the path.basename method from Node Js, I then extracted the blog post slug from fileAboslutePath.
Then using createNodeField from the onCreateNode API I'm able to use the slug for each blog post.

![Grab Slug](./images/grab-slug.jpg)

I then had to generate the post page template.

Lastly I had to generate a new page for each blog post.
