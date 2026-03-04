"use client";

import React from 'react';
import { Layout, Server, Database, Search, Wrench } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: <img src="/Image/icon/icons8-frontend.png" alt="Frontend" className="w-10 h-10" />,
    color: "bg-blue-50 text-blue-600",
    accent: "border-blue-200",
    skills: [
      { name: "HTML", icon: "/Image/icon/icons8-html-48.png" },
      { name: "CSS", icon: "/Image/icon/icons8-css-48.png" },
      { name: "Bootstrap", icon: "/Image/icon/icons8-bootstrap-96.png" },
      { name: "React", icon: "/Image/icon/icons8-react-48.png" },
      { name: "Tailwind", icon: "/Image/icon/icons8-tailwind-css-96.png" },
      { name: "JavaScript", icon: "/Image/icon/icons8-javascript-48.png" },
      { name: "Next.js", icon: "/Image/icon/icons8-nextjs-96.png" }
    ]
  },
  {
    category: 'Backend',
    icon: <img src="/Image/icon/icons8-backend-64.png" alt="Backend" className="w-10 h-10" />,
    color: "bg-emerald-50 text-emerald-600",
    accent: "border-emerald-200",
    skills: [
      { name: "Node.js", icon: "/Image/icon/icons8-nodejs-48.png" },
      { name: "C#.net", icon: "/Image/icon/icons8-c++-48.png" },
      { name: "Python", icon: "/Image/icon/icons8-python-96.png" }
    ]
  },
  {
    category: 'Database',
    icon: <img src="/Image/icon/icons8-database-94.png" alt="Database" className="w-10 h-10" />,
    color: "bg-purple-50 text-purple-600",
    accent: "border-purple-200",
    skills: [
      { name: "MySQL", icon: "/Image/icon/icons8-mysql-48.png" },
      { name: "PostgreSQL", icon: "/Image/icon/icons8-postgresql-48.png" },
      { name: "MongoDB", icon: "/Image/icon/icons8-mongodb-48.png" },
      { name: "SQL Server", icon: "/Image/icon/icons8-sql-96.png" },
    ]
  },
  {
    category: 'Tools',
    icon:<img src="/Image/icon/icons8-tools-94.png" alt="Tools" className="w-10 h-10" />,
    color: "bg-amber-50 text-amber-600",
    accent: "border-amber-200",
    skills: [
      { name: "GitHub", icon: "/Image/icon/icons8-github-logo-96.png" },
      { name: "VSCode", icon: "/Image/icon/icons8-visual-studio-code-96.png" },
      { name: "Visual Studio 2022", icon: "/Image/icon/icons8-visual-studio-96.png" },
      { name: "Postman", icon: "/Image/icon/icons8-postman-inc-100.png" },
      { name: "Figma", icon: "/Image/icon/icons8-figma-96.png" },
      { name: "Docker", icon: "/Image/icon/icons8-docker-96.png" },
      { name: "Draw.io", icon: "/Image/icon/drawio.png" }
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 bg-white font-sans overflow-hidden text-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900">
            ทักษะทาง<span className="text-[#3DB2FF] underline decoration-blue-200 decoration-4 underline-offset-8">เทคนิค</span>
          </h2>
        </div>

        {/* 5 Box Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {skillGroups.map((group, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl border border-slate-100 p-5 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-blue-200 transition-all duration-500 group`}
            >
              {/* Box Header */}
              <div className="flex flex-col items-center mb-8">
                <div className={`p-4 rounded-2xl ${group.color} mb-3 group-hover:scale-110 transition-transform duration-500`}>
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] ">
                  {group.category}
                </h3>
              </div>

              {/* Box Content: List of Skills */}
              <div className="flex flex-col gap-2">
                {group.skills.map((skill, sIndex) => (
                  <div 
                    key={sIndex} 
                    className="flex items-center gap-3 bg-slate-50/50 p-3 rounded-2xl border border-transparent hover:border-white hover:bg-white hover:shadow-sm transition-all group/item"
                  >
                    {/* Skill Icon */}
                    <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center  transition-all duration-300">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => (e.currentTarget.style.display = 'none')}
                      />
                    </div>
                    {/* Skill Name */}
                    <span className="text-sm font-semibold text-slate-600 group-hover/item:text-slate-900 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}