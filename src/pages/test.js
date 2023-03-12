import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { heroImage, main, gatsbyImageWrapper } from "./styles/test.module.css"

const TestPage = ({ data }) => {
    return (
        <main className={main}>
            <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} 
            alt="Super" 
            style={{ margin: -9 }} />
            <h1>Test Page Test</h1>
            <Link to="/">Go Back</Link>
        </main>
    )
}

export const pageQuery = graphql`
query MyQuery {
    file(relativePath: {eq: "super.png"}) {
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: AUTO
          breakpoints: [576, 768, 992, 1200, 1440, 1920, 2560]
          transformOptions: {fit: COVER, cropFocus: CENTER}
        )
      }
    }
  }
`
export default TestPage