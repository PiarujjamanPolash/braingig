"use client"
import { useRef, useState } from "react";
interface AccordionProps {
    data: { id: string; question: string; ans: string }[];
}
const Accordion: React.FC<AccordionProps> = ({ data }) => {
    const [openId, setOpenId] = useState<string | null>(data[1].id);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="td-faq-4-accordion">
            <div className="accordion">
                {data.map((item, index) => {
                    const isOpen = openId === item.id;
                    return (
                        <div key={item.id} className="accordion-items border-b border-gray-200">
                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-buttons w-full text-left py-[px] flex justify-between items-center   cursor-pointer ${isOpen ? "" : "collapsed"
                                        }`}
                                    type="button"
                                    onClick={() => toggleFAQ(item.id)}
                                >
                                    {item.question}
                                    <span className="plus-icon" aria-hidden="true"></span>
                                </button>
                            </h2>

                            <div
                                ref={(el) => { contentRefs.current[index] = el; }}
                                className="accordion-collapse overflow-hidden transition-all duration-500 ease-in-out"
                                style={{
                                    maxHeight: isOpen ? contentRefs.current[index]?.scrollHeight + "px" : "0px",
                                }}
                            >
                                <div className="accordion-body pb-4">
                                    <p>{item.ans}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Accordion;
