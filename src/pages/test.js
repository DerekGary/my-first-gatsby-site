import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { main, container, heroImage, content } from "./styles/test.module.css"
import Navbar from "../components/navbar"
import styled from "styled-components"

const TestPage = () => {
    return (
        <div>
            <div className={container}>
                <Navbar />
                <StaticImage className={heroImage} src="../images/super.png" alt="A Pixel City"
                    object-fit="none"
                    layout="fullWidth"
                />
            </div>
            <div className={container}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl ne to
                    nunc aliquet lacinia. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                    Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
                    facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                </p>
            </div>
        </div>
    )
}

export default TestPage
