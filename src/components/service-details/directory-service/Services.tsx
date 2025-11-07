"use client"
import { useRef } from 'react';
import Image from 'next/image';
import ServiceItems from './ServiceItems';
import FadeInUp from '@/components/animations/FadeInUp';

const services = [
  {
    title: "Custom Directory Design <div class='custom-class'> Tailored for Your Brand</div>",
    number: "S/01",
    delay: ".3"
  },
  {
    title: "Smart Listing Management <div class='custom-class'> Organize & Optimize Listings</div>",
    number: "S/02",
    delay: ".5"
  },
  {
    title: "Advanced Search <div class='custom-class'> Find Listings Instantly</div>",
    number: "S/03",
    delay: ".7"
  },
  {
    title: "Map & Location Tools <div class='custom-class'> Visualize Listings Easily</div>",
    number: "S/04",
    delay: ".3"
  },
  {
    title: "Paid & Promoted Listings <div class='custom-class'> Boost Your Visibility</div>",
    number: "S/05",
    delay: ".5"
  },
  {
    title: "Monetization, Subscriptions <div class='custom-class'> Maximize Revenue</div>",
    number: "S/06",
    delay: ".7"
  },
  {
    title: "SEO Optimization <div class='custom-class'> Rank Higher in Search</div>",
    number: "S/07",
    delay: ".4"
  },
  {
    title: "Analytics & Insights <div class='custom-class'>Track Performance</div>",
    number: "S/08",
    delay: ".5"
  },
  {
    title: "Secure & Reliable Platform <div class='custom-class'> Protect Your Data</div>",
    number: "S/09",
    delay: ".6"
  },
];

const Services: React.FC = () => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);
  if (serviceRefs.current.length !== services.length) {
    serviceRefs.current = Array(services.length)
      .fill(null)
      .map((_, i) => serviceRefs.current[i] || null);
  }
  return (
    <div className="td-service-3-area pt-[100px] lg:pt-[150px] pb-[130px] grey-bg-3">
      <div className="container w-[90%] mx-auto px-4">
        <div className="flex justify-center">
          <div className="xl:w-8/12">
            <div className="td-service-3-title-wrap ml-16 mb-20 relative">
              <Image
                width={93}
                height={98}
                className="td-service-3-ok"
                src="/images/service-details/directory-service/service-ok.png"
                alt=""
              />
              <h2 ref={titleRef} className="td-section-3-title">
                Everything You Need to Build, <br />Promote, and Profit {" "}
                <span>from Your Directory </span>
              </h2>
              <FadeInUp targetRef={titleRef} delay={0.3} duration={1} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {services.map((item, index) => (
            <ServiceItems key={index} title={item.title} number={item.number} delay={item.delay} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;