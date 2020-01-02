import React from 'react'

// Icons
import { Icon } from 'react-icons-kit';
import { building, home, wrench, dollar } from 'react-icons-kit/fa';

export default function Services() {
    return (
        <>
        <section className="services">
            <div className="container">
                <div className="header">
                    <div className="section-divder"></div>
                    <h1>Services</h1>
                    <h2>There is only one local team to turn to when you need high-quality!</h2>
                </div>
            </div>
        </section>
        
        <section className="content">
            <div className="container">
                <div className="item">
                    <Icon size={48} icon={building}></Icon>
                    <h3>Commercial</h3>
                    <p>So whether you need an entire building rewired or are simply looking to update your current setup, K & D Electric Company LLC is at your service. Call today!</p>
                </div>
                <div className="item">
                    <Icon size={48} icon={home}></Icon>
                    <h3>Residential</h3>
                    <p>We have more than 20 years of professional experience in the world of electrical services and repairs. When you allow us to take care of your electrical needs, you can expect a quick response to any kind of electrical emergency that you are dealing with at your home.</p>
                </div>
                <div className="item">
                    <Icon size={48} icon={wrench}></Icon>
                    <h3>General</h3>
                    <p>Our team of fully licensed and insured electrical contractors is more than capable of handling any kind of situation that you are facing when it comes to the electrical wiring of your home or business.</p>
                </div>
                <div className="item">
                    <Icon size={48} icon={dollar}></Icon>
                    <h3>Free Estimates & Consultations</h3>
                    <p>We are available from 7:30am - 4:00pm during the week, so why not stop by and see what we are all about? If you give K & D Electric Company LLC a call today, you will be able to get a free consultation from a professional Bristow, VA, electrical contractor.</p>
                </div>
            </div>
        </section>
        </>
    )
}
 