import React, { useEffect, useState } from 'react';

import BackgroundImage from "../assets/images/index-corporate-banner.jpg";
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

export default function Banner() {
     const [writingText, setWritingText] = useState("");
     const [writingIndex, setWritingIndex] = useState(0);
     const [writingLength, setWritingLength] = useState(0);

    const textValues = ["Commercial Electrical Wiring", "Commercial Electrician", "Commercial Exterior Lighting", "General Electrician", "Home Electrical Wiring", "Home Electrician", "Home Exterior Lighting", "Recessed Lighting", "Electrical Wiring", "Circuit Breaker Replacement"]

    useEffect(() => {
        const interval = setInterval(() => {
            setWritingText(textValues[writingIndex].substring(0, writingLength));
            if((writingLength + 1) > textValues[writingIndex].length) {
                setWritingLength(writingLength);
            } else {
                setWritingLength(writingLength + 1);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [writingIndex, writingLength]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWritingLength(0);
            if((writingIndex + 1) === textValues.length) {
                setWritingIndex(0);
            } else {   
                setWritingIndex(writingIndex + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div className="banner" style={{backgroundImage: "url(" + BackgroundImage  + ")"}}>
            <div className="overlay">
                <h1>Experienced Local Electricians</h1>
                <h3>Serving Northern Virginia & Surrounding Communities</h3>
                <div className="writing-text"><p>{writingText}</p><span className="pulsing-cursor"></span></div>
            </div>
        </div>
    )
}
