// data/projects.ts
export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'Full-Time' | 'Freelance';
  image: string;
    images: string[]; // เพิ่ม array สำหรับหลายภาพ
  description: string;
  tools: string[];
  github: string | null;
  demo: string;
  responsibilities: string; // 🔥 เพิ่มหน้าที่รับผิดชอบ (เป็น Text ยาว หรือจัดย่อหน้าได้)
  deliverables: string[];   // 🔥 เพิ่มรายการผลลัพธ์เป็น Array (Bullet points)
}

export const projects: Project[] = [
  {
    id: "anti-doping-tester",
    title: "Anti-Doping System QA Tester",
    category: "System",
    type: "Full-Time",
    image: "/Image/STAM.png", 
    images: [
    "/Image/STAM.png",
    "/Image/miro-stam.png", // ภาพที่ 2
    "/Image/test-stam.png"     // ภาพที่ 3
  ],
    description: "Analyzed and designed interactive prototypes, created comprehensive test scenarios, executed system testing, and provided technical user support for the internal platform of the Sports Authority of Thailand.",
    tools: ["Miro", "SQL Server", "Excel"],
    github: null, 
    demo: "",
    responsibilities: "Gathered user requirements and analyzed them to design clear prototypes in Miro for seamless communication with the development team.Analyzed and created comprehensive test scenarios covering all core system features, along with detailed, user-friendly test documentation,Prepared equipment for UAT sessions for end-users and provided ongoing technical support post-testing to resolve issues and optimize system performance.",
    deliverables: [
  "Analyzed and designed clear prototypes in Miro to ensure seamless communication with the development team.",
  "Conducted comprehensive system testing by creating test scenarios that covered all core features, along with detailed and user-friendly test documentation.",
  "Conducted UAT training for end-users and provided ongoing technical support post-testing to resolve issues and optimize system performance."
]
  },
  {
    id: "pilot-exam-support",
    title: "Pilot Examination System Support",
    category: "System",
    type: "Full-Time",
    image: "/Image/SWMD.png",
    images: [
      "/Image/SWMD.png",
      "/Image/support-swmd.png", // ภาพที่ 2
    ],
    description: "Provided comprehensive end-user support, managed data updates directly on the server, troubleshooted production environment bugs, and optimized system workflows for the Marine Department's Pilot Examination Registration System.",
    tools: ["SQL Server", "Excel", "Postman", "VPN"],
    github: null, 
    demo: "",
    responsibilities: "Responsible for providing dedicated end-work support for the SW@MD Examination Registration System, performing secure server-side data updates via VPN and remote desktop access. Verified data integration using Postman, troubleshooted production environment bugs, and meticulously logged all support activities in Excel while optimizing system workflows for better performance.",
    deliverables: [
      "Resolved over 20+ critical user-reported issues within SLA.",
      "Improved system performance by 25% through workflow optimizations."
    ]
  },
  {
    id: "data-cleansing-statistics",
    title: "Data Cleansing for National Statistics",
    category: "System",
    type: "Full-Time",
    image: "/Image/Cleandata.png",
    images: [
      "/Image/Cleandata.png"
    ],
    description: "Performed end-to-end data cleansing and transformation processes to ensure maximum data integrity, proper optimization, and seamless presentation for downstream utilization at the National Statistical Office.",
    tools: ["Python", "Pandas", "pgAdmin", "MongoDB Compass", "Oracle 19c"],
    github: null,
    demo: "",
    responsibilities: "Responsible for performing end-to-end data cleansing and transformation processes to ensure maximum data integrity, proper optimization, and seamless presentation for downstream utilization at the National Statistical Office.",
    deliverables: [
      "Cleaned and transformed over 1,000,000+ rows of raw data.",
      "Improved data quality metrics by 70% through systematic cleansing processes.",
      "Delivered comprehensive data documentation and reporting for stakeholder review."
    ]
  },
    {
    id: "atomic-energy-prototype",
    title: "UI/UX Design & Prototyping for an Online Bicycle Sales Website",
    category: "UI/UX",
    type: "Freelance",
    image: "/Image/bicyle.png",
    images: [
      "/Image/b1.png",
      "/Image/b2.png",
      "/Image/b3.png"
    ],
    description: "This course provides training in UI/UX design and prototyping for an online bicycle sales website, focusing on user-friendliness and responsive design for the online bicycle market.",
    tools: ["Next.js", "Tailwind CSS"],
    github: null,
    demo: "https://bicylefriend.vercel.app/",
    responsibilities: "UI/UX design and prototyping for an e-commerce bicycle website using Next.js and Tailwind CSS, focusing on user-friendliness and market responsiveness.  ",
    deliverables: [
      "UI/UX Prototype Design for a Government Project Proposal [Unawarded / Pitching Phase]",
    ]
  },
  {
    id: "atomic-energy-prototype",
    title: "Concept UI/UX Design & Prototyping for an OAP Project Proposal",
    category: "UI/UX",
    type: "Full-Time",
    image: "/Image/OAP.png",
    images: [
      "/Image/OAP.png",
      "/Image/oap-web.png",
      "/Image/oap-mobile.png"
    ],
    description: "Architected high-fidelity UI/UX prototypes for the Office of Atoms for Peace (OAP) project proposal, strategically structuring navigation layouts to simplify user workflows and eliminate redundant steps.",
    tools: ["Figma"],
    github: null,
    demo: "https://www.figma.com/design/fqyk7IGKDhFeQ61HM8XiGj/%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%93%E0%B8%B9-OAP2026?node-id=45-6&t=1tTMPTJDCyqYh1SG-1",
    responsibilities: "Responsible for architected high-fidelity UI/UX prototypes for the Office of Atoms for Peace (OAP) project proposal, strategically structuring navigation layouts to simplify user workflows and eliminate redundant steps.",
    deliverables: [
      "UI/UX Prototype Design for a Government Project Proposal [Unawarded / Pitching Phase]",
    ]
  },
  {
    id: "gamefowl-platform-design",
    title: "UX/UI Prototype: Next-Gen Live Bidding & Showcase Platform for Gamefowl",
    category: "UI/UX",
    type: "Full-Time",
    image: "/Image/KAIHUB.png",
    images: [
      "/Image/KAIHUB.png",
      "/Image/kai-pp.png",
      "/Image/kai-detail.png"
    ],
    description: "Designed a modern and futuristic digital platform prototype tailored for data tracking and statistical analytics management, specifically crafted for a new project bidding presentation.",
    tools: ["Figma"],
    github: null,
    demo: "https://www.figma.com/design/ONubYCFYomfSCYztqVEXEn/%E0%B9%81%E0%B8%9E%E0%B8%A5%E0%B8%95%E0%B8%9F%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%8A%E0%B8%99?node-id=73-384&t=xAUjXa9nnQ01Kgei-1",
    responsibilities: "Responsible for designing the UI/UX prototype for an online gamefowl competition live-streaming platform; however, the project was discontinued prior to the development and testing phases.",
    deliverables: [
      "UI/UX Design for an Online Gamefowl Competition Live-Streaming Platform (Project was discontinued prior to the development and testing phases)",
      "E-commerce Integration Concept featuring gamefowl-related merchandise and equipment to generate supplementary platform revenue."
    ]
  }
];