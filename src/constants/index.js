import {
  next,
  react,
  fullstack,
  webmobile,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  reactnative,
  ibz,
  reddit,
  threejs,
  drop,
  medium,
  minecraft,
  netflix,
  sapphire,
  unik,
  chatgpt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web- & Mobile Developer",
    icon: webmobile,
  },
  {
    title: "Fullstack Developer",
    icon: fullstack,
  },
  {
    title: "Next.JS",
    icon: next,
  },
  {
    title: "React.JS",
    icon: react,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React.JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Next.JS",
    icon: nextjs,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Node.JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three.JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Reddit Community Developer",
    company_name: "Reddit",
    icon: reddit,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Got invited by Reddit Admins to join the Reddit Community Developer Program (Devvit) in Beta.",
      "Testing new features which I gain access to via the private developer subreddit.",
      "Optimize and Develop Reddit Apps and Features.",
    ],
  },
  {
    title: "Student",
    company_name: "IBZ Basel",
    icon: ibz,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "2 years full-time school and 2 years full-time internship as a Software Engineer",
      "Actually, I am a self taught programmer.",
      "After the school, I am a certificated Software Engineer.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Social Media",
    icon: reactnative,
    iconBg: "#E6DEDD",
    date: "March 2022 - Present",
    points: [
      "Creating a new social media platform with an US-Company.",
      "Coding in React Native and using a NoSQL Database.",
      "Will be publish on iOS, Android and Web.",
      "Leading a small team while also developing.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ChatGPT Messenger",
    description:
      "Everyone knows ChatGPT by now. However, OpenAI has also provided an API. To get to know it, I built a ChatGPT clone. Unfortunately it is not possible to try it out, because the free limit has been reached.",
    tags: [
      {
        name: "NextJS 13",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    isPublic: true,
    isOnline: true,
    url: "https://chatgpt-messenger.app",
    source_code_link: "https://github.com/RobinRuf/chatgpt-messenger",
  },
  {
    name: "Netflix Clone",
    description:
      "I have already had to deal with React several times. However, I love trying out new libraries. I did this project first because I like the UI of Netflix and second to get more familiar with Redux.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    isPublic: true,
    isOnline: false,
    url: "https://chatgpt-messenger.app",
    source_code_link: "https://github.com/RobinRuf/netflix",
  },
  {
    name: "Moving Company",
    description:
      "During my training as a software engineer, I worked part-time in a transport company. This happened to need a new website, so I created and provided it for free. However, the source code is private.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: unik,
    isPublic: false,
    isOnline: true,
    url: "https://unik-umzuege.ch",
    source_code_link: "https://github.com/",
  },
  {
    name: "Medium Clone",
    description:
      "This Medium Clone was one of my first projects in which I tried SanityCMS. I am thrilled with this CMS. Easy condition and integration with NextJS. Also, I was able to further develop my TypeScript skills.",
    tags: [
      {
        name: "NextJS 12",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: medium,
    isPublic: true,
    isOnline: true,
    url: "https://medium-beryl-eta.vercel.app/",
    source_code_link: "https://github.com/RobinRuf/medium",
  },
  {
    name: "Minecraft Web",
    description:
      "Everyone knows Minecraft. I'm not a fan myself, but I wanted to know if it works on the web. Also one of the first projects with TreeJS. Very demanding the whole thing with 3D objects, but also very entertaining!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TreeJS",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: minecraft,
    isPublic: false,
    isOnline: true,
    url: "https://minecraft-silk-rho.vercel.app",
    source_code_link: "https://github.com/RobinRuf/medium",
  },
  {
    name: "Sapphire Draw",
    description:
      "Sapphire Draw was actually a customer project. However, the customer no longer uses it, however I am very happy with my work. It has its own Web3 contract and was one of my first Web3 projects.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "SanityCMS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: sapphire,
    isPublic: false,
    isOnline: true,
    url: "https://www.sapphire-draw.app/",
    source_code_link: "https://github.com/RobinRuf/crypto_lottery",
  },
];

export { services, technologies, experiences, testimonials, projects };
