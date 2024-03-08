import React from "react"
import { badgeBgColorArr, badgeTextColorArr } from "../data/data"

export default function BadgeContainer({index, borderRad, children}) {

    return (
        <div className="badge" style={{backgroundColor: badgeBgColorArr[index], color: badgeTextColorArr[index], borderRadius: borderRad}}>
            {children}
        </div>
    )
}