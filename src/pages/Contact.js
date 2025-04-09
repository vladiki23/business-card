import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ onClose }) => {
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/ajax/pro.dronepilot.uk@gmail.com", {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: formData
            });

            if (response.ok) {
                setShowSuccess(true);
                form.reset(); // очистить форму

                setTimeout(() => {
                    setShowSuccess(false);
                    onClose(); // закрыть модалку
                }, 5000);
            }
        } catch (error) {
            console.error("Sending failed:", error);
        }
    };

    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">LET’S CREATE ONE MORE MASTERPIECE!</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {showSuccess && (
                            <div className="alert alert-success text-center" role="alert">
                                Thank you! Your message has been sent.
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" id="name"
                                       placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" className="form-control" id="email"
                                       placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea name="message" className="form-control" id="message" rows="4"
                                          placeholder="Enter your message" required />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;




