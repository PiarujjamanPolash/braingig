"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";

const MainArea: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                toast.error(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="pt-15 lg:pt-30">
            <div className="container td-contact-main">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Left Column */}
                        <div
                            className="w-full lg:w-5/12 td-contact-title-wrap flex justify-center lg:justify-start mb-4"
                        >
                            <h2 className="td-contact-main-title w-full text-5xl font-medium td-text-invert-orange text-center lg:text-start text-secondary">
                                Let’s talk for <br />
                                better result
                            </h2>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-7/12">
                            <div
                                className="td-contact-form-box"
                            >
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-full px-2 mb-[25px]">
                                            <label htmlFor="name" className="block mb-2 text-lg lg:text-2xl font-medium">Name</label>
                                            <input 
                                                className="td-input placeholder:text-gray-400!" 
                                                name="name" 
                                                id="name" 
                                                type="text" 
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="w-full md:w-6/12 px-2 mb-[25px]">
                                            <label htmlFor="email" className="block mb-2 text-lg lg:text-2xl font-medium">Email</label>
                                            <input 
                                                className="td-input placeholder:text-gray-400!" 
                                                name="email" 
                                                id="email" 
                                                type="email" 
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="w-full md:w-6/12 px-2 mb-[25px]">
                                            <label htmlFor="phone" className="block mb-2 text-lg lg:text-2xl font-medium">Phone</label>
                                            <input 
                                                className="td-input placeholder:text-gray-400!" 
                                                name="phone" 
                                                id="phone" 
                                                type="tel" 
                                                placeholder="Enter your number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        {/* <div className="w-full px-2 mb-[25px]">
                                            <label htmlFor="website" className="block mb-2 text-lg lg:text-2xl font-medium">Website</label>
                                            <input className="td-input placeholder:text-gray-400!" name="website" id="website" type="text" placeholder="Enter your website"/>
                                        </div> */}

                                        <div className="w-full px-2 mb-[30px]">
                                            <label htmlFor="message" className="block mb-2 text-lg lg:text-2xl font-medium">Message</label>
                                            <textarea
                                                className="td-input placeholder:text-gray-400! message pt-3"
                                                name="message"
                                                id="message"
                                                cols={30}
                                                rows={10}
                                                placeholder="Tell us how we can help you…"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="w-full px-2 flex justify-center lg:justify-start">
                                            <button type="submit" disabled={isSubmitting} className="td-btn-group flex w-fit">
                                                <span className="td-btn-circle">
                                                    <FaArrowRight />
                                                </span>
                                                <span className="td-btn-2 td-btn-primary">
                                                    {isSubmitting ? 'Sending...' : 'Send message'}
                                                </span>
                                                <span className="td-btn-circle">
                                                    <FaArrowRight />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainArea;
