import React from "react";

export default function Card({children}) {
    return (
        <div className="cards-container">
            <h1 className="comp-title">Cards</h1>
            <div className="card-items">
                {children}
            </div>
        </div>
    )
}