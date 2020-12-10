import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

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
                            <li key={index} className={blogStyles.post}>
                                <Link to={`/blog/${p.node.fields.slug}`}>
                                    <h2>
                                        {p.node.frontmatter.title}
                                    </h2>
                                    <p>
                                        {p.node.frontmatter.date}
                                    </p>
                                </Link>
                            </li>
                    );

    return (
            <Layout>
                <h1>Posts</h1>
                <ol className={blogStyles.posts}>
                    {posts}
                </ol>

            </Layout>
            
    )
}

export default BlogPage
