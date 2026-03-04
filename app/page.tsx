
import Hero from '@/components/section/Hero';
import AboutUs from '@/components/section/Aboutus';
import Education from '@/components/section/education';
import Experience from '@/components/section/Experience';
import Skills from '@/components/section/Skills';
import SDLC from '@/components/section/SDLC';
import Portfolio from '@/components/section/Profile';
import Contact from '@/components/section/Contact';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section id="hero"><Hero /></section>
      <section id="about"><AboutUs /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="skills"><Skills /></section>
      <section id="sdlc"><SDLC /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>
      
      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 JDev Studio. All rights reserved.
      </footer>
    </main>
  );
}