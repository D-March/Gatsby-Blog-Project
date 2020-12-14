import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'
import meBlog from '../images/blog-me.png'

const BlogPage = () => {

    const titleRef = useRef(null);
    const meRef = useRef(null);
    let liRef = useRef([]);
    liRef.current = [];

    const addToRefs = (el) => {
        if(el && !liRef.current.includes(el)){
            liRef.current.push(el);
        }
        console.log(liRef.current)
    }

    useEffect(() => {

        liRef.current.forEach((el, index) => {
            gsap.from(el, {
                duration: 2,
                delay: 1,
                alpha: 0,
                y: -100,
            });
        });
        gsap.from(titleRef.current, {
                duration: 1,
                alpha: 0,
                y: -100,
            });

        gsap.from(meRef.current, {
            duration: 1,
            delay: 2,
            alpha: 0,
            x: 100,
        });
    }, []);
    


    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: ASC
                }
                ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "Do MMMM, YYYY")
                    }
                }
            }
        }
    `)

    const posts = data.allContentfulBlogPost.edges.map((p, index)  => 
                            <li key={index} className={blogStyles.post} ref={addToRefs}>
                                <Link to={`/blog/${p.node.slug}`}>
                                    <h2>
                                        {p.node.title}
                                    </h2>
                                    <p>
                                        {p.node.publishedDate}
                                    </p>
                                </Link>
                            </li>
                    );
                    

    return (
            <Layout>
                <Head title="Blog" />
                <div className={blogStyles.container}>
                    <h1 ref={titleRef}>Posts</h1>
                    <ol className={blogStyles.posts} >
                        {posts}
                    </ol>
                    <img src={meBlog} alt="man sitting" ref={meRef}/>
                </div>
            </Layout>
    )
}

export default BlogPage
