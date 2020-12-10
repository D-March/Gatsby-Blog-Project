---
title: "Displaying Blog Posts"
date: "2020-12-09"
---

## How I rendered blog post pages!

To achieve rendering a page for each blog post I had to make use of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/).

First I had to generate a 'slug' for each blog post which turned the post file name into a string and which can be added at the end of the site blog url.
<br>
I took the onCreateNode API (from Gatsby Node APIs) and added it to the gatsby-node.js file.
<br>
In the API configuration I set up an if statement to target nodes only when the node internal type is 'MarkdownRemark', which is the type for the blog posts.
<br>
Inside the if statement I added a console log to view each post object and utilised the JSON stringify method to convert the object into a JSON string to ease navigation.
<br>
I created a new const variable inside the if statement and using the path.basename method from Node Js, I then extracted the blog post slug from fileAboslutePath.
<br>
Then using createNodeField from the onCreateNode API I'm able to use the slug for each blog post.

![Grab Slug](grab-slug.png)

In order to show each blog post I created a blog post template in the templates directory.

To generate a new page for each blog post I utilised the createPages API (from Gatsby Node APIs) which I added to gatsby-node.js.
<br>
Inside the API I created a blogPostTemplate const variable to target the template which I created.
<br>
Using the graphql method from the API, I made a query (which I got using GraphQL Playground) to grab the slug for each blog post.
<br>
I then used the forEach method to execute the createPages function for every element in the array I got from the query, specifying the component(blogPostTemplate), path and context.

![Create Pages](create-pages.png)

Next I modified the query which I made on the blog page to also grab the slug and wrapped the blog title with the Gatsby Link component to access each blog post from the main blog page.
<br>
To use the post data on the blog template I had to create another query using graphql inside the blog template file.
<br>
Then I added a props property to the component and added the query data into their respective tags.

![Template Content](template-content.png)
