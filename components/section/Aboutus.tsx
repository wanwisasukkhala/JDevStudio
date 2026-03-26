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
              <span className="text-white font-semibold">"JDev"</span> นักพัฒนา{" "}
              <span className="text-white border-b border-[#3DB2FF]">
                Web Developer & UX/UI design
              </span>{" "}
              ที่มีจุดเริ่มต้นที่น่าสนใจจากสายงาน{" "}
              <span className="text-white">Software Tester</span>
            </p>

            {/* ย่อหน้าขยายความ: ทักษะพิเศษ */}
            <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
              ด้วยพื้นฐานด้าน <span className="italic text-white">Tester</span>{" "}
              เราจึงเชี่ยวชาญเป็นพิเศษในการวิเคราะห์ Requirement
              และเปลี่ยนโจทย์ธุรกิจให้เป็นผลงานที่แม่นยำ ส่งผลให้งานออกแบบ
              <span className="text-white"> UX/UI </span> และการพัฒนา
              <span className="text-white"> Web Development </span>
              ของเรามีความเสถียรและตอบโจทย์ผู้ใช้จริง ไม่ว่าจะเป็นการสร้าง UI
              ด้วย **React** การวางระบบหลังบ้านด้วย **Node.js**
              และจัดการฐานข้อมูลทั้ง **SQL Server, pgAdmin และ MySQL**
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="/File/wanwisa.skl.pdf" // ระบุ Path ของไฟล์ PDF (ควรใส่ไว้ในโฟลเดอร์ public)
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e5f2fe] text-black px-10 py-4 rounded-full font-bold hover:bg-[#bbe5f1] transition-all transform hover:-translate-y-1 inline-block"
            >
              Download CV (Thai)
            </a>
            <a
              href="/File/wanwisa.skl-Eng.pdf" // ระบุ Path ของไฟล์ PDF (ควรใส่ไว้ในโฟลเดอร์ public)
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#72b2f3] text-black px-10 py-4 rounded-full font-bold hover:bg-[#bbe5f1] transition-all transform hover:-translate-y-1 inline-block"
            >
              Download CV (English)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
