import React from "react"
import { NavContext } from "./Nav"

export default function Navpages() {
    const { open } = React.useContext(NavContext)

    return (
        <ul className="nav-pages" style={open ? {visibility: "visible"} : null}>
            <li>page</li>
            <li>page</li>
            <li>page</li>
        </ul>
    )
}