import React, { useRef, useEffect } from 'react'
import { gsap, Elastic, TweenMax } from 'gsap'


import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'
import { FaMobile } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ContactPage = () => {

    let contentRef1 = useRef();
    let contentRef2 = useRef();
    let contentRef3 = useRef();
    let contentRef4 = useRef();
    let contentRef5 = useRef();
    let contentRef6 = useRef();
    let contentRef7 = useRef();
    let containerRef = useRef(null);


    useEffect(() => {

        gsap.from(containerRef.current, {
            duration: 1,
            x: -100,
            alpha: 0,
          });
    
        const contentRef = [
          contentRef1.current,
          contentRef2.current,
          contentRef3.current,
          contentRef4.current,
          contentRef5.current,
          contentRef6.current,
          contentRef7.current
        ];
    
        gsap.from(contentRef, {
          duration: 1,
          delay: 1,
          y: -50,
          stagger: 0.5,
          alpha: 0,
        });

        TweenMax.fromTo("#mobileRef", {
            duration: 1, 
            rotation: -20,
        },
        {
            duration: 2,
            rotation: 0,
            ease: Elastic.easeOut.config(0.9,0.1),
            repeat: 20
        });
        TweenMax.fromTo("#emailRef", {
            duration: 1, 
            y: -5,
        },
        {
            duration: 2,
            y: 0,
            ease: Elastic.easeOut.config(0.9,0.1),
            repeat: 20
        })
        

    }, []);

    return (
            <Layout>
                <Head title="Contact" />
                <div className={contactStyles.container} ref={containerRef}>
                    <h1 ref={contentRef1}>Contact Me</h1>
                    <p ref={contentRef2}>
                        For any enquiries contact me!
                    </p>
                    <p className={contactStyles.contact} ref={contentRef3}>
                        <FaMobile id="mobileRef" className={contactStyles.icon}/>
                        <a href="tel: +447427697167">
                            <span>&nbsp;07427697167</span>
                        </a>
                    </p>
                    <p className={contactStyles.contact} ref={contentRef4}>
                        <MdEmail id="emailRef" className={contactStyles.icon}/>
                        <a href="mailto:damian@d-march.com">
                            <span>&nbsp;damian@d-march.com </span>
                        </a>
                    </p>
                    <p ref={contentRef5}>To see more of my work, take a look at my portfolio or github profile!</p>
                    <div className={contactStyles.box} ref={contentRef6}>
                        <a href="https://www.d-march.com">
                            <button className={contactStyles.outline} type="button">
                                <div className={contactStyles.label}>
                                    <span className={contactStyles.hoverEffect}></span>
                                    <span className={contactStyles.labelText}>Portfolio</span>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div className={contactStyles.box} ref={contentRef7}>
                        <a href="https://github.com/D-March">
                            <button className={contactStyles.outline} type="button">
                                <div className={contactStyles.label}>
                                    <span className={contactStyles.hoverEffect}></span>
                                    <span className={contactStyles.labelText}>GitHub</span>
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </Layout>
    )
}

export default ContactPage
