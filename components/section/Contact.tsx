"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/components/API/mailservice"; // นำเข้า Service ที่แยกไว้

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("กำลังส่งข้อมูล...");

    const formData = new FormData(event.currentTarget);

    try {
      // เรียกใช้ API Service
      const data = await sendContactEmail(formData);

      if (data.success) {
        setStatus("success");
        setResult("ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อเรา");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setResult(data.message || "เกิดข้อผิดพลาด กรุณาลองใหม่");
      }
    } catch (error: any) {
      setStatus("error");
      setResult(error.message);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#F0F7FF] py-24 px-6 sm:px-10 md:px-20 lg:px-32 font-sans text-slate-800 flex items-center transition-colors duration-500 overflow-hidden">
      {/* --- Background Wave Animation (คลื่นทะเล) --- */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-0 pointer-events-none">
        <svg
          className="relative block w-full h-[100px] min-h-[80px] max-h-[120px]"
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
              fill="rgba(61, 178, 255, 0.4)"
              className="wave-anim-4"
            />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* --- ฝั่งซ้าย: ข้อมูลการติดต่อ --- */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[3px] bg-[#3DB2FF]"></span>
                <h2 className="text-4xl sm:text-5xl font-[900] tracking-tight uppercase text-slate-900">
                  ติดต่อ <span className="text-[#3DB2FF]">เรา</span>
                </h2>
              </div>
              {/* เพิ่ม Badge สถานะว่างรับงาน */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">
                  เปิดบริการรับงานแล้ว
                </span>
              </div>
              <div className="space-y-4 max-w-md">
                <p className="text-slate-500 text-lg lg:text-xl font-light leading-relaxed">
                  กำลังมองหา Developer ไปร่วมทีม{" "}
                  <br className="hidden md:block" />
                  หรือมีโปรเจกต์ที่ต้องการคำปรึกษา?
                </p>

                <p className="text-slate-700 text-lg lg:text-xl font-medium leading-relaxed">
                  ยินดีรับพัฒนาเว็บไซต์ทุกรูปแบบ <br />
                  <span className="text-indigo-600 font-semibold">
                    เปลี่ยนไอเดียของคุณให้เป็นความจริง
                  </span>
                </p>

                <p className="text-slate-500 text-base italic border-l-2 border-slate-200 pl-4">
                  "เปิดโอกาสให้เราได้ร่วมงาน
                  เพื่อความสำเร็จของคุณและผลงานของเรา"
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail size={24} />,
                  label: "Email",
                  value: "wanwisa.skl12@gmail.com",
                },
                {
                  icon: <Phone size={24} />,
                  label: "Phone",
                  value: "098-958-8390",
                },
                {
                  icon: <MapPin size={24} />,
                  label: "Location",
                  value: "Bangkok, Thailand",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-white transition-all duration-500 border border-transparent hover:border-white"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-lg shadow-blue-100 flex items-center justify-center text-[#3DB2FF] group-hover:bg-[#3DB2FF] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                      {item.label}
                    </h4>
                    <p className="text-lg font-bold text-slate-700">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- ฝั่งขวา: แบบฟอร์มติดต่อ (White Card) --- */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl -z-10"></div>

            <form
              onSubmit={onSubmit}
              className="bg-white/80 backdrop-blur-md p-8 sm:p-12 rounded-[3rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                    ชื่อของคุณ
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="กรอกชื่อของคุณ"
                    className="w-full bg-[#F8FBFF] border border-blue-50 rounded-2xl px-6 py-4 outline-none focus:border-[#3DB2FF] focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                    อีเมล
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="example@mail.com"
                    className="w-full bg-[#F8FBFF] border border-blue-50 rounded-2xl px-6 py-4 outline-none focus:border-[#3DB2FF] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                  หัวข้อ
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="หัวข้อโปรเจกต์หรือการจ้างงาน"
                  className="w-full bg-[#F8FBFF] border border-blue-50 rounded-2xl px-6 py-4 outline-none focus:border-[#3DB2FF] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-2">
                  ข้อความ
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="เขียนรายละเอียดที่นี่..."
                  className="w-full bg-[#F8FBFF] border border-blue-50 rounded-2xl px-6 py-4 outline-none focus:border-[#3DB2FF] focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full bg-[#3DB2FF] text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-900 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none shadow-xl shadow-blue-200 uppercase tracking-[0.2em] text-sm mt-4"
              >
                {status === "loading" ? (
                  <>
                    กำลังส่ง... <Loader2 className="animate-spin" size={18} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>

              {result && (
                <div
                  className={`p-4 rounded-xl text-center text-sm font-bold mt-4 transition-all ${status === "success" ? "bg-green-50 text-green-500 border border-green-100" : "bg-red-50 text-red-500 border border-red-100"}`}
                >
                  {result}
                </div>
              )}
            </form>
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
      `}</style>
    </section>
  );
}
