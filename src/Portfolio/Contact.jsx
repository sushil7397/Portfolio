import React from "react";
import "../Style/CSS/contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
    const form = useRef();
  

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7f0hi7l', 'template_vizhjbj', form.current, 'ZL89GgBQNUM7N7Tou')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

      

  return (
    <section className="Section">
        <h2 className="h2contact">Contact me</h2>
        <div className="Contact">
            <div className="talk">
                <h2 className="talkh2">Talk To Me</h2>
                <div className="email">
                    <FontAwesomeIcon className='Cicon' icon={faEnvelope} />
                    <h4 className="h4style">Email</h4>
                    <p className="contactp">sushily2302@gmail.com</p>

                </div>
                <div className="email">
                    <FontAwesomeIcon className='Cicon' icon={faWhatsapp} />
                    <h4 className="h4style">WhatsApp</h4>
                    <p className="contactp">+91 7666 718 264</p>
                </div>
                <div className="email">
                    <FontAwesomeIcon className='Cicon' icon={faPhone} />
                    <h4 className="h4style">For Call</h4>
                    <p className="contactp">+91 7666 718 264</p>

                </div>
            </div>
            <div className="message">
                    <h2 className="messh2">Write Your Message</h2>
                    <div className="contactForm">
                        <form ref={form} onSubmit={sendEmail}>
                        <div className="formBox">
                            <div class="inputBox">
                                <input className="inputArea" type="text" name="your_name" required="required"/>
                                <span className="spanText">Full Name</span>
                            </div>
                        </div>
                        <div className="formBox">
                            <div class="inputBox">
                                <input className="inputArea" type="email" name="your_email" required="required"/>
                                <span className="spanText">Email</span>
                            </div>
                        </div>
                        <div className="formBox">
                            <div class="inputBox">
                                <textarea name='message' className="TextinputArea" required="required"></textarea>
                                <span className="spanText">Type your Message....</span>
                            </div>
                        </div>
                        <div class="inputBox">
                            <input className="butt" type="submit" name="" value="Send"/>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>

  );
};

