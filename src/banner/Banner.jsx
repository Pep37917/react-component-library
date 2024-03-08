import React from "react"
import { bannerBg } from "../data/data"

export default function Banner({children}) {
    const arrayLength = bannerBg.length

    return (
        <div className="banner-container">
            <h1 className="comp-title">Banners</h1>
            <div className="item-container">
                <div>
                    {children(arrayLength, true)}
                </div>
                <div>
                    {children(arrayLength, false)}
                </div>
            </div>
        </div>
    )
}