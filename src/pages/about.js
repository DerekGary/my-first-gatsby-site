import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </Layout>
    )
}

export default AboutPage
export const Head = () => (
    <>
        <title>About Me</title>
        <meta name="description" content="An About Me Page About Derek Gary" />
    </>
)