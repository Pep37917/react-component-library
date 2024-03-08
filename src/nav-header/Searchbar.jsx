import React from "react";
import Nav, { NavContext } from "./Nav";

export default function Searchbar() {
    const { open } = React.useContext(NavContext)

    return (
        <input type="text" style={open ? {visibility: "visible"} : null} className="search-bar" placeholder="Search Icons"/>
    )
}