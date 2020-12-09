import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer>
            <p>
                Created by 
                <a href="https://www.d-march.com">
                    {data.site.siteMetadata.author}
                </a>,  
                © 2020
            </p>
        </footer>
    )
}

export default Footer
