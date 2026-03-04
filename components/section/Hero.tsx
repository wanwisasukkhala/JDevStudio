"use client";

import React from "react";

const floatingIcons = [
  {
    src: "/Image/icon/icons8-figma-96.png",
    pos: "top-[0%] left-[-5%]",
    delay: "0s",
    duration: "3000ms",
  },
  {
    src: "/Image/icon/icons8-postman-inc-100.png",
    pos: "top-[5%] right-[-5%]",
    delay: "0.5s",
    duration: "3500ms",
  },
  {
    src: "/Image/icon/icons8-visual-studio-code-96.png",
    pos: "top-[40%] left-[-15%]",
    delay: "1s",
    duration: "4000ms",
  },
  {
    src: "/Image/icon/icons8-nextjs-96.png",
    pos: "top-[50%] right-[-15%]",
    delay: "0.7s",
    duration: "3800ms",
  },
  {
    src: "/Image/icon/drawio.png",
    pos: "bottom-[10%] left-[-8%]",
    delay: "1.2s",
    duration: "4200ms",
  },
  {
    src: "/Image/icon/icons8-sql-96.png",
    pos: "bottom-[5%] right-[-5%]",
    delay: "0.2s",
    duration: "3200ms",
  },
  {
    src: "/Image/icon/icons8-github-logo-96.png",
    pos: "top-[-15%] left-[40%]",
    delay: "0.8s",
    duration: "3600ms",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#F0F7FF] flex items-center justify-center py-10 px-6 sm:px-10 md:px-16 lg:px-24 font-sans text-[#1A4B6E] overflow-hidden">
      {/* --- Wave Animation Background --- */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-0 pointer-events-none">
        <svg
          className="relative block w-full h-[150px] min-h-[100px] max-h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(61, 178, 255, 0.1)"
              className="wave-anim-1"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(61, 178, 255, 0.2)"
              className="wave-anim-2"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(61, 178, 255, 0.3)"
              className="wave-anim-3"
            />
            <use
              href="#gentle-wave"
              x="48"
              y="7"
              fill="rgba(61, 178, 255, 0.5)"
              className="wave-anim-4"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* --- ฝั่งเนื้อหา (Text Content) --- */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 text-[#3DB2FF] tracking-wide">
            Hi I'm
          </p>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tighter text-[#1A4B6E] leading-[0.9]">
              Wanwisa
            </h2>
            <h2 className="text-5xl sm:text-7xl xl:text-8xl font-extrabold tracking-tighter text-[#1A4B6E] leading-[0.9] ml-[1ch] sm:ml-[2ch]">
              Sukkhala
            </h2>
          </div>

          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A4B6E]/80 mb-6 sm:mb-10 flex items-center gap-2 sm:gap-3">
            <span className="text-[#3DB2FF] font-light text-3xl sm:text-4xl">
              /
            </span>
            <span className="text-[#3DB2FF]">JDev</span>
            {/* ส่วน Studio เป็นสีดำ (Slate-900 จะให้ความรู้สึกพรีเมียมกว่าดำสนิท) */}
            <span className="text-slate-900 ml-1">Studio</span>
          </h1>

          <div className="max-w-md lg:max-w-lg">
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 font-medium leading-relaxed border-l-4 border-[#3DB2FF] pl-4 sm:pl-6 text-left">
              Full-stack Developer <br />
              <span className="text-sm sm:text-base italic text-gray-400 mt-2 block">
                เราเป็นนักพัฒนาที่มุ่งมั่นในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย
                โดยเน้นการทำงานที่เป็นระบบและออกแบบที่คำนึงถึงผู้ใช้งานเป็นหลัก
              </span>
            </p>
          </div>
        </div>

        {/* --- ฝั่งรูปภาพ (Hero Image) --- */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center py-10">
          <div className="absolute w-[100%] h-[100%] sm:w-[120%] sm:h-[120%]  rounded-full blur-3xl -z-10 animate-pulse"></div>

          <div className="relative z-10 w-full max-w-[260px] sm:max-w-[380px] lg:max-w-[480px]">
            <img
              src="/Image/bg1.png"
              alt="Profile"
              className="w-full h-auto "
            />

            {/* ไอคอนลอย */}
            {floatingIcons.map((icon, index) => (
              <div
                key={index}
                className={`absolute ${icon.pos} bg-white/90 backdrop-blur-md p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg border border-white animate-bounce z-20 
                  scale-[0.6] sm:scale-[0.8] lg:scale-100 transition-all duration-500`}
                style={{
                  animationDuration: icon.duration,
                  animationDelay: icon.delay,
                }}
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 relative">
                  <img
                    src={icon.src}
                    alt="skill icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .parallax > use {
          animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
            infinite;
        }
        .wave-anim-1 {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .wave-anim-2 {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .wave-anim-3 {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .wave-anim-4 {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        /* สำหรับหน้าจอมือถือให้คลื่นเล็กลง */
        @media (max-width: 768px) {
          .parallax > use {
            animation-duration: 10s;
          }
        }
      `}</style>
    </section>
  );
}
