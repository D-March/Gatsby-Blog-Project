import React from 'react'
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import landingStyles from './landing.module.scss'

const Landing = (props) => {
    return (
        <div className={landingStyles.container}>
            <Header />
            <div className={landingStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Landing