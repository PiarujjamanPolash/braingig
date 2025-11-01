"use client"

import Link from "next/link";

const VideoArea: React.FC = () => {

    return (
       <div
      className="td-video-area include-bg bg-[url('/images/index-6/video-bg.jpg')] bg-cover bg-center bg-no-repeat"
      data-background="assets/img/video/video-6/bg.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="td-video-6-wrap text-end">
              <Link
                className="popup-video td-video-6-inner inline-flex items-center justify-center"
                href="https://www.youtube.com/watch?v=4t15D0LNJB0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12L0.5 23.2583V0.74167L20 12Z"
                    fill="#1C1D1F"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
};

export default VideoArea;
