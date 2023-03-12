import * as React from "react"
import { Link } from "gatsby"
import { 
    container,
    navLinks,
    header,
    navLinkItem,
    navLinkText
 } from "./layout.module.css"

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/program" className={navLinkText}>Program</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/test" className={navLinkText}>Test</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={header}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout