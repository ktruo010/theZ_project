import React, { useState, useEffect } from 'react'

const RequestButton = ({ type, color, icon, text, link}) => {
    const [setType, setTypeState] = useState("requestButton__buy");

    // logic for the button type
    useEffect(() => {
        setTypeState(type === 3 ? "requestButton__buy" : "requestButton__quote");
        })


    return (
        <button className={`${setType}`} style={{ backgroundImage: `linearGradient: (to bottom, ${color}, #000)` }} onClick={_=> window.open(`https://www.${link}`, "_blank")} >
            <div className="requestButton__icon">
                {icon}
            </div>
            <div className="requestButton__text">
                {text}
            </div>
        </button>
    )
}

export default RequestButton
