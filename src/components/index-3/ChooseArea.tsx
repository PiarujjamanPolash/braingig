"use client"
import Brands from '@/components/shared/Brands'
import Image from 'next/image';
const ChooseArea: React.FC = () => {

    return (
        <section className="td-chose-area td-btn-trigger pt-[150px] pb-[80px]">
      <div className="px-4">
        <div className="container mx-auto flex flex-wrap">
          {/* Title */}
          <div className="w-full lg:w-10/12 xl:w-7/12">
            <div
              className="td-chose-3-title-wrap mb-[75px] wow fadeInUp"
              data-wow-delay=".7s"
              data-wow-duration="1s"
            >
              <h2 className="td-section-3-title">
                We are result driven, customer oriented{" "}
                <span>digital media agency</span> with years of combined experience.
              </h2>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-6/12 xl:w-7/12">
            <div className="td-chose-3-thumb text-center td-btn-bounce mb-[30px]">
              <Image
                src="/images/index-3/choose-img.png"
                alt=""
                width={275}
                height={359}
              />
            </div>
          </div>

          {/* List */}
          <div className="w-full lg:w-6/12 xl:w-5/12">
            <div className="td-chose-3-list-wrap mr-[110px] mb-[30px]">
              <div className="td-chose-3-list mb-[55px]">
                <h6 className="mb-[20px]">We drive positive change.</h6>
                <p>
                  We are excited for our work and how it positively impacts clients. With over of experience
                  <br />
                  we have been constantly
                </p>
              </div>
              <div className="td-chose-3-list">
                <h6 className="mb-[20px]">We drive positive change.</h6>
                <p>
                  We are excited for our work and how it positively impacts clients. With over of experience
                  <br />
                  we have been constantly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ChooseArea;
