"use client"

const Hero: React.FC = () => {

  return (
    <div
      className="td-hero-area td-hero-3-spacing fix include-bg bg-[url('/images/index-3/hero-bg.png')]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full mx-auto">
            <div className="td-hero-3-title-wrap">
              <h2 className="td-hero-3-title text-center td-split-text td-split-in-right text-4xl md:text-5xl font-bold leading-tight">
                Explore. List. Grow. <span>All in One Directory.</span>
              </h2>

              <div
                className="td-hero-3-content pt-[100px] relative animate-fadeInUp"
                data-wow-delay=".3s"
                data-wow-duration="1s"
              >
                <img
                  className="td-hero-3-shape"
                  src="/images/index-3/hero-icon.png"
                  alt=""
                />

                <div className="flex flex-wrap items-center">
                  {/* Left Column */}
                  <div className="w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/6 2xl:w-1/6">
                    <div className="relative mb-8 inline-block">
                      <img
                        className="likes"
                        src="/images/index-3/hero-like.png"
                        alt=""
                      />
                      <img
                        className="round-text td-live-anim-spin"
                        src="/images/index-3/hero-text.png"
                        alt=""
                      />
                    </div>
                  </div>

                  {/* Middle Column */}
                  <div className="hidden sm:block w-full lg:w-2/6 xl:w-5/12">
                    <div className="td-hero-3-border mb-8 block border-b border-gray-300"></div>
                  </div>

                  {/* Right Column */}
                  <div className="w-full sm:w-1/2 lg:w-5/12 xl:w-1/3">
                    <div className="td-hero-3-content-para mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        Build your community with a smart directory platform that makes discovery effortless. Add listings, explore services, manage users, and monetize your directory — all with sleek design and powerful features built for growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
