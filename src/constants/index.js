import * as assets from "../assets";

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

const mainstack = [
  {
    title: "JavaScipt & TypeScript",
    icon: assets.ts,
  },
  {
    title: "ReactJS & NextJS",
    icon: assets.next,
  },
  {
    title: "Rust",
    icon: assets.rust,
  },
  {
    title: "NoSQL (e.g. Firebase)",
    icon: assets.firebase,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "IBZ Basel",
    icon: assets.ibz,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "2 years full-time school and 2 years full-time internship as a Software Engineer",
      "Actually, I am a self taught programmer.",
      "After the school, I am a certificated Information Technologist.",
    ],
  },
  {
    title: "Web- & Mobile Developer",
    company_name: "Freelance",
    icon: assets.raigeki,
    iconBg: "#000",
    date: "Feb 2018 - Present",
    points: [
      "Creation of own larger projects in the web and app development area",
      "Acceptance and implementation of freelance projects from friends and clients",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Robin created our company website. Since then, our customer numbers have multiplied. Very good and precise work.",
    name: "K. Remi",
    designation: "CEO",
    company: "Unik Umzuege",
  },
  {
    testimonial:
      "Our workflow has been significantly optimized by this beautiful, well-structured and perfectly functioning app. Thank you very much!",
    name: "F. Delgato",
    designation: "Owner",
    company: "Warehouse Management App",
  },
  {
    testimonial:
      "I enjoyed working with Robin. Quick response and a very friendly approach. His work is very professional and high quality.",
    name: "A. Zehnder",
    designation: "UI/UX Designer",
    company: "Freelancer",
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
    image: assets.chatgpt,
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
    image: assets.netflix,
    isPublic: true,
    isOnline: false,
    url: "https://chatgpt-messenger.app",
    source_code_link: "https://github.com/RobinRuf/netflix",
  },
  {
    name: "3D Portfolio",
    description:
      "I created this portfolio to train my ThreeJS skills. It shows an island, where you can fly around with an airplane. At four specific checkpoints, you can see a popup, where you can go to subpages.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: assets.threejs_portfolio,
    isPublic: true,
    isOnline: true,
    url: "https://three-js-portfolio-gilt.vercel.app/",
    source_code_link: "https://github.com/RobinRuf/ThreeJS_Portfolio",
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
    image: assets.medium,
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
    image: assets.minecraft,
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
    image: assets.sapphire,
    isPublic: true,
    isOnline: false,
    url: "https://crypto-lottery-gzta-git-master-robinruf.vercel.app/",
    source_code_link: "https://github.com/RobinRuf/sapphireDraw_crypto_lottery",
  },
];

export { mainstack, experiences, testimonials, projects };
