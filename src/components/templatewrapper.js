import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const TemplateWrapper = ({ children, data }) => {
    return (
        <div>
            <Helmet title="Gatsby Tutorial" />
            <Header headerImage={data.headerImage} />
            { children }
        </div>
    )
}

export default TemplateWrapper

export const query = graphql`
    query HeaderImageQuery {
        headerImage: file(relativePath: { eq: "super.jpg" }) {
            childImageSharp {
                fixed(width: 1240) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
