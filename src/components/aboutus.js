import React from 'react'

import BackgroundImage from "../assets/images/computer-screens.jpg";

export default function AboutUs() {
    return (
        <section className="aboutus">
            <div className="side-image" style={{backgroundImage: "url(" + BackgroundImage + ")"}}></div>
            <div className="content">
                <div className="section-divider"></div>
                <h1>Why Choose <b>K&D Electric Company?</b></h1>
                <h3>Quick and Reliable</h3>
                <p>It can be difficult to find a punctual, professional Bristow, VA, electrical contractor these days, and K & D Electric Company LLC is your best option if you need someone to come to your house or place of business to help with your electrical maintenance or repair needs. With more than 20 years of experience, there is no electrical problem that we have not seen <b>and solved.</b></p>
                {/* <h3>Locally Owned & Operated</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero tempor elit tincidunt sollicitudin id et dolor. Proin iaculis, dui ac facilisis malesuada, magna nisi commodo odio, in pretium metus dui quis nulla. Cras imperdiet ipsum non massa fermentum cursus. Cras blandit pharetra dui a vulputate.</p> */}
                <h3>Over 20 Years of Professional Experience</h3>
                <p>Our team of fully licensed and insured electrical contractors is more than capable of handling any kind of situation that you are facing when it comes to the electrical wiring of your home or business. We are flexible with our schedule, and we make sure to get the job done as quickly as possible when we know that you just want to see the electricity working again.</p>
                {/* <h3>24/7 Same-Day Emergency Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero tempor elit tincidunt sollicitudin id et dolor. Proin iaculis, dui ac facilisis malesuada, magna nisi commodo odio, in pretium metus dui quis nulla. Cras imperdiet ipsum non massa fermentum cursus. Cras blandit pharetra dui a vulputate.</p> */}
                <h3>Free Estimates & Consultations</h3>
                <p>We are available from 7:30am - 4:00pm during the week, so why not stop by and see what we are all about? If you give K & D Electric Company LLC a call today, you will be able to get a free consultation from a professional Bristow, VA, electrical contractor.</p>
            </div>
        </section>
    )
}
