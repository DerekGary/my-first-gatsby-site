import * as React from "react"
import Layout from "../components/layout"

const ProgramPage = () => {
    return (
        <Layout pageTitle="Program">
            <p>Program Page</p>
        </Layout>
    )
}

export default ProgramPage
export const Head = () => (
    <>
        <title>Program</title>
        <meta name="description" content="A Program Page Developed by Derek Gary" />
    </>
)