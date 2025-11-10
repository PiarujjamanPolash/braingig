"use client"
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/portfolio/Projects"));
const Breadcrumb = dynamic(() => import("@/components/shared/Breadcrumb"));
const ClientWrapper = dynamic(() => import("@/components/wrappers/ClientWrapper"));

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
