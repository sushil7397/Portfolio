import React, { useState } from "react";
import "../Style/CSS/contact.css";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        const formData = new FormData(form.current);

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.get('your_name'),
                    email: formData.get('your_email'),
                    message: formData.get('message'),
                }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage('Message sent successfully! I\'ll get back to you soon.');
                setMessageType('success');
                form.current.reset();
            } else {
                setMessage('Failed to send message. Please try again.');
                setMessageType('error');
            }
        } catch (error) {
            setMessage('Server not reachable. Please email me directly.');
            setMessageType('error');
        } finally {
            setIsLoading(false);
            setTimeout(() => {
                setMessage('');
                setMessageType('');
            }, 5000);
        }
    };

    return (
        <section className="Section" id="Contact">
            <h2 className="h2contact">Contact Me</h2>
            <div className="contact-container">
                <div className="talk">
                    <h2 className="talkh2">Talk To Me</h2>
                    <a href="mailto:sushily2302@gmail.com" className="contact-card-link">
                        <div className="email">
                            <FontAwesomeIcon className='Cicon' icon={faEnvelope} />
                            <h4 className="h4style">Email</h4>
                            <p className="contactp">sushily2302@gmail.com</p>
                        </div>
                    </a>
                    <a href="https://wa.link/0y1j07" target="_blank" rel="noreferrer" className="contact-card-link">
                        <div className="email">
                            <FontAwesomeIcon className='Cicon' icon={faWhatsapp} />
                            <h4 className="h4style">WhatsApp</h4>
                            <p className="contactp">+91 7666 718 264</p>
                        </div>
                    </a>
                    <a href="tel:+917666718264" className="contact-card-link">
                        <div className="email">
                            <FontAwesomeIcon className='Cicon' icon={faPhone} />
                            <h4 className="h4style">For Call</h4>
                            <p className="contactp">+91 7666 718 264</p>
                        </div>
                    </a>
                </div>
                <div className="message">
                    <h2 className="messh2">Write Your Message</h2>
                    <div className="contactForm">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="formBox">
                                <div className="inputBox">
                                    <input className="inputArea" type="text" name="your_name" required="required"/>
                                    <span className="spanText">Full Name</span>
                                </div>
                            </div>
                            <div className="formBox">
                                <div className="inputBox">
                                    <input className="inputArea" type="email" name="your_email" required="required"/>
                                    <span className="spanText">Email</span>
                                </div>
                            </div>
                            <div className="formBox">
                                <div className="inputBox">
                                    <textarea name='message' className="TextinputArea" required="required"></textarea>
                                    <span className="spanText">Type your Message....</span>
                                </div>
                            </div>
                            <div className="inputBox">
                                <input
                                    className="butt"
                                    type="submit"
                                    value={isLoading ? "Sending..." : "Send Message"}
                                    disabled={isLoading}
                                />
                            </div>
                            {message && (
                                <div className={`message-feedback ${messageType}`}>
                                    <FontAwesomeIcon
                                        icon={messageType === 'success' ? faCheckCircle : faExclamationTriangle}
                                    />
                                    <span>{message}</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
