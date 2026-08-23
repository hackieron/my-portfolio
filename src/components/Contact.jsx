import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
} from "react-icons/fa";
function Contact() {
    const form = useRef();

    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        setStatus("SENDING...");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setStatus("MESSAGE SENT SUCCESSFULLY.");

                    form.current.reset();

                    toast.success("Message sent successfully! ");
                },
                () => {
                    setStatus("FAILED TO SEND MESSAGE.");

                    toast.error(import.meta.env.VITE_EMAILJS_SERVICE_ID);
                }
            );
    };

    return (
        <>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: "#111",
                        color: "#fff",
                        border: "1px solid #2ee6a6",
                        borderRadius: "4px",
                        fontFamily: "inherit",
                        fontSize: "13px",
                    },
                    success: {
                        iconTheme: {
                            primary: "#2ee6a6",
                            secondary: "#111",
                        },
                    },
                }}
            />
            <section className="contact-panel" id="contact">
                <div className="panel-title">
                    <span className="mint">●</span>
                    CONTACT
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <span className="contact-label">GET IN TOUCH</span>

                        <h2>Let's build something together.</h2>

                        <p>
                            I'm currently seeking full-time opportunities as a Full Stack Developer and would love to contribute to meaningful projects with a great team.
                        </p>

                        <div className="contact-details">
                            <a href="mailto:albaniakier@email.com">
                                <span className="detail-icon"><FaEnvelope size={12} /></span>
                                albaniakier@email.com
                            </a>
                            <a href="tel:+639XXXXXXXXX">
                                <span className="detail-icon"><FaPhone size={12} /></span>
                                +63 926 271 1181
                            </a>
                            <a href="https://github.com/hackieron" target="_blank" rel="noreferrer">
                                <span className="detail-icon"><FaGithub size={12} /></span>
                                github.com/hackieron
                            </a>

                            <a
                                href="https://www.linkedin.com/in/krnalbania/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="detail-icon"><FaLinkedin size={12} /></span>
                                linkedin.com/in/krnalbania
                            </a>
                        </div>
                    </div>

                    <form
                        ref={form}
                        className="contact-form"
                        onSubmit={sendEmail}
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">SUBJECT</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="What would you like to talk about?"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">MESSAGE</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={status === "SENDING..."}
                        >
                            <span>›</span>
                            {status === "SENDING..." ? "SENDING..." : "SEND MESSAGE"}
                        </button>
                    </form>
                </div>


            </section>
        </>
    );
}

export default Contact;