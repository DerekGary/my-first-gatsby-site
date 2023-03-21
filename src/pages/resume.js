import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Resume = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <Link to="/" style={{ textDecoration: "none", position: "absolute", top: "20px", left: "20px", fontWeight: "bold", color: "black", backgroundColor: "white", borderRadius: "10%", padding: "10px" }}>Home</Link>
            <StaticImage src="../images/resume-image.PNG" alt="My Resume" placeholder="blurred" layout="fixed" width={800} height={1035} />
        </div>
    )
}

export default Resume
