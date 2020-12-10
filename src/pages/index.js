import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap";

import Landing from "../components/landing"
import indexStyles from './index.module.scss'
import pen from "../images/pen.png"
import watercolor from "../images/watercolor.png"

const IndexPage = () => {

  let contentRef1 = useRef();
  let contentRef2 = useRef();
  let contentRef3 = useRef();
  const watercolorRef = useRef(null);
  const penRef = useRef(null);

  useEffect(() => {
    
    const contentRef = [
      contentRef1.current,
      contentRef2.current,
      contentRef3.current
    ];

    gsap.from(contentRef, {
      duration: 1,
      y: -100,
      stagger: 0.6,
      alpha: 0,
    });

    gsap.from(penRef.current, {
      duration: 1,
      delay: 1.1,
      y: 50,
      alpha: 0
    });

    gsap.from(watercolorRef.current, {
      duration: 1,
      delay: 1.4,
      x: 50,
      alpha: 0
    });

  }, []);

  return (
    <Landing>
      <div className={indexStyles.content}>
          <h1 ref={contentRef1}>
            <span>I'm Damian</span>
            <span>Welcome to my blog!</span>
          </h1>
          <h3 ref={contentRef2}>During the creation of this blog site I wrote several posts documenting some of the features I implemented, click below to see them!</h3>
        <div className={indexStyles.box}  ref={contentRef3}>
          <Link to="/blog">
            <button className={indexStyles.outline} type="button">
              <div className={indexStyles.label}>
                <span className={indexStyles.hoverEffect}></span>
                <span className={indexStyles.labelText}>View Posts</span>
              </div>
            </button>
          </Link>
        </div>
      </div>
        <img src={pen} alt="pen" className={indexStyles.pen} ref={penRef}/>
        <img src={watercolor} alt="Watercolor" className={indexStyles.watercolor} ref={watercolorRef}/>  
    </Landing>
  )
}

export default IndexPage
