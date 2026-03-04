"use client";


export default function AboutUs() {
  return (
    <section className="min-h-screen bg-[#0f2136] py-20 px-6 sm:px-10 md:px-20 lg:px-32 font-sans text-white overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ฝั่งซ้าย: รูปภาพพร้อมกรอบเยื้อง */}
        <div className="relative group mx-auto lg:mx-0 order-1">
          <div className="absolute -inset-2 border-2 border-[#8CFF3D] rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 translate-y-4 -z-10"></div>
          <div className="relative w-[280px] h-[330px] sm:w-[400px] sm:h-[480px] overflow-hidden rounded-lg shadow-2xl bg-[#111]">
            <img
              src="/Image/myJdev-2.png"
              alt="About Me"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* ฝั่งขวา: เนื้อหาข้อความ */}
        <div className="space-y-8 order-2">
          <div className="flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#72b2f3]"></span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              เกี่ยวกับ <span className="text-[#72b2f3]">เรา</span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* ย่อหน้าหลัก: แนะนำตัวและจุดแข็ง */}
            <p className="text-gray-200 leading-[1.8] text-lg lg:text-xl font-light">
              <span className="text-[#3DB2FF] font-bold text-2xl block mb-2">
                วันวิสา สุขคะละ
              </span>
              หรือที่รู้จักในนาม{" "}
              <span className="text-white font-semibold">"JDev"</span> นักพัฒนา
              Full-Stack ที่มีจุดเริ่มต้นที่น่าสนใจจากสายงาน{" "}
              <span className="text-white border-b border-[#3DB2FF]">
                Quality Assurance (QA)
              </span>
            </p>

            {/* ย่อหน้าขยายความ: ทักษะพิเศษ */}
            <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
              ด้วยพื้นฐานด้าน QA เราจึงมีความเชี่ยวชาญเป็นพิเศษในการวิเคราะห์
              Requirement และเปลี่ยนโจทย์ธุรกิจให้เป็น{" "}
              <span className="italic">Test Scenarios</span> ที่แม่นยำ
              ส่งผลให้งานพัฒนาในฐานะ{" "}
              <span className="text-white">Full-Stack Developer</span> ของเรา
              มีความเสถียรและตอบโจทย์ผู้ใช้งานจริงอย่างมีประสิทธิภาพ
              ไม่ว่าจะเป็นการสร้าง UI ด้วย React
              หรือการวางโครงสร้างระบบหลังบ้านด้วย Node.js เป็นต้น
              และจัดการฐานข้อมูลด้วย SQL Server , pgAdmin และ mySQL
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-[#72b2f3] text-black px-10 py-4 rounded-full font-bold hover:bg-[#72b2f3] transition-all transform hover:-translate-y-1">
              Download CV
            </button>
            <button className="border-2 border-[#72b2f3] text-[#72b2f3] px-10 py-4 rounded-full font-bold hover:bg-[#72b2f3] hover:text-black transition-all">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
