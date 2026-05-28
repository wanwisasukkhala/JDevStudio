"use client";

import React, { useState } from "react";
import { motion } from "framer-motion"; // นำเข้า motion สำหรับทำแอนิเมชัน
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "@/components/API/mailservice"; // นำเข้า Service ที่แยกไว้

export default function Contact() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending message...");

    const formData = new FormData(event.currentTarget);

    try {
      const data = await sendContactEmail(formData);

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully! Thank you for reaching out.");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error: any) {
      setStatus("error");
      setResult(error.message);
    }
  };

  return (
    <section className="relative bg-[#08020f] py-12 sm:py-14 lg:py-16 px-6 sm:px-12 md:px-16 lg:px-20 font-sans text-slate-300 flex items-center overflow-hidden w-full">
      
      {/* --- Background Decorative Lights --- */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #4c1d95 1px, transparent 1px), linear-gradient(to bottom, #4c1d95 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-pink-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center overflow-hidden">
          
          {/* --- ฝั่งซ้าย: ข้อมูลการติดต่อ (สไลด์เข้ามาจากทางซ้าย x: -60) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} // เล่นแอนิเมชันครั้งเดียวเมื่อเลื่อนเจอ 20% ของพื้นที่
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 w-full"
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">
                  Contact <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Me</span>
                </h2>
              </div>
              
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-pink-500"></span>
                </span>
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">
                  Open for Opportunities
                </span>
              </div>

              <div className="space-y-2.5 text-sm text-slate-400 font-light leading-relaxed max-w-md">
                <p>
                  Looking for a Web Developer or UX/UI Designer to join your team, or have a project that needs a consultation?
                </p>
                <p className="text-slate-200 font-normal">
                  Available for full-stack development and creative interface design.{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                    Let's bring your ideas to life.
                  </span>
                </p>
              </div>
            </div>

            {/* Contact Channels List */}
            <div className="space-y-2.5 max-w-md">
              {[
                {
                  icon: <Mail size={16} />,
                  label: "Email",
                  value: "wanwisa.skl12@gmail.com",
                },
                {
                  icon: <Phone size={16} />,
                  label: "Phone",
                  value: "098-958-8390",
                },
                {
                  icon: <MapPin size={16} />,
                  label: "Location",
                  value: "Bangkok, Thailand",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl bg-[#140b24]/40 border border-purple-950/40 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple-950/60 border border-purple-900/50 flex items-center justify-center text-purple-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                      {item.label}
                    </h4>
                    <p className="text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- ฝั่งขวา: แบบฟอร์มติดต่อ (สไลด์เข้ามาจากทางขวา x: 60) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <form
              onSubmit={onSubmit}
              className="bg-[#12071f]/60 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-white/10 shadow-2xl space-y-4 w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#1b0d2d]/50 border border-purple-950 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500/60 focus:bg-[#1b0d2d]/80 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="example@mail.com"
                    className="w-full bg-[#1b0d2d]/50 border border-purple-950 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500/60 focus:bg-[#1b0d2d]/80 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry or job opportunity"
                  className="w-full bg-[#1b0d2d]/50 border border-purple-950 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500/60 focus:bg-[#1b0d2d]/80 transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="Write your message details here..."
                  className="w-full bg-[#1b0d2d]/50 border border-purple-950 text-white rounded-xl px-4 py-2.5 text-sm outline-none focus:border-purple-500/60 focus:bg-[#1b0d2d]/80 transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                disabled={status === "loading"}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none shadow-lg shadow-purple-950/50 uppercase tracking-[0.15em] text-xs mt-2"
              >
                {status === "loading" ? (
                  <>
                    Sending... <Loader2 className="animate-spin" size={14} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>

              {result && (
                <div
                  className={`p-3 rounded-xl text-center text-xs font-bold mt-3 transition-all ${
                    status === "success" 
                      ? "bg-purple-950/40 text-purple-300 border border-purple-500/30" 
                      : "bg-red-950/40 text-red-400 border border-red-500/20"
                  }`}
                >
                  {result}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}