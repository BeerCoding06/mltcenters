import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'th';

export const translations = {
  nav: {
    home: { en: "Home", th: "หน้าแรก" },
    about: { en: "About", th: "เกี่ยวกับเรา" },
    activities: { en: "Activities", th: "กิจกรรม" },
    schedule: { en: "Schedule", th: "กำหนดการ" },
    gallery: { en: "Gallery", th: "แกลเลอรี" },
    register: { en: "Register", th: "ลงทะเบียน" },
    contact: { en: "Contact", th: "ติดต่อ" },
  },
  hero: {
    headline: {
      en: "Learn Languages Through Technology",
      th: "เรียนภาษาผ่านเทคโนโลยีอย่างสนุกและทันสมัย",
    },
    sub: {
      en: "Interactive AI-powered workshops",
      th: "ฝึกจริง ใช้ AI จริง พัฒนาทักษะแห่งอนาคต",
    },
    cta: { en: "Join Now", th: "สมัครเข้าร่วม" },
  },
  problemSolution: {
    title: { en: "Sound Familiar?", th: "เคยรู้สึกแบบนี้ไหม?" },
    items: [
      {
        problem: { en: "Not confident speaking", th: "ไม่มั่นใจพูด" },
        solution: {
          en: "AI conversation practice in a safe space",
          th: "ฝึกสนทนากับ AI ในบรรยากาศที่เป็นกันเอง",
        },
        icon: "🎤",
      },
      {
        problem: { en: "Memorizing but not using", th: "ท่องจำแต่ใช้ไม่ได้" },
        solution: {
          en: "Real hands-on activities",
          th: "ลงมือทำจริงในกิจกรรม",
        },
        icon: "✨",
      },
      {
        problem: { en: "Unsure how to use AI", th: "ใช้ AI ไม่เป็น" },
        solution: {
          en: "Learn with real AI tools",
          th: "เรียนรู้ผ่านเครื่องมือ AI จริง",
        },
        icon: "🤖",
      },
      {
        problem: { en: "Learning alone is boring", th: "เรียนคนเดียวเบื่อ" },
        solution: { en: "Fun team learning", th: "สนุกกับเพื่อนในทีม" },
        icon: "👥",
      },
    ],
  },
  activitiesPreview: {
    title: { en: "What You’ll Do", th: "กิจกรรมในเวิร์กช็อป" },
    items: [
      {
        icon: "🤖",
        title: { en: "AI Conversation", th: "สนทนากับ AI" },
        short: { en: "Practice with AI partners", th: "ฝึกกับ AI" },
      },
      {
        icon: "📱",
        title: { en: "Language Apps", th: "แอปเรียนภาษา" },
        short: { en: "Try the best apps", th: "ลองแอปชั้นนำ" },
      },
      {
        icon: "🎮",
        title: { en: "Team Games", th: "เกมภาษา" },
        short: { en: "Compete with friends", th: "แข่งกับเพื่อน" },
      },
      {
        icon: "🎬",
        title: { en: "Digital Presentation", th: "นำเสนอดิจิทัล" },
        short: { en: "Present with confidence", th: "นำเสนออย่างมั่นใจ" },
      },
    ],
  },
  galleryPreview: {
    title: { en: "Workshop Moments", th: "บรรยากาศในงาน" },
    viewAll: { en: "View full gallery", th: "ดูแกลเลอรีทั้งหมด" },
  },
  benefits: {
    title: { en: "What You’ll Gain", th: "สิ่งที่คุณจะได้" },
    items: [
      { en: "Speak with confidence", th: "พูดมั่นใจขึ้น" },
      { en: "Use AI effectively", th: "ใช้ AI เป็นจริง" },
      { en: "Think critically", th: "คิดวิเคราะห์ดีขึ้น" },
      { en: "Improve teamwork", th: "ทำงานทีมได้ดี" },
    ],
  },
  testimonials: {
    title: { en: "What Students Say", th: "เสียงจากผู้เข้าร่วม" },
    items: [
      {
        quote: {
          en: "The AI practice was so helpful. I finally dared to speak!",
          th: "การฝึกกับ AI ช่วยได้มาก ในที่สุดก็กล้าพูดแล้ว!",
        },
        name: { en: "Mint", th: "มิ้นท์" },
        role: { en: "Grade 11", th: "ม.5" },
      },
      {
        quote: {
          en: "Fun and useful. I learned more in one day than in months.",
          th: "ทั้งสนุกและได้ใช้จริง เรียนวันเดียวได้มากกว่าหลายเดือน",
        },
        name: { en: "Job", th: "จ็อบ" },
        role: { en: "Year 2", th: "ปี 2" },
      },
      {
        quote: {
          en: "Best workshop for language + tech. Highly recommend!",
          th: "เวิร์กช็อปภาษากับเทคโนโลยีที่ดีที่สุด แนะนำมาก!",
        },
        name: { en: "Ploy", th: "พลอย" },
        role: { en: "Year 3", th: "ปี 3" },
      },
    ],
  },
  finalCta: {
    heading: {
      en: "Ready to Upgrade Your Future?",
      th: "พร้อมพัฒนาทักษะแห่งอนาคตแล้วหรือยัง?",
    },
    btn: { en: "Join Now", th: "สมัครเข้าร่วม" },
  },
  aboutValue: {
    title: { en: "Why This Workshop", th: "ทำไมต้องเวิร์กช็อปนี้" },
    sub: { en: "Three reasons to join", th: "สามเหตุผลที่ควรร่วมเวิร์กช็อป" },
    items: [
      {
        title: { en: "Learn with AI", th: "เรียนรู้ด้วย AI" },
        desc: {
          en: "Practice with real AI tools in a supportive environment.",
          th: "ฝึกกับเครื่องมือ AI จริงในบรรยากาศที่เป็นกันเอง",
        },
      },
      {
        title: { en: "Hands-on practice", th: "ลงมือทำจริง" },
        desc: {
          en: "No boring lectures — learn by doing.",
          th: "ไม่มีแค่บรรยาย เรียนรู้จากการลงมือทำ",
        },
      },
      {
        title: { en: "Future-ready skills", th: "พัฒนาทักษะแห่งอนาคต" },
        desc: {
          en: "Build skills that matter for tomorrow.",
          th: "พัฒนาทักษะที่สำคัญสำหรับอนาคต",
        },
      },
    ],
  },
  highlights: {
    title: { en: "What You'll Experience", th: "สิ่งที่คุณจะได้เรียนรู้" },
    items: [
      {
        icon: "🤖",
        title: { en: "AI Chatbot Practice", th: "ฝึกกับ AI Chatbot" },
        desc: {
          en: "Practice conversations with AI-powered language partners.",
          th: "ฝึกสนทนากับ AI ที่ช่วยพัฒนาภาษา",
        },
      },
      {
        icon: "🎮",
        title: { en: "Language Games", th: "เกมภาษาสนุกๆ" },
        desc: {
          en: "Learn through fun team-based language games.",
          th: "เรียนรู้ผ่านเกมภาษาเป็นทีม",
        },
      },
      {
        icon: "📱",
        title: { en: "Digital Tools", th: "เครื่องมือดิจิทัล" },
        desc: {
          en: "Hands-on with the latest language learning apps.",
          th: "ลงมือใช้แอปเรียนภาษาล่าสุด",
        },
      },
      {
        icon: "🎤",
        title: { en: "Present & Shine", th: "นำเสนออย่างมั่นใจ" },
        desc: {
          en: "Build confidence presenting in multiple languages.",
          th: "สร้างความมั่นใจในการนำเสนอหลายภาษา",
        },
      },
    ],
  },
  homeCta: {
    title: {
      en: "Ready to Start Your Journey?",
      th: "พร้อมเริ่มต้นการเดินทางหรือยัง?",
    },
    sub: {
      en: "Join hundreds of students learning languages with technology",
      th: "เข้าร่วมกับนักเรียนหลายร้อยคนที่เรียนภาษาด้วยเทคโนโลยี",
    },
    btn: { en: "Register Now", th: "ลงทะเบียนเลย" },
  },
  whyJoin: {
    title: { en: "Why Join This Workshop", th: "ทำไมต้องร่วมเวิร์กช็อปนี้" },
    items: [
      {
        icon: "🎤",
        title: {
          en: "Boost Your Speaking Confidence",
          th: "เพิ่มความมั่นใจในการพูด",
        },
        desc: {
          en: "Practice in a safe, supportive environment with peers and AI.",
          th: "ฝึกพูดในบรรยากาศที่เป็นกันเอง ร่วมกับเพื่อนและ AI",
        },
      },
      {
        icon: "🤖",
        title: { en: "Learn with AI Tools", th: "เรียนรู้ผ่าน AI" },
        desc: {
          en: "Use cutting-edge AI to level up your language skills.",
          th: "ใช้ AI ล้ำสมัยพัฒนาทักษะภาษาของคุณ",
        },
      },
      {
        icon: "✨",
        title: { en: "Hands-on Activities", th: "ลงมือปฏิบัติจริง" },
        desc: {
          en: "Learn by doing — no boring lectures, just real practice.",
          th: "เรียนรู้จากการลงมือทำ ไม่มีแค่บรรยาย มีแต่ปฏิบัติจริง",
        },
      },
      {
        icon: "👥",
        title: { en: "Fun Team Experience", th: "สนุกกับกิจกรรมกลุ่ม" },
        desc: {
          en: "Make friends and learn together in a fun, collaborative way.",
          th: "ได้เพื่อนใหม่และเรียนรู้ไปด้วยกันอย่างสนุก",
        },
      },
    ],
  },
  experiencePreview: {
    title: { en: "A Taste of What Awaits", th: "ลิ้มรสประสบการณ์ที่รอคุณอยู่" },
    sub: {
      en: "Interactive sessions, real tools, and lasting skills — all in one day.",
      th: "กิจกรรมเชิงปฏิบัติ เครื่องมือจริง และทักษะที่ติดตัว — ในวันเดียว",
    },
    cta: { en: "Reserve Your Spot Now", th: "จองที่นั่งของคุณตอนนี้" },
  },
  emotionalCta: {
    heading: {
      en: "Your Future Skills Start Today",
      th: "ทักษะแห่งอนาคต เริ่มต้นวันนี้",
    },
    sub: {
      en: "Join the workshop and take the first step.",
      th: "มาร่วมเวิร์กช็อปและก้าวแรกไปด้วยกัน",
    },
    btn: { en: "Register Now", th: "ลงทะเบียนเลย" },
  },
  about: {
    title: { en: "About the Workshop", th: "เกี่ยวกับกิจกรรม" },
    desc: {
      en: "This workshop blends language learning with modern technology tools for real-world skills. Students will explore AI chatbots, language apps, team games, and digital presentation — all in a fun, interactive environment.",
      th: "กิจกรรมนี้ผสานการเรียนรู้ภาษากับเทคโนโลยีสมัยใหม่ เพื่อพัฒนาทักษะที่ใช้ได้จริง นักเรียนจะได้สำรวจ AI Chatbot แอปเรียนภาษา เกมทีม และการนำเสนอดิจิทัล ในบรรยากาศที่สนุกสนาน",
    },
    benefits: {
      title: { en: "Why This Workshop?", th: "ทำไมต้องกิจกรรมนี้?" },
      items: [
        {
          icon: "💡",
          title: { en: "Learn by Doing", th: "เรียนรู้จากการลงมือทำ" },
          desc: {
            en: "Hands-on, project-based activities.",
            th: "กิจกรรมเชิงปฏิบัติการ เรียนรู้ผ่านโปรเจกต์จริง",
          },
        },
        {
          icon: "🌐",
          title: { en: "Real-World Tech", th: "เทคโนโลยีจริง" },
          desc: {
            en: "Use the same tools professionals use.",
            th: "ใช้เครื่องมือเดียวกับมืออาชีพ",
          },
        },
        {
          icon: "👥",
          title: { en: "Teamwork Skills", th: "ทักษะการทำงานเป็นทีม" },
          desc: {
            en: "Collaborate and learn from peers.",
            th: "ทำงานร่วมกันและเรียนรู้จากเพื่อน",
          },
        },
        {
          icon: "🏆",
          title: { en: "Certificates", th: "ใบประกาศนียบัตร" },
          desc: {
            en: "Earn a certificate of participation.",
            th: "รับใบประกาศนียบัตรหลังจบกิจกรรม",
          },
        },
      ],
    },
  },
  activities: {
    title: { en: "Workshop Activities", th: "กิจกรรมในงาน" },
    learnMore: { en: "Learn More", th: "ดูรายละเอียด" },
    items: [
      {
        icon: "🤖",
        title: { en: "AI Conversation Practice", th: "ฝึกสนทนาด้วย AI" },
        desc: {
          en: "Practice real conversations with AI partners that adapt to your level.",
          th: "ฝึกสนทนาจริงกับ AI ที่ปรับระดับตามความสามารถของคุณ",
        },
        color: "primary",
      },
      {
        icon: "📲",
        title: { en: "Language Apps Workshop", th: "ฝึกใช้แอปเรียนภาษา" },
        desc: {
          en: "Explore the best language learning apps and how to use them effectively.",
          th: "สำรวจแอปเรียนภาษาที่ดีที่สุดและวิธีใช้อย่างมีประสิทธิภาพ",
        },
        color: "secondary",
      },
      {
        icon: "🎯",
        title: { en: "Team Language Games", th: "เกมภาษาแบบทีม" },
        desc: {
          en: "Compete in fun team-based language challenges and quizzes.",
          th: "แข่งขันเกมภาษาเป็นทีมสุดสนุก ทั้งท้าทายและควิซ",
        },
        color: "accent",
      },
      {
        icon: "🎬",
        title: {
          en: "Digital Presentation Skills",
          th: "พรีเซนต์ด้วยเทคโนโลยี",
        },
        desc: {
          en: "Learn to create and deliver stunning digital presentations.",
          th: "เรียนรู้การสร้างและนำเสนอผลงานดิจิทัลอย่างน่าสนใจ",
        },
        color: "highlight",
      },
    ],
  },
  schedule: {
    title: { en: "Workshop Schedule", th: "กำหนดการ" },
    items: [
      {
        time: "09:00",
        title: { en: "Ice Breaking & Introduction", th: "กิจกรรมทำความรู้จัก" },
        desc: {
          en: "Fun activities to get everyone comfortable and ready to learn.",
          th: "กิจกรรมสนุกๆ เพื่อให้ทุกคนผ่อนคลายและพร้อมเรียนรู้",
        },
      },
      {
        time: "10:00",
        title: { en: "AI Conversation Practice", th: "ฝึกสนทนาด้วย AI" },
        desc: {
          en: "Hands-on session with AI chatbot partners.",
          th: "ลงมือฝึกสนทนากับ AI Chatbot",
        },
      },
      {
        time: "11:30",
        title: { en: "Language Apps Exploration", th: "สำรวจแอปเรียนภาษา" },
        desc: {
          en: "Discover and practice with top language apps.",
          th: "ค้นพบและฝึกใช้แอปเรียนภาษาชั้นนำ",
        },
      },
      {
        time: "12:00",
        title: { en: "Lunch Break", th: "พักรับประทานอาหารกลางวัน" },
        desc: {
          en: "Enjoy lunch and network with fellow participants.",
          th: "รับประทานอาหารกลางวันและพูดคุยกับเพื่อนๆ",
        },
      },
      {
        time: "13:00",
        title: { en: "Team Language Games", th: "เกมภาษาแบบทีม" },
        desc: {
          en: "Compete in exciting language challenges.",
          th: "แข่งขันเกมภาษาสุดตื่นเต้น",
        },
      },
      {
        time: "14:30",
        title: {
          en: "Digital Presentation Workshop",
          th: "เวิร์คช็อปการนำเสนอดิจิทัล",
        },
        desc: {
          en: "Create your own digital presentation.",
          th: "สร้างผลงานการนำเสนอดิจิทัลของคุณเอง",
        },
      },
      {
        time: "15:30",
        title: { en: "Group Presentations", th: "นำเสนอผลงานกลุ่ม" },
        desc: {
          en: "Show off your work and receive feedback.",
          th: "นำเสนอผลงานและรับฟังความคิดเห็น",
        },
      },
      {
        time: "16:30",
        title: { en: "Closing & Certificates", th: "ปิดงานและมอบเกียรติบัตร" },
        desc: {
          en: "Wrap up and receive your certificate!",
          th: "สรุปกิจกรรมและรับเกียรติบัตร!",
        },
      },
    ],
  },
  gallery: {
    title: { en: "Gallery", th: "แกลเลอรี" },
    sub: { en: "Moments from our workshops", th: "ภาพบรรยากาศจากกิจกรรม" },
  },
  registerPage: {
    title: { en: "Register", th: "ลงทะเบียน" },
    cta: {
      en: "Ready to Upgrade Your Skills?",
      th: "พร้อมพัฒนาทักษะของคุณแล้วหรือยัง?",
    },
    name: { en: "Full Name", th: "ชื่อ-นามสกุล" },
    school: { en: "School / University", th: "โรงเรียน / มหาวิทยาลัย" },
    grade: { en: "Grade Level", th: "ระดับชั้น" },
    phone: { en: "Phone", th: "เบอร์โทรศัพท์" },
    email: { en: "Email", th: "อีเมล" },
    submit: { en: "Submit Registration", th: "ลงทะเบียน" },
    gradeOptions: [
      { en: "High School", th: "มัธยมศึกษา" },
      { en: "University Year 1-2", th: "มหาวิทยาลัย ปี 1-2" },
      { en: "University Year 3-4", th: "มหาวิทยาลัย ปี 3-4" },
      { en: "Other", th: "อื่นๆ" },
    ],
  },
  contactPage: {
    title: { en: "Contact Us", th: "ติดต่อเรา" },
    email: "hello@MLTCENTERS-workshop.com",
    phone: "+66 2 123 4567",
    address: {
      en: "456 Learning Avenue, Bangkok, Thailand 10330",
      th: "456 ถนนการเรียนรู้ กรุงเทพฯ 10330",
    },
    social: { en: "Follow Us", th: "ติดตามเรา" },
    mapTitle: { en: "Find Us", th: "แผนที่" },
  },
  footer: {
    rights: {
      en: "© 2026 MLTCENTERS Workshop. All rights reserved.",
      th: "© 2026 MLTCENTERS Workshop สงวนลิขสิทธิ์",
    },
    tagline: {
      en: "Learning languages through technology",
      th: "เรียนภาษาผ่านเทคโนโลยี",
    },
  },
} as const;

type Translations = typeof translations;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem('lang');
      return (stored === 'th' || stored === 'en') ? stored : 'en';
    } catch {
      return 'en';
    }
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch {}
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
