import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

function CardItem() {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);
  return (
    <a
      href="#"
      className="h-[330px] bg-gray-200 dark:bg-gray-800 rounded-2xl flex flex-col justify-end transition-all duration-300 ease-in-out relative overflow-hidden"
      title="Universal Resizer tool"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-300 ease-in-out bg-gray-500 w-full overflow-hidden ${
          isHovered ? 'h-full' : 'h-[208px]'
        }`}
      >
        <video
          className="w-full h-full object-cover transition-all duration-300 ease-in-out"
          ref={videoRef}
          loop
          muted
          playsInline
        >
          <source
            src="https://player.vimeo.com/external/484170071.sd.mp4?s=d0c8b94a7a618a8ebf8c5a65b4017891a5635f9a&profile_id=165"
            type="video/mp4"
          />
          <source
            src="https://player.vimeo.com/external/484170071.sd.mp4?s=d0c8b94a7a618a8ebf8c5a65b4017891a5635f9a&profile_id=165"
            type="video/webm"
          />
        </video>
      </div>
      <div
        className={`absolute bottom-4 flex w-full justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="whitespace-nowrap flex justify-center w-auto">
          <button className="transition-all select-none h-10 flex items-center justify-center text-sm font-medium gap-1.5 bg-blue-600 text-gray-100 hover:bg-primary-400 px-3 py-3 rounded-full w-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
            Try Now <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        className={`p-6 flex flex-col gap-2 text-gray-700 dark:text-gray-200 h-[123px] bg-blue-400 dark:bg-gray-800 transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex gap-2 text-2xl items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M33.2 12.5H26v-4h14v14h-4v-7.2L22.8 28.6 21.4 27.2 33.2 12.5Z" />
            <path d="M14 12.5H4v14h4v-7.2L22.8 28.6 21.4 27.2 14 12.5Z" />
          </svg>
          <h4 className="text-2xl font-bold font-secondary">Universal Resizer</h4>
        </div>
        <p className="text-base font-medium text-gray-600 dark:text-gray-400 leading-[140%] text-left line-clamp-2">
          Resize your images for any social media.
        </p>
      </div>
    </a>
  );
}

export default CardItem;
