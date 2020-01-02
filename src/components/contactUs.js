import React from 'react';
import ContactForm from "./contactForm";

// Icons
import { Icon } from 'react-icons-kit';
import { phone, envelope, mapMarker } from 'react-icons-kit/fa';

export default function contactUs() {
    return (
        <div className="contactus">
            <div className="container">
                <div className="info">
                    <h3>Contact Us</h3>
                    <p><Icon size={24} icon={phone}></Icon>703-335-0654</p>
                    <p><Icon size={24} icon={envelope}></Icon>someone@bristowelectronics.com</p>
                    <p><Icon size={24} icon={mapMarker}></Icon>Bristow, VA</p>
                    <div className="section-divider"></div>
                    <p>When was the last time that your Bristow, VA, electrician actually showed up on time and did the job properly the first time? If you need some electrical work completed in a timely manner, then give us a call today! K & D Electric Company LLC is the only name you need to know in the electrical business.</p>
                </div>
                <div className="hours">
                    <h3>Business Hours</h3>
                    <table>
                        <tr>
                            <th><h4>Day</h4></th>
                            <th><h4>Hours</h4></th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>7:30AM to 4:00PM</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>7:30AM to 4:00PM</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>7:30AM to 4:00PM</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>7:30AM to 4:00PM</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>7:30AM to 4:00PM</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>By Appointment</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>By Appointment</td>
                        </tr>
                    </table>
                </div>
                <div className="form">
                    <h3>Request a Free Consultation!</h3>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
