import * as React from "react"
import Layout from "../components/layout"

const ProgramsPage = () => {
    return (
        <Layout pageTitle="Programs">
            <p>Programs Page</p>
        </Layout>
    )
}

export default ProgramsPage
export const Head = () => (
    <>
        <title>Programs</title>
        <meta name="description" content="A List of Programs Developed by Derek Gary" />
    </>
)