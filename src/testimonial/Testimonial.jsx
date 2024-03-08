import React from "react"

export default function Testimonial({children}) {
    return (
        <div className="testimonials-container">
            <h1 className="comp-title">Testimonials</h1>
            <div className="testim-items">
                {children}
            </div>
        </div>
    )
}