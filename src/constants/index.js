const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/portfolio-v1/images/ideas.svg" },
  { text: "Concepts", imgPath: "/portfolio-v1/images/concepts.svg" },
  { text: "Designs", imgPath: "/portfolio-v1/images/designs.svg" },
  { text: "Code", imgPath: "/portfolio-v1/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/portfolio-v1/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/portfolio-v1/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/portfolio-v1/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/portfolio-v1/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const SkillsEnum = {
  HTML: {
    name: "HTML",
    icon: "/portfolio-v1/images/html.svg",
  },
  CSS: {
    name: "CSS",
    icon: "/portfolio-v1/images/css.svg",
  },
  Bootstrap: {
    name: "Bootstrap",
    icon: "/portfolio-v1/images/bootstrap.svg",
  },
  Javascript: {
    name: "Javascript",
    icon: "/portfolio-v1/images/js.svg",
  },
  Typescript: {
    name: "Typescript",
    icon: "/portfolio-v1/images/ts.svg",
  },
  React: {
    name: "React.js",
    icon: "/portfolio-v1/images/react.svg",
  },
  MUI: {
    name: "MUI",
    icon: "/portfolio-v1/images/mui.svg",
  },
  Node: {
    name: "Node.js",
    icon: "/portfolio-v1/images/node.svg",
  },
  Nest: {
    name: "Nest.js",
    icon: "/portfolio-v1/images/nestjs.svg",
  },
  MySQL: {
    name: "MySQL",
    icon: "/portfolio-v1/images/mysql.svg",
  },
  MongoDB: {
    name: "MongoDB",
    icon: "/portfolio-v1/images/mongodb.png",
  },
  Redis: {
    name: "Redis",
    icon: "/portfolio-v1/images/redis.svg",
  },
  Git: {
    name: "Git",
    icon: "/portfolio-v1/images/git.svg",
  },
  SocketIO: {
    name: "Socket.IO",
    icon: "/portfolio-v1/images/socket-io.svg",
  },
};

const techStackRebelFE = [
  SkillsEnum.Typescript,
  SkillsEnum.React,
  SkillsEnum.MUI,
  SkillsEnum.HTML,
  SkillsEnum.CSS,
  SkillsEnum.Javascript,
  SkillsEnum.Git,
];

const techStackRebelBE = [
  SkillsEnum.Node,
  SkillsEnum.Typescript,
  SkillsEnum.MySQL,
  SkillsEnum.Nest,
  SkillsEnum.MongoDB,
  SkillsEnum.Redis,
  SkillsEnum.Git,
];

const techStackIcons = [
  {
    name: "HTML",
    modelPath: "/portfolio-v1/models/html.glb",
    scale: 0.021,
    position: [0, -4, 0],
  },
  {
    name: "CSS",
    modelPath: "/portfolio-v1/models/css.glb",
    scale: 0.021,
    position: [0, -4, 0],
  },
  // {
  //   name: "Javascript",
  //   modelPath: "/portfolio-v1/models/js.glb",
  //   scale: 40,
  //   // rotation: [Math.PI, Math.PI, Math.PI],
  //   position: [10, -4, 0],
  // },
  {
    name: "Typescript",
    modelPath: "/portfolio-v1/models/ts.glb",
    scale: 1.4,
    position: [0, 0, 0],
  },
  {
    name: "React.js",
    modelPath: "/portfolio-v1/models/react.glb",
    scale: 0.9,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/portfolio-v1/models/node.glb",
    scale: 4.5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "C++",
    modelPath: "/portfolio-v1/models/cpp.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/portfolio-v1/models/git.glb",
    scale: 0.045,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const techStackIconsDuplicate = techStackIcons.map((icon) => ({
  ...icon,
  modelPath: icon.modelPath.split(".")[0] + "-duplicate" + ".glb",
}));

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/portfolio-v1/images/exp1.png",
    logoPath: "/portfolio-v1/images/rebelfoods.webp",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed a user friendly Kitchen Display System handling real time updates with Pusher Integration",
      "Developed a Smart Order Router Management System with hardware integration like printer, scanner and real time updates. Enahced UX with responsive grid system and animations",
      "Built a Workforce Management System project from scratch setting up authentication, UI library, Deployment pipeline etc.",
    ],
    techStackPrimary: techStackRebelFE.slice(0, 3),
    techStackSecondary: techStackRebelFE.slice(3),
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/portfolio-v1/images/exp2.png",
    logoPath: "/portfolio-v1/images/rebelfoods.webp",
    title: "Back End Developer",
    date: "July 2022 - December 2022",
    responsibilities: [
      "Developed a micro service from scratch in Nest.js integrating multiple microservices, APIs, Webhooks and real time communicaion with Kafka",
      "Developed a CRUD API system with authentication for users to register on our system",
      "Optimized user registration journey integrating multiple microservices and API call",
    ],
    techStackPrimary: techStackRebelBE.slice(0, 3),
    techStackSecondary: techStackRebelBE.slice(3),
  },
  // {
  //   review:
  //     "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
  //   imgPath: "/portfolio-v1/images/exp3.png",
  //   logoPath: "/portfolio-v1/images/logo3.png",
  //   title: "React Native Developer",
  //   date: "March 2019 - May 2020",
  //   responsibilities: [
  //     "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
  //     "Improved app performance and user experience through code optimization and testing.",
  //     "Coordinated with the product team to implement features based on feedback.",
  //   ],
  // },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/portfolio-v1/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/portfolio-v1/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/portfolio-v1/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/portfolio-v1/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/portfolio-v1/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/portfolio-v1/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/portfolio-v1/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/portfolio-v1/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/portfolio-v1/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/aneekg8",
    imgPath: "/portfolio-v1/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/aneek.ghosh.98",
    imgPath: "/portfolio-v1/images/fb.png",
  },
  {
    name: "x",
    url: "https://x.com/Aneek_Dev_",
    imgPath: "/portfolio-v1/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/aneekg8",
    imgPath: "/portfolio-v1/images/linkedin.png",
  },
];

const projects = [
  {
    title: "BechDo",
    description:
      "An app built with React and Node.js to help users buy and sell used products online",
    imgPath: "/portfolio-v1/images/bechdo.png",
    githubUrl: "https://github.com/aneekg8/BechDo",
    // linkUrl: "https://github.com/aneekg8/BechDo",
    skills: [
      SkillsEnum.React,
      SkillsEnum.HTML,
      SkillsEnum.CSS,
      SkillsEnum.Bootstrap,
      SkillsEnum.Javascript,
      SkillsEnum.Node,
      SkillsEnum.MongoDB,
      SkillsEnum.Git,
    ],
  },
  {
    title: "Chat App",
    description: "A chat app built with Node.js, EJS and Socket.io",
    imgPath: "/portfolio-v1/images/chat-app.png",
    githubUrl: "https://github.com/aneekg8/Chat-App",
    // linkUrl: "https://github.com/aneekg8/Chat-App",
    skills: [
      SkillsEnum.HTML,
      SkillsEnum.CSS,
      SkillsEnum.Bootstrap,
      SkillsEnum.Javascript,
      SkillsEnum.Node,
      SkillsEnum.SocketIO,
      SkillsEnum.Git,
    ],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackIconsDuplicate,
  navLinks,
  SkillsEnum,
  techStackRebelFE,
  techStackRebelBE,
  projects,
};
