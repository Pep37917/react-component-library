import React from "react"
import { cardIcon } from "../data/data"

export default function CardItem({hover}) {
    return (
        <div className={hover ? "card-item hovered" : "card-item"}>
            <div className="card-icon">{cardIcon}</div>
            <p className="card-title">Easy Deployment</p>
            <p className="card-desc">Ac tincidunt sapien vehicula 
                erat auctor pellentesque rhoncus. 
                Et magna sit morbi lobortis.
            </p>
        </div>
    )
}