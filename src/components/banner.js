import React, { useEffect, useState } from 'react';

import BackgroundImage from "../assets/images/index-corporate-banner.jpg";
import TypedText from "./typedText";

export default function Banner() {

    return (
        <div className="banner" style={{backgroundImage: "url(" + BackgroundImage  + ")"}}>
            <div className="overlay">
                <h1>Experienced Local Electricians</h1>
                <TypedText textValues={["Commercial Electrical Wiring", "Commercial Electrician", "Commercial Exterior Lighting", "General Electrician", "Home Electrical Wiring", "Home Electrician", "Home Exterior Lighting", "Recessed Lighting", "Electrical Wiring", "Circuit Breaker Replacement"]}/>
                <button className="button-dark">Request Service Now!</button>
            </div>
        </div>
    )
}
