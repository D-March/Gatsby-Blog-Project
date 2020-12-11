import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import { gsap } from 'gsap'

import Layout from '../components/layout'
import Head from '../components/head'
import aboutStyles from './about.module.scss'
import me from '../images/about-me.png'

const AboutPage = () => {

    let contentRef1 = useRef();
    let contentRef2 = useRef();
    let contentRef3 = useRef();
    let contentRef4 = useRef();
    let contentRef5 = useRef();
    let contentRef6 = useRef();
    const meRef = useRef(null);

    useEffect(() => {
    
        const contentRef = [
          contentRef1.current,
          contentRef2.current,
          contentRef3.current,
          contentRef4.current,
          contentRef5.current,
          contentRef6.current
        ];
    
        gsap.from(contentRef, {
          duration: 1,
          y: -50,
          stagger: 0.5,
          alpha: 0,
        });

        gsap.from(meRef.current, {
            duration: 1,
            delay: 1.4,
            x: -100,
            alpha: 0
          })

      }, []);
    
    return (
            <Layout>
                <Head title="About" />
                <div className={aboutStyles.container}>
                    <h1 ref={contentRef1}>About Me</h1>
                    <p ref={contentRef2}>
                        I'm Damian, a front end developer based in Bristol, UK.
                    </p>
                    <p ref={contentRef3}>
                        The aim of this blog site was to practice working with Gatsby and GSAP and while doing so I documented some of that journey in the form of blog posts which you can read on this very site!
                    </p>
                    <p ref={contentRef4}>
                        I'm always excited and keen to learn new technologies and strive towards providing a unique experience on the web, being able to these use technologies is another step in achieving that.
                    </p>
                    <p ref={contentRef5}>Need a developer or want to see more of my work?</p>
                    <div className={aboutStyles.box} ref={contentRef6}>
                        <Link to="/contact">
                            <button className={aboutStyles.outline} type="button">
                                <div className={aboutStyles.label}>
                                    <span className={aboutStyles.hoverEffect}></span>
                                    <span className={aboutStyles.labelText}>Contact Me</span>
                                </div>
                            </button>
                        </Link>
                    </div>
                    <img src={me} alt="damian-vector" ref={meRef}/>
                </div>
            </Layout>
    )
}

export default AboutPage