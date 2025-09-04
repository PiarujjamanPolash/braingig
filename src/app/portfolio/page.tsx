"use client";

import Projects from "@/components/portfolio/Projects";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ClientWrapper from "@/components/wrappers/ClientWrapper";

const Portfolio = () => {

    return (
        <ClientWrapper>
            <div className="mb-[120px]">
                <Breadcrumb
                    subtitle="LATEST PORTFOLIO"
                    title={
                        <>
                            Showcasing <span>Passion & Precision</span>
                        </>
                    }
                />
                <Projects />
            </div>

        </ClientWrapper>
    );
};

export default Portfolio;
