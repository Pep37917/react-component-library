import React from "react"
import { badgeBgColorArr } from "../data/data"

export default function Badge({children}) {
    const arrayLength = badgeBgColorArr.length

    return (
        <div className="badge-container">
            <h1 className="comp-title">Badges</h1>
            <div className="badges">
                {children(arrayLength, 4)}
                {children(arrayLength, 40)}
            </div>
        </div>
    )
}