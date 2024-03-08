import React from "react"
import {bannerIcons, bannerBg, bannerTitleClr, bannerDescClr, bannerTitle} from "../data/data"

export default function({num, showDesc}) {

    return (
        <div className="banner-item" style={{backgroundColor: bannerBg[num]}}>
            <div className="icon" style={{color: bannerDescClr[num]}}>
                {bannerIcons[num]}
            </div>
            <div className="banner-text">
                <p className="title" style={{color: bannerTitleClr[num]}}>{bannerTitle[num]}</p>
                { showDesc === true &&
                    <p className="desc" style={{color: bannerDescClr[num]}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                    </p>
                }
            </div>
        </div>
    )
}