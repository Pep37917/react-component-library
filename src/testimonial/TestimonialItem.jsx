import React from "react"
import { testimIcon, testimCityIcon } from "../data/data"

export default function TestimonialItem({containsPic, orientation}) {

    if (containsPic) { // with picture
        return (
            <div 
            className={
                orientation == "horizontal" 
                ? "testim-item horizontal blue-bg" 
                : "testim-item vertical blue-bg"}
            >
                <div 
                className={
                    orientation == "horizontal"
                    ? "testim-img hor-img"
                    : "testim-img ver-img"
                }>
                    <img src="../src/assets/mayandersons.jpg" alt="may-andersons" />
                </div>
                
                {/* vertical white header */}
                {orientation == "vertical" ? <div className="testim-header white-bg">
                </div> : ""}

                <div className="testim-content">
                    <h1 className="testim-icon">{testimIcon}</h1>
                    <h3 className="testim-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed urna nulla vitae laoreet augue. 
                        Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                    </h3>
                    <strong>May Andersons</strong>
                    <p>Workcation, CTO</p>
                </div>
            </div>
        )
    } else { // without picture
        return (
            <div 
            className={
                orientation == "horizontal" 
                ? "testim-item no-pic horizontal white-bg" 
                : "testim-item no-pic vertical white-bg"}
            >   
                <h2 className="testim-logo">
                    <span className="city-icon blue-text">{testimCityIcon}</span>
                    Work
                    <span className="blue-text">cation</span>
                </h2>
                <h3 className="testim-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed urna nulla vitae laoreet augue. 
                    Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
                </h3>
                <div className="cite">
                    <p>May Andersons</p>
                    {orientation === "horizontal" && <span className="slash blue-text">/</span>}
                    <span className="gray-text">Workcation, CTO</span>
                </div>
            </div>
        )
    }
}