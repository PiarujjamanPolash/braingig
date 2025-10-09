"use client"
import Image from 'next/image';
import Link from 'next/link';
const Portfolio: React.FC = () => {
  const portfolioData = {
    title: "Take a look at our digital studio showcases",
    description:
      "We are excited for our work and how it positively impacts clients. With years of experience, we have been constantly creating impactful work for our clients.",
    projects: [
      {
        tag: "Branding",
        title: "Zumarcons Firm",
        img: "/images/index-3/portfolio-1.jpg",
        link: "portfolio-details.html",
      },
      {
        tag: "Identity",
        title: "Stellar Vibes",
        img: "/images/index-3/portfolio-1.jpg",
        link: "portfolio-details.html",
      },
      {
        tag: "Application",
        title: "Entherum App",
        img: "/images/index-3/portfolio-1.jpg",
        link: "portfolio-details.html",
      },
      {
        tag: "Business",
        title: "Electrobox Ginny",
        img: "/images/index-3/portfolio-1.jpg",
        link: "portfolio-details.html",
      },
      {
        tag: "Agency",
        title: "Zoik Water",
        img: "/images/index-3/portfolio-1.jpg",
        link: "portfolio-details.html",
      },
      {
        tag: "Creative",
        title: "Tommy Hilfiger",
        img: "/images/index-3/portfolio-1.jpg",
        link: "portfolio-details.html",
      },
    ],
    viewAll: {
      text: "View all project",
      link: "service.html",
    },
  };

  // ✅ Split projects into two roughly equal columns
  const middleIndex = Math.ceil(portfolioData.projects.length / 2);
  const leftColumn = portfolioData.projects.slice(0, middleIndex);
  const rightColumn = portfolioData.projects.slice(middleIndex);

  const arrowIcon = (
    <svg
      width="19"
      height="15"
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75293 7.49988H17.7416"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M11.0513 0C11.0513 4.14553 14.6064 7.5 18.9998 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
      <path
        d="M18.9998 7.49988C14.6064 7.49988 11.0513 10.8543 11.0513 14.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );

  return (
    <div className="td-portfolio-area td-portfolio-3-bg pt-[150px] pb-[160px] px-5 md:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="grid grid-cols-5 pb-[80px] gap-8 lg:gap-0">
          <div className="col-span-5 lg:col-span-3">
            <div className="td-portfolio-3-title-wrap">
              <h2 className="td-section-3-title td-section-3-title-white td-split-text td-split-in-right">
                {portfolioData.title}
              </h2>
            </div>
          </div>
          <div className="col-span-5 lg:col-span-2">
            <div
              className="td-portfolio-3-title-para wow fadeInUp"
              data-wow-delay=".5s"
              data-wow-duration="1s"
            >
              <p>{portfolioData.description}</p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-[80px]">
          {/* Left Column */}
          <div className="">
            {leftColumn.map((item, i) => (
              <div
                key={i}
                className="td-portfolio-3-wrap mb-[90px] wow fadeInUp"
                data-wow-delay={`${0.2 * (i + 1)}s`}
                data-wow-duration="1s"
              >
                <div className="td-portfolio-3-thumb mb-[20px]">
                  <Image
                    className="w-full"
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                </div>
                <div className="td-portfolio-3-content flex justify-between align-end">
                  <div className="td-portfolio-3-title">
                    <span className="tag">{item.tag}</span>
                    <h6 className="title mb-0">
                      <Link href={item.link} className="underline-white">
                        {item.title}
                      </Link>
                    </h6>
                  </div>
                  <Link className="icon flex justify-center items-center" href={item.link}>
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75293 7.49988H17.7416"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M11.0513 0C11.0513 4.14553 14.6064 7.5 18.9998 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M18.9998 7.49988C14.6064 7.49988 11.0513 10.8543 11.0513 14.9999"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="pt-0 lg:pt-[140px]">
            {rightColumn.map((item, i) => (
              <div
                key={i}
                className="td-portfolio-3-wrap mb-[90px] wow fadeInUp"
                data-wow-delay={`${0.2 * (i + 1)}s`}
                data-wow-duration="1s"
              >
                <div className="td-portfolio-3-thumb mb-[20px]">
                  <Image
                    className="w-full"
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                </div>
                <div className="td-portfolio-3-content flex justify-between align-end">
                  <div className="td-portfolio-3-title">
                    <span className="tag">{item.tag}</span>
                    <h6 className="title mb-0">
                      <Link href={item.link} className="underline-white">
                        {item.title}
                      </Link>
                    </h6>
                  </div>
                  <Link className="icon flex justify-center items-center" href={item.link}>
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75293 7.49988H17.7416"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M11.0513 0C11.0513 4.14553 14.6064 7.5 18.9998 7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M18.9998 7.49988C14.6064 7.49988 11.0513 10.8543 11.0513 14.9999"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* View All Button */}
        <div className="flex justify-start text-center">
          <Link href={portfolioData.viewAll.link} className="td-header-2-btn ml-[10px] flex justify-center items-center">
            <span className="icon flex justify-center items-center">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7767 7.47384C15.9198 7.62604 16 7.8316 16 8.04582C16 8.26004 15.9198 8.4656 15.7767 8.61781L8.92138 15.8429C8.77516 15.9903 8.58094 16.0729 8.37867 16.0737C8.27759 16.0732 8.17746 16.0529 8.08351 16.0134C7.94489 15.9522 7.8266 15.8488 7.74358 15.7167C7.66056 15.5845 7.61651 15.4294 7.61698 15.2709V8.84861H0.761697C0.559684 8.84861 0.365942 8.76404 0.223096 8.61348C0.0802502 8.46292 0 8.25874 0 8.04582C0 7.83291 0.0802502 7.62871 0.223096 7.47817C0.365942 7.32761 0.559684 7.24304 0.761697 7.24304H7.61698V0.820711C7.61651 0.662221 7.66056 0.507129 7.74358 0.374983C7.8266 0.242834 7.94489 0.139545 8.08351 0.0781301C8.2242 0.0202932 8.37756 0.00562 8.52585 0.0358103C8.67412 0.065999 8.81125 0.139818 8.92138 0.248724L15.7767 7.47384Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>{portfolioData.viewAll.text}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
