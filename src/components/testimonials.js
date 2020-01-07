import React, { useState, useRef, useEffect } from 'react'

import BackgroundImage from "../assets/images/homePhoto.jpg";

export default function Testimonials() {
    const carouselEl = useRef(null);
    let previousDrag = 0;
    let currentScroll = 0;

    const dragMouseDown = (e) => {
        e.preventDefault();

        currentScroll = e.currentTarget.scrollLeft;
        previousDrag = 0;
        document.addEventListener("mousemove", scrollDrag);
        document.addEventListener("mouseup", dragMouseUp);
    }

    const scrollDrag = (e) => {
        e.preventDefault();
        if (previousDrag !== 0) {
            carouselEl.current.scrollTo(currentScroll + (previousDrag - e.clientX), 0);
            // carouselEl.current.scrollLeft = currentScroll + (previousDrag - e.clientX);
            currentScroll = carouselEl.current.scrollLeft;
        }
        previousDrag = e.clientX
    }

    const dragMouseUp = (e) => {
        e.preventDefault();
        document.removeEventListener("mousemove", scrollDrag);
        document.removeEventListener("mouseup", dragMouseUp);
    }

    return (
        <section ref={carouselEl} id="testimonials" className="testimonials" style={{backgroundImage: "url(" + BackgroundImage + ")"}} onMouseDown={dragMouseDown}>
                <div className="slider">
                    <div className="item">
                        <p>Ken is incredibly accessible and responsive and clearly takes pride in his company and his work.  These are the kinds of companies that I enjoy giving business to and there is only one place I will be calling in the future for electrical work, and that is K&D Electric.</p>
                        <i> - Kevin M.</i>
                    </div>
                    <div className="item">
                        <p>This is the second time I’ve used the company – just a great outfit.  Friendly yet business like.  Got down to business, talked to me about various options, and didn’t pressure.  Even had the rare equipment in the truck I wanted at the last second.  (Whole house surge protector.) I have used them times now – they are my go to Electrician for all my household needs.  Strongly recommend.</p>
                        <i> - Adele M.</i>
                    </div>
                    <div className="item">
                        <p>We were very pleased with the work you performed and will highly recommend your company.</p>
                        <i> - Crystal</i>
                    </div>
                </div>
        </section>
    )
}
