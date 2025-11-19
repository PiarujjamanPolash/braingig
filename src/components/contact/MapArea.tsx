"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logos/logo.webp"
const MapArea: React.FC = () => {

    return (
        <section id="meet-us" className="lg:pt-40">
            <div className="td-contact-map-area">
                <div className="p-0">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="td-contact-map relative">
                                <div className="td-contact-map-wrap">
                                    <Image 
                                        width={259}
                                        height={71}
                                        className="mb-10 lg:mb-[100px]"
                                        src={logo}
                                        alt=""
                                    />
                                    <h6 className="mb-[25px]">Contact info:</h6>
                                    <Link href="https://wa.me/+8801701064640">+880 1701-064640</Link>
                                    <Link className="mb-[10px] block" href="mailto:braingigllc@gmail.com">
                                        braingigllc@gmail.com
                                    </Link>
                                    <Link href="#" className="block">
                                                166(4th floor), Alokar Mor, Rajshahi 6100, Station Rd, Rajshahi 6100
                                    </Link>
                                </div>

                                <div className="td-contact-map-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.3060884367733!2d88.6031398!3d24.3706532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef006aa80da1%3A0x688cbfd89873ba7f!2sBrainGig%20LLC!5e0!3m2!1sen!2sbd!4v1756452136790!5m2!1sen!2sbd"
                                        width="300"
                                        height="250"
                                        loading="lazy"
                                        style={{ border: 0 }}
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapArea;
