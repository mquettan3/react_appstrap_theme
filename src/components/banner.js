import React from 'react';

import BackgroundImage from "../assets/images/electrician.jpg";
import TypedText from "./typedText";

export default function Banner( { handleNavMenuItemClick }) {

    return (
        <section id="home" className="banner" style={{backgroundImage: "url(" + BackgroundImage  + ")"}}>
            <div className="overlay">
                <h1 className="desktop-title">Experienced Local Electricians</h1>
                <h1 className="mobile-title">K&D Electric Company</h1>
                <TypedText textValues={["Commercial Electrical Wiring", "Commercial Electrician", "Commercial Exterior Lighting", "General Electrician", "Home Electrical Wiring", "Home Electrician", "Home Exterior Lighting", "Recessed Lighting", "Electrical Wiring", "Circuit Breaker Replacement"]}/>
                <button className="mq-button-dark desktop" href="#form-request" onClick={handleNavMenuItemClick}>Request A Free Consultation Now!</button>
                <button className="mq-button-dark mobile" href="#form-request" onClick={handleNavMenuItemClick}>Contact Us!</button>
                {/* <small>10% Discount for Seniors</small>
                <small>$20 Off Entire House Surge Protection</small> */}
            </div>
        </section>
    )
}
