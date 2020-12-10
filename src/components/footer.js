import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

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
        <footer className={footerStyles.footer}>
            <p>
                Created by&nbsp;
                <a href="https://www.d-march.com">
                    {data.site.siteMetadata.author}
                </a>&nbsp; 
                © 2020
            </p>
        </footer>
    )
}

export default Footer
