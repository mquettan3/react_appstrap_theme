import React from 'react'

import BackgroundImage from "../assets/images/Chandelier.jpg";
// import asyncScriptLoader from 'async-script-loader'
 
// asyncScriptLoader('https://www.yelp.com/embed/widgets.js')

export default function AboutUs() {
    return (
        <section id="aboutus" className="aboutus">
            <div className="side-image" style={{backgroundImage: "url(" + BackgroundImage + ")"}}></div>
            <div className="content">
                <div className="section-divider"></div>
                <h1>Why Choose <b>K&D Electric Company?</b></h1>
                <h3>Quick and Reliable</h3>
                <p>It can be difficult to find a punctual, professional Bristow, VA, electrical contractor these days, and K & D Electric Company LLC is your best option if you need someone to come to your house or place of business to help with your electrical maintenance or repair needs. With more than 20 years of experience, there is no electrical problem that we have not seen and solved.</p>
                {/* <h3>Locally Owned & Operated</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero tempor elit tincidunt sollicitudin id et dolor. Proin iaculis, dui ac facilisis malesuada, magna nisi commodo odio, in pretium metus dui quis nulla. Cras imperdiet ipsum non massa fermentum cursus. Cras blandit pharetra dui a vulputate.</p> */}
                <h3>Over 20 Years of Professional Experience</h3>
                <p>Our team of fully licensed and insured electrical contractors is more than capable of handling any kind of situation that you are facing when it comes to the electrical wiring of your home or business. We are flexible with our schedule, and we make sure to get the job done as quickly as possible when we know that you just want to see the electricity working again.</p>
                {/* <h3>24/7 Same-Day Emergency Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero tempor elit tincidunt sollicitudin id et dolor. Proin iaculis, dui ac facilisis malesuada, magna nisi commodo odio, in pretium metus dui quis nulla. Cras imperdiet ipsum non massa fermentum cursus. Cras blandit pharetra dui a vulputate.</p> */}
                <h3>Free Estimates & Consultations</h3>
                <p>We are available from 7:30am - 4:00pm during the week, so why not stop by and see what we are all about? If you give K & D Electric Company LLC a call today, you will be able to get a free consultation from a professional Bristow, VA, electrical contractor.</p>
                <a href="https://www.angieslist.com/companylist/us/va/bristow/k-d-electric-reviews-430228.aspx?cid=ssabadge" target="_new"><img src="https://www.angieslist.com/webbadge/b9e01fe7a1839fb8c154cf0d56e4ddbc.png" alt="WASHINGTON D.C. electrician" style={{border: 0}} /></a>

                {/* <span class="yelp-review" data-review-id="nlvBzr65ybswOP5vkBppyA" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=TeRA6wtCuYPbHU4q0qkvSw" rel="nofollow noopener">Dianne R.</a>'s <a href="https://www.yelp.com/biz/k-and-d-electric-bristow?hrid=nlvBzr65ybswOP5vkBppyA" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/49oyVz4EZNHrqAsfUu91Nw" rel="nofollow noopener">K & D Electric</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script async="async" src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script></span> */}
                <iframe data-review-id="nlvBzr65ybswOP5vkBppyA" className="yelp-review" src="https://www.yelp.com/embed/review/nlvBzr65ybswOP5vkBppyA?embed_location=192.168.56.102:8000" scrolling="no" style={{display: "block", maxWidth: "700px", minWidth: "0px", width: "100%", height: "337px", border: "0px"}}></iframe>
            </div>
        </section>
    )
}
