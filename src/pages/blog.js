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
                    }
                }
            }
        }
    `)
    const posts = data.allMarkdownRemark.edges.map((p) => 
                            <li>
                                <h2 key={p.node.frontmatter.title}>
                                    {p.node.frontmatter.title}
                                </h2>
                                <p key={p.node.frontmatter.date}>
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
