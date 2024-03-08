import React from "react"
import { NavContext } from "./Nav"

export default function Logo() {

    const { open } = React.useContext(NavContext)

    const imgStyle = {
        width: "50px",
        height: "50px"
    }

    const navStyle = {
        justifyContent: "center"
    }

    return (
        <div className="header-left" style={open ? navStyle : null}>
            <img className="react-logo" src="../src/assets/react.svg" style={open ? imgStyle : null} alt="react svg" />
            {
                !open 
                &&
                <h1 className="main-title">
                    React Component Library
                </h1>
            }
        </div>
    )
}