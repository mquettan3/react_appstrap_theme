import React from 'react'

// Assets
// import BackgroundImage from "../assets/images/homePhoto.jpg";

// Loadable Components
import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel'));

export default function Testimonials() {
    // Testimonial Carousel
    const testimonialCarouselOptions = {
        autoplay: true,
        loop: true,
        center: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        dots: true,  // Show pagination buttons
        nav: false,  // Hide next and prev buttons
        navText: ["<i fill=\"currentColor\" style=\"display: inline-block;\"><svg fill=\"currentColor\" height=\"25\" width=\"10\" viewBox=\"0 0 640 1792\" style=\"display: inline-block; vertical-align: middle;\"><path d=\"M627 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z\"></path></svg></i>", "<i fill=\"currentColor\" style=\"display: inline-block;\"><svg fill=\"currentColor\" height=\"25\" width=\"10\" viewBox=\"0 0 640 1792\" style=\"display: inline-block; vertical-align: middle;\"><path d=\"M595 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z\"></path></svg></i>"]
    };

    return (
        <section id="testimonials">
            <OwlCarousel
                
                className="owl-theme testimonials"
                {...testimonialCarouselOptions}
            >
                <div className="item">
                    <div className="testimonial text-center max-width-700">
                        <p>I have used them times now – they are my go to Electrician for all my household needs. Strongly recommend! Friendly, yet professional!</p>
                        <i> - Adele M.</i>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial text-center max-width-700">
                        <p>Ken is incredibly accessible and responsive and clearly takes pride in his company and his work.  These are the kinds of companies that I enjoy giving business to!</p>
                        <i>Kevin M.</i>
                    </div>
                </div>
                <div className="item">
                    <div className="testimonial text-center max-width-700">
                        <p>We were very pleased with the work performed and we highly recommend your company!</p>
                        <i> - Crystal</i>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    )
}
