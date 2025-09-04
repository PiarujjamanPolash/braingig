"use client"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const MainArea: React.FC = () => {

    return (
        <div className="w-[90%] mx-auto">
            {/* td-contact-main-area */}
            <div className="td-contact-main pt-[155px] pb-[120px]">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Left Column */}
                        <div className="w-full lg:w-5/12">
                            <div
                                className="td-contact-title-wrap mb-[30px] wow fadeInLeft"
                                data-wow-delay=".5s"
                                data-wow-duration="1s"
                            >
                                <h2 className="td-contact-main-title">
                                    Let’s talk for<br />
                                    better <span>result</span>
                                </h2>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-7/12">
                            <div
                                className="td-contact-form-box mb-0 md:mb-[30px]"
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

                                        <div className="w-full px-2">
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
            {/* td-contact-main-end */}

        </div>
    );
};

export default MainArea;
