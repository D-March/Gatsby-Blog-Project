import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import notFoundStyles from './404.module.scss'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <div className={notFoundStyles.container}>
                <h1>Oops! Page not found</h1>
                <div className={notFoundStyles.box}>
                            <Link to="/">
                                <button className={notFoundStyles.outline} type="button">
                                    <div className={notFoundStyles.label}>
                                        <span className={notFoundStyles.hoverEffect}></span>
                                        <span className={notFoundStyles.labelText}>Take Me Home</span>
                                    </div>
                                </button>
                            </Link>
                        </div>
            </div>

        </Layout>
    )
}

export default NotFound
