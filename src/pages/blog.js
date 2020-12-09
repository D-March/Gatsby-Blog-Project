import React from 'react'
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const posts = data.allMarkdownRemark.edges.map((p, index)  => 
                            <li key={index}>
                                <Link to={`/blog/${p.node.fields.slug}`}>
                                    <h2>
                                        {p.node.frontmatter.title}
                                    </h2>
                                </Link>
                                <p>
                                    {p.node.frontmatter.date}
                                </p>
                            </li>
                    );

    return (
            <Layout>
                <h1>A blog about the blog</h1>
                <ol>
                    {posts}
                </ol>

            </Layout>
            
    )
}

export default BlogPage
