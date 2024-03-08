import React from "react"
import { bars } from "../data/data"
import { NavContext } from "./Nav"

export default function Bar() {
    const { toggleOpen } = React.useContext(NavContext)

    return (
        <button onClick={toggleOpen} className="header-right">
            {bars}
        </button>
    )
}