import "../styles/contact.css";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        _replyto: "", // Change email to _replyto
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact">
            <h1>Contact</h1>
            <p>Feel free to contact me with any enquiries using the form below.</p>
            <div id="contact-form">
                <form
                    action="https://formspree.io/f/xeqykrak"
                    method="POST"
                >
                    <div id = "name-container">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div id = "email-container">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="_replyto" // Update name to _replyto
                            value={formData._replyto} // Update value to formData._replyto
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div id = "message-container">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
