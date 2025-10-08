"use client"
import Brands from '@/components/shared/Brands'
const Partners: React.FC = () => {

    return (
        <div
      className="td-brand-3-area include-bg py-[75px] bg-[url('/images/index-3/partners-bg.png')]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="td-brand-wrap">
              <Brands />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Partners;
