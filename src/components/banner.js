import React, { useEffect, useState } from 'react';

import BackgroundImage from "../assets/images/index-corporate-banner.jpg";
import TypedText from "./typedText";

export default function Banner() {

    return (
        <section className="banner" style={{backgroundImage: "url(" + BackgroundImage  + ")"}}>
            <div className="overlay">
                <h1 className="desktop-title">Experienced Local Electricians</h1>
                <h1 className="mobile-title">K&D Electric Company</h1>
                <TypedText textValues={["Commercial Electrical Wiring", "Commercial Electrician", "Commercial Exterior Lighting", "General Electrician", "Home Electrical Wiring", "Home Electrician", "Home Exterior Lighting", "Recessed Lighting", "Electrical Wiring", "Circuit Breaker Replacement"]}/>
                <button className="mq-button-dark desktop">Request A Free Consultation Now!</button>
                <button className="mq-button-dark mobile">Contact Us!</button>
                {/* <small>10% Discount for Seniors</small>
                <small>$20 Off Entire House Surge Protection</small> */}
            </div>
        </section>
    )
}
