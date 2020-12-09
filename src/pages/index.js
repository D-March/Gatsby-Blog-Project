import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Damian Marchewka</h1>
      <p>Need a developer?</p>
      <Link to="/contact"><button>Contact Me</button></Link>
    </Layout>
  )
}

export default IndexPage
