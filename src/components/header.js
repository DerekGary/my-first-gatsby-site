import * as React from "react"
import { Img } from "gatsby-image"
import { header } from "./layout.module.css"


const Header = ({ headerImage }) =>
(
    <header className={header}>
        <Img
            title="Header"
            alt="Pixel art city skyline with mountains in the background"
            sizes={headerImage.sizes}
        />
    </header>
)

export default Header