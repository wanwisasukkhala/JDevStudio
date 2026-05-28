"use client";

import React from "react";
import { motion } from "framer-motion";

// รวบรวมไอคอนทั้งหมดที่มีเพื่อจัดวางกระจายตัวเป็นวงกลมรอบศูนย์กลาง
const techIcons = [
  { name: "Figma", src: "/Image/icon/icons8-figma-96.png" },
  { name: "React", src: "/Image/icon/icons8-react-48.png" },
  { name: "C#.net", src: "/Image/icon/icons8-c++-48.png" },
  { name: "Node.js", src: "/Image/icon/icons8-nodejs-48.png" },
  { name: "Tailwind", src: "/Image/icon/icons8-tailwind-css-96.png" },
  { name: "JavaScript", src: "/Image/icon/icons8-javascript-48.png" },
  { name: "CSS", src: "/Image/icon/icons8-css-48.png" },
  { name: "Next.js", src: "/Image/icon/icons8-nextjs-96.png" },
  { name: "TypeScript", src: "/Image/icon/icons8-typescript-96.png" },
  { name: "Python", src: "/Image/icon/icons8-python-96.png" },
  { name: "SQL Server", src: "/Image/icon/icons8-sql-96.png" },
  { name: "MongoDB", src: "/Image/icon/icons8-mongodb-48.png" },
  { name: "HTML", src: "/Image/icon/icons8-html-48.png" },
  { name: "Bootstrap", src: "/Image/icon/icons8-bootstrap-96.png" },
  { name: "GitHub", src: "/Image/icon/icons8-github-logo-96.png" },
  { name: "VSCode", src: "/Image/icon/icons8-visual-studio-code-96.png" },
  { name: "Postman", src: "/Image/icon/icons8-postman-inc-100.png" },
  { name: "Docker", src: "/Image/icon/icons8-docker-96.png" },
];

export default function SkillsNetwork() {
  const center = 500; // จุดศูนย์กลาง X, Y ของพื้นที่ SVG (1000x1000)
  const radius = 370;  // ปรับเพิ่มรัศมีวงกลมให้ใหญ่ขึ้นอย่างเห็นได้ชัด (จากเดิม 280)
  const totalItems = techIcons.length;

  return (
    <section className="relative min-h-screen bg-[#0B0314] py-16 px-6 md:px-12 lg:px-24 overflow-hidden flex items-center justify-center font-sans text-white">
      {/* --- Background Grid Pattern (ธีมตารางม่วงเข้มให้เข้าเซ็ตกับหน้าอื่นๆ) --- */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B1556 1px, transparent 1px),
            linear-gradient(to bottom, #3B1556 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Container หลักแบ่งเป็น 2 ฝั่ง (ปรับสัดส่วน Grid เป็น 5:7 เพื่อให้ฝั่งซ้ายที่เป็นวงกลมมีพื้นที่กางปีกกว้างขึ้น) */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        
        {/* ========================================================= */}
        {/* 🔮 ฝั่งซ้าย (Left Column): วงกลมเครือข่ายเวอร์ชันขยายขนาดใหญ่ขึ้น */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 flex items-center justify-center relative w-full aspect-square max-w-[580px] md:max-w-[650px] mx-auto">
          
          {/* แกนกลาง (CORE) แยกออกมาอยู่นิ่ง ๆ ไม่หมุนตามใคร */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            className="absolute z-30 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#18092B] border border-purple-400/40 shadow-[0_0_60px_15px_rgba(168,85,247,0.35)] flex items-center justify-center select-none"
          >
            <span className="text-sm sm:text-base font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-400 font-sans">
              Skills
            </span>
          </motion.div>
          
          {/* แสงออร่าเรืองแสงด้านหลังแกนกลาง */}
          <div className="absolute w-44 h-44 rounded-full bg-purple-600/10 blur-3xl z-0 pointer-events-none" />

          {/* กลุ่มวงแหวนและไอคอนรอบนอกที่จะหมุนโคจรต่อเนื่อง */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 65, ease: "linear", repeat: Infinity }} 
            className="absolute inset-0 w-full h-full flex items-center justify-center z-10 pointer-events-none"
          >
            {/* SVG เส้นโยงใยแมงมุมเครือข่าย */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000">
              {/* วงกลมประพื้นหลังตามรัศมีใหม่ */}
              <circle cx={center} cy={center} r={radius} fill="none" stroke="#A855F7" strokeWidth="1" strokeDasharray="4 8" className="opacity-15" />

              {techIcons.map((icon, idx) => {
                const angle = (idx * 360) / totalItems;
                const angleInRad = (angle - 90) * (Math.PI / 180);
                const targetX = center + radius * Math.cos(angleInRad);
                const targetY = center + radius * Math.sin(angleInRad);

                const nextIdx = (idx + 1) % totalItems;
                const nextAngle = (nextIdx * 360) / totalItems;
                const nextAngleInRad = (nextAngle - 90) * (Math.PI / 180);
                const nextX = center + radius * Math.cos(nextAngleInRad);
                const nextY = center + radius * Math.sin(nextAngleInRad);

                const isEven = idx % 2 === 0;

                return (
                  <g key={`lines-${idx}`}>
                    {/* เส้นรัศมีวิ่งเข้าออก */}
                    <motion.line
                      x1={center} y1={center} x2={targetX} y2={targetY}
                      stroke="url(#line-glow-gradient)"
                      strokeWidth="1.2"
                      animate={isEven 
                        ? { pathLength: [0, 1, 1], opacity: [0, 0.25, 0] } 
                        : { pathLength: [1, 0, 0], opacity: [0, 0.25, 0] }
                      }
                      transition={{ duration: 4, delay: idx * 0.15, ease: "easeInOut", repeat: Infinity }}
                    />
                    {/* เส้นประเชื่อมรอบวง */}
                    <motion.line
                      x1={targetX} y1={targetY} x2={nextX} y2={nextY}
                      stroke="#C084FC" strokeWidth="0.8" strokeDasharray="4 4"
                      animate={{ opacity: isEven ? [0.05, 0.2, 0.05] : [0.2, 0.05, 0.2] }}
                      transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                    />
                  </g>
                );
              })}

              <defs>
                <radialGradient id="line-glow-gradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E9D5FF" stopOpacity="1" />
                  <stop offset="60%" stopColor="#A855F7" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6B21A8" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>

            {/* ส่วนเม็ดไอคอนที่กระจายวงกว้างขึ้น และหมุนสวนทิศทางเพื่อตั้งตรงตลอดเวลา */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {techIcons.map((icon, idx) => {
                const angle = (idx * 360) / totalItems;
                const angleInRad = (angle - 90) * (Math.PI / 180);
                
                const leftPercent = ((center + radius * Math.cos(angleInRad)) / 1000) * 100;
                const topPercent = ((center + radius * Math.sin(angleInRad)) / 1000) * 100;
                const floatOffset = idx % 2 === 0 ? [0, -6, 0] : [-3, 3, -3];

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, y: floatOffset, rotate: -360 }}
                    transition={{ 
                      y: { duration: 3 + (idx % 3), ease: "easeInOut", repeat: Infinity },
                      rotate: { duration: 65, ease: "linear", repeat: Infinity },
                      opacity: { duration: 0.5, delay: idx * 0.02 },
                      scale: { duration: 0.5, delay: idx * 0.02 }
                    }}
                    whileHover={{ scale: 1.25, zIndex: 50, y: 0 }}
                    className="absolute w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center p-2 rounded-full bg-[#160D24] border border-purple-900/50 shadow-[0_0_15px_rgba(168,85,247,0.2)] cursor-pointer pointer-events-auto group"
                    style={{
                      left: `calc(${leftPercent}% - 22px)`,
                      top: `calc(${topPercent}% - 22px)`,
                    }}
                  >
                    <img src={icon.src} alt={icon.name} className="w-full h-full object-contain" />
                    
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 border border-purple-500/30 text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-purple-200">
                      {icon.name}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* 📝 ฝั่งขวา (Right Column): ส่วนแสดงข้อมูลรายละเอียดทักษะ */}
        {/* ========================================================= */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left lg:pl-10 z-20">
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-purple-400">
              TECHNICAL EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mt-2 leading-tight">
              My Full-Stack &{" "}
              <span className="text-[#A855F7] bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Design Ecosystem
              </span>
            </h2>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed font-light">
              Driven by a harmonious balance between a robust system architecture and seamless minimalist aesthetics. 
              Selecting the most optimal and high-performance tools specifically tailored for each unique project.
            </p>
          </motion.div>

          <hr className="border-purple-900/30 w-full" />

          {/* รายการหมวดหมู่รายละเอียดสกิลย่อยแบบ Minimal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-4 rounded-xl bg-[#140A21] border border-purple-900/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-sm font-semibold text-purple-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Frontend Development
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                Specialized in building scalable web applications with React and Next.js, customized with Tailwind CSS, focused on seamless performance.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 rounded-xl bg-[#140A21] border border-purple-900/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-sm font-semibold text-purple-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> UI/UX & Interaction
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                Architecting wireframes and high-fidelity interactive prototypes in Figma, embracing modern minimalism alongside buttery smooth transitions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 rounded-xl bg-[#140A21] border border-purple-900/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-sm font-semibold text-purple-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Backend & Database
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                Developing secure servers using Node.js coupled with database management systems like SQL Server to ensure stability, reliability, and high data security.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-4 rounded-xl bg-[#140A21] border border-purple-900/30 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-sm font-semibold text-purple-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Data & QA Mindset
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-light">
                Applying Python for data cleansing processes while integrating QA principles to test production cycles and deliver robust, bug-free web experiences.
              </p>
            </motion.div>

          </div>

          {/* สโลแกนท้ายคอลัมน์ขวา */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-bold font-mono"
          >
            ⚡ "Crafting digital efficiency through design and clean code"
          </motion.p>

        </div>

      </div>
    </section>
  );
}