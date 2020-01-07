import React, { useState, useRef, useEffect } from 'react'

import BackgroundImage from "../assets/images/homePhoto.jpg";

export default function Testimonials() {
    const [isScrollLocked, setScrollLocked] = useState(true);
    const carouselEl = useRef(null);
    let previousDrag = 0;
    let currentScroll = 0;
    let scrollDirection = 0;

    const dragMouseDown = (e) => {
        e.preventDefault();

        currentScroll = e.currentTarget.scrollLeft;
        previousDrag = 0;
        setScrollLocked(false);
        document.addEventListener("mousemove", scrollDrag);
        document.addEventListener("mouseup", dragMouseUp);
    }

    const scrollDrag = (e) => {
        e.preventDefault();
        if (previousDrag !== 0) {
            carouselEl.current.scrollTo(currentScroll + (previousDrag - e.clientX), 0);
            scrollDirection = currentScroll - carouselEl.current.scrollLeft;
            currentScroll = carouselEl.current.scrollLeft;
        }
        previousDrag = e.clientX
    }

    const dragMouseUp = (e) => {
        e.preventDefault();
        setScrollLocked(true);
        document.removeEventListener("mousemove", scrollDrag);
        document.removeEventListener("mouseup", dragMouseUp);
        if(scrollDirection < 0) {
            let newScrollLocation = carouselEl.current.scrollLeft + (window.innerWidth - (carouselEl.current.scrollLeft % window.innerWidth));
            carouselEl.current.scroll({top: 0, left: newScrollLocation, behavior: 'smooth'});
        } else {
            let newScrollLocation = carouselEl.current.scrollLeft - (window.innerWidth - (carouselEl.current.scrollLeft % window.innerWidth));
            carouselEl.current.scroll({top: 0, left: newScrollLocation, behavior: 'smooth'});
        }
    }

    
    // window.scroll({ top: document.querySelector(hash).offsetTop - 92, left: 0, behavior: 'smooth' });

    return (
        <section ref={carouselEl} id="testimonials" className={"testimonials " + (isScrollLocked ? "scroll-lock" : "") } onMouseDown={dragMouseDown}>
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
