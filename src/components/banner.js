import React, { useEffect, useState, useRef } from 'react';

import BackgroundImage1 from "../assets/images/Chandelier.png";
import BackgroundImage2 from "../assets/images/StoneWall.jpg";
import BackgroundImage3 from "../assets/images/homePhoto.jpg";
import TypedText from "./typedText";

export default function Banner( { handleNavMenuItemClick }) {
    const [animated, setAnimated] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [previousImageIndex, setPreviousImageIndex] = useState(0);
    const visibleSlide = useRef(null);
    const images = [BackgroundImage1, BackgroundImage2, BackgroundImage3];

    useEffect(() => {
        let timer = setInterval(triggerAnimationStart, 8000);

        return(() => {
            clearInterval(timer);
        })

    }, []);

    useEffect(() => {
        visibleSlide.current.addEventListener("animationend", handleAnimationEnd);
        visibleSlide.current.addEventListener("animationstart", handleAnimationStart);

        return(() => {
            visibleSlide.current.removeEventListener("animationend", handleAnimationEnd);
            visibleSlide.current.removeEventListener("animationstart", handleAnimationStart);
        })

    }, [currentImageIndex, previousImageIndex, animated]);

    const handleAnimationStart = () => {
        if ((currentImageIndex + 1) === images.length) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    const handleAnimationEnd = () => {
        setAnimated(false);
        setPreviousImageIndex(currentImageIndex);
    }

    const triggerAnimationStart = () => {
        console.log("animation started!");
        setAnimated(true);
    }

    return (
        <section id="home" className="banner">
            <div className="previous-slide" style={{backgroundImage: "url(" + images[previousImageIndex]  + ")"}}></div>
            <div ref={visibleSlide} className={"current-slide" + (animated ? " animated" : "")}  style={{backgroundImage: "url(" + images[currentImageIndex]  + ")"}}></div>
            <div className="banner-overlay"></div>
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
