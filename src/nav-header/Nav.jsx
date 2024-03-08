 import React from "react"
 import useToggle from "../hooks/useToggle"

 const NavContext = React.createContext()
 export { NavContext }

 export default function Nav({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({
      initialValue: false,
      onToggle: onOpen
    })

    const openedStyle = {
      flexDirection: "column",
      position: "fixed",
      right: 0,
      padding: "1em 0.5em",
      background: "#3B3B3A",
      height: "100%",
      justifyContent: "start",
      zIndex: 1
    }

    return (
      <NavContext.Provider value={{ open, toggleOpen } }>
        <div className="header" style={open ? openedStyle : null}>
          {children}
        </div>
      </NavContext.Provider>
    )
 }