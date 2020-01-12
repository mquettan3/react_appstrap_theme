import React, { useEffect, useState } from 'react';

import BackgroundImage1 from "../assets/images/Chandelier.png";
import BackgroundImage2 from "../assets/images/StoneWall.jpg";
import TypedText from "./typedText";

export default function Banner( { handleNavMenuItemClick }) {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [showToggle, setShowToggle] = useState(false);
    const backgroundImageList = [BackgroundImage1, BackgroundImage2];
    const backgroundImage1 = backgroundImageList[0];
    let backgroundImage2 = backgroundImageList[backgroundImageList.length - 1];

    if((backgroundIndex - 1) < 0) {
        backgroundImage2 = backgroundImageList[backgroundImageList.length - 1];
    } else {
        backgroundImage2 = backgroundImageList[backgroundIndex - 1];
    }
    
    useEffect(() => {
        setShowToggle(!showToggle);
        const interval = setInterval(() => {
            if (backgroundIndex < (backgroundImageList.length - 1)) {
                setBackgroundIndex(backgroundIndex + 1);
            } else {
                setBackgroundIndex(0);
            }
        }, 3000);

        return () => clearInterval(interval);

    }, [backgroundIndex]);


    return (
        <section id="home" className="banner">
            <div className={"banner-image-1 " + (showToggle ? "show" : "")} style={{backgroundImage: "url(" + backgroundImage1  + ")"}}></div>
            <div className={"banner-image-2 " + (!showToggle ? "show" : "")}  style={{backgroundImage: "url(" + backgroundImage2  + ")"}}></div>
            <div className="overlay">
                <h1 className="desktop-title">Experienced Local Electricians</h1>
                <h1 className="mobile-title">K&D Electric Company</h1>
                <TypedText textValues={["Commercial Electrical Wiring", "Commercial Electrician", "Commercial Exterior Lighting", "General Electrician", "Home Electrical Wiring", "Home Electrician", "Home Exterior Lighting", "Recessed Lighting", "Electrical Wiring", "Circuit Breaker Replacement"]}/>
                <a className="mq-button-dark desktop" href="#form-request" onClick={handleNavMenuItemClick}>Request A Free Consultation Now!</a>
                <a className="mq-button-dark mobile" href="#form-request" onClick={handleNavMenuItemClick}>Contact Us!</a>
                {/* <small>10% Discount for Seniors</small>
                <small>$20 Off Entire House Surge Protection</small> */}
            </div>
        </section>
    )
}
