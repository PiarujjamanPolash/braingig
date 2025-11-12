"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const MainArea: React.FC = () => {

    return (
        <div className="w-[90%] mx-auto">
            <div className="td-contact-main py-15 lg:py-20">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Left Column */}
                        <div className="w-full lg:w-5/12">
                            <div
                                className="td-contact-title-wrap mb-[30px]"
                            >
                                <h2 className="td-contact-main-title text-5xl font-medium td-text-invert-orange text-center lg:text-start text-secondary">
                                    Let’s talk for <br />
                                    better result
                                </h2>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-7/12">
                            <div
                                className="td-contact-form-box"
                            >
                                <form id="contact-form" action="assets/mail.php" method="POST">
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="w-full px-2 mb-[25px]">
                                            <label htmlFor="name">Name</label>
                                            <input className="td-input" name="name" id="name" type="text" />
                                        </div>

                                        <div className="w-full md:w-6/12 px-2 mb-[25px]">
                                            <label htmlFor="email">Email</label>
                                            <input className="td-input" name="email" id="email" type="text" />
                                        </div>

                                        <div className="w-full md:w-6/12 px-2 mb-[25px]">
                                            <label htmlFor="phone">Phone</label>
                                            <input className="td-input" name="phone" id="phone" type="text" />
                                        </div>

                                        <div className="w-full px-2 mb-[25px]">
                                            <label htmlFor="website">Website</label>
                                            <input className="td-input" name="website" id="website" type="text" />
                                        </div>

                                        <div className="w-full px-2 mb-[30px]">
                                            <label htmlFor="message">Message</label>
                                            <textarea
                                                className="td-input message"
                                                name="message"
                                                id="message"
                                                cols={30}
                                                rows={10}
                                            ></textarea>
                                        </div>

                                        <div className="w-full px-2 flex justify-center lg:justify-start">
                                            <button type="submit" className="td-btn-group">
                                                <Link href={''} className="td-btn-circle">
                                                    <FaArrowRight />
                                                </Link>
                                                <Link href={''} className="td-btn-2 td-btn-primary">Send message</Link>
                                                <Link href={''} className="td-btn-circle">
                                                    <FaArrowRight />
                                                </Link>
                                            </button>
                                            <p className="ajax-response pt-[20px]"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainArea;
