import React from "react"
import Nav from "./Nav"

export default function LibraryContainer({children}) {

  return (
      <div className="library-container">
        {children}
      </div>
    )
}