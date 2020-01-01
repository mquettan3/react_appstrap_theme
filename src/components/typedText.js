import React, {useState, useEffect} from 'react'

export default function TypedText( { textValues }) {
    const [writingText, setWritingText] = useState("");
    const [writingIndex, setWritingIndex] = useState(0);
    const [writingLength, setWritingLength] = useState(0);

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
        <div className="writing-text">
            <p>{writingText}</p><span className="pulsing-cursor"></span>
        </div>
    )
}
