import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: '',
  twitter: '',
  github: 'https://github.com/ashwekkalgutkar',
  linkedin: 'https://www.linkedin.com/in/ashwek-kalgutkar/',
};

export const author = {
  name: 'Ashwek Kalgutkar',
  email: 'kalgutkarashwek@gmail.com',
};

export const seoData = {
  title: 'Ashwek Kalgutkar | Full-Stack Developer',
  description:
    'Ashwek Kalgutkar is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image: 'https://avatars.githubusercontent.com/u/72547233?v=4',
  url: '',
  keywords: [
    'Ashwek',
    'Ashwek Kalgutkar',
    '@Ashwek Kalgutkar',
    'Ashwek Kalgutkar',
    'Portfolio',
    'Ashwek Portfolio ',
    'Ashwek Kalgutkar Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello friend 👋, I'm ",
  title: 'Ashwek kalgutkar.',
  tagline: 'I create visually appealing interfaces on the web',
  description:
    "I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NextJS. ",
  specialText: 'Student @Masai School - Bangalore',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'TailwindCSS',
      'React.js',
      'MongoDB',
      'Node.js',
      'Redux',
    ],
  },
  img: '/img/ashwek-kalgutkar-primary.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'Tech Stack',
  skills: [   
    {
      id: getId(),
      title: 'technologies & tools I use',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Redux',
      'MySQL',
      'Postman',
      'Express.js',
      'GitHub',
      'Vercel',
      'Netlify',
      'VS Code',
    ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'Visual Studio Code', icon: 'vscode-icons:file-type-vscode' },
        { name: 'Postman', icon: 'logos:postman-icon' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-light' },
        { name: 'GitHub', icon: 'skill-icons:github-light' },
        { name: 'Vercel', icon: 'skill-icons:vercel-light' },
        { name: 'Netlify', icon: 'devicon:netlify' },
      ],
    },
    // {
    //   id: getId(),
    //   title: 'blockchain development',
    //   lottie: {
    //     light: '/lotties/ethereum.json',
    //     dark: '/lotties/ethereum-dark.json',
    //   },
    //   points: [
    //     'Experience in developing Smart Contract using Solidity & Ethereum',
    //     'Developing NFT Smart Contracts using ERC-721 Token Standard',
    //     'Building Dapps with React.js & Solidity using Web3.js',
    //   ],
    //   softwareSkills: [
    //     { name: 'ethereum', icon: 'logos:ethereum' },
    //     { name: 'solidity', icon: 'logos:solidity' },
    //     { name: 'metamask', icon: 'logos:metamask-icon' },
    //   ],
    // },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'Work Experience',
  experiences: [
    {
      company: 'Independent Contractor',
      tabName: 'Freelance',
      companyUrl: '',
      role: 'Freelance Full Stack Developer',
      location: 'Remote',
      started: 'Nov 2025',
      upto: 'May 2026',
      tasks: [
        'Engineered high-performance, minimalist web interfaces using Next.js, implementing advanced visual effects including custom random fade transitions, subtle background layering, and smooth parallax-style scrolling.',
        'Architected scalable eCommerce and organizational platforms, utilizing complex state management and robust CI/CD pipelines to ensure seamless deployment and UI performance.',
      ],
    },
    {
      company: 'Eruna Technologies',
      tabName: 'Eruna Technologies',
      companyUrl: 'https://www.eruna.co.uk/',
      role: 'Software Development Engineer',
      location: 'Bangalore, IN',
      started: 'Sep 2024',
      upto: 'Aug 2025',
      tasks: [
        'Coordinated frontend development layout tracks and sprint execution within a 4-member team while conducting peer code reviews.',
        'Collaborated with product designers to map user specifications into reusable components and application state logic.',
        'Handled UI performance tuning, front-end bundle optimizations, and cross-browser interface adjustments.',
      ],
    },
    {
      company: 'Independent Contractor',
      tabName: 'Freelance',
      companyUrl: '',
      role: 'Freelance MERN Developer',
      location: 'Remote',
      started: 'Jan 2023',
      upto: 'Aug 2024',
      tasks: [
        'Created a tailor-service tracking application for order status, dynamic pricing, and customer ratings.',
        'Built a custom-clothing eCommerce platform with dynamic product configuration options and client-side state logic.',
      ],
    },
    {
      company: 'Xiphias Software Technology',
      tabName: 'Xiphias Software',
      companyUrl: 'https://www.xiphiastec.com/',
      role: '.NET Full Stack Developer',
      location: 'Bangalore, IN',
      started: 'Mar 2022',
      upto: 'Jul 2022',
      tasks: [
        'Designed enterprise CRM and CMS implementations using .NET MVC, MySQL, and PostgreSQL.',
        'Implemented secure email-based authentication rules and streamlined standard CRUD workflows.',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Sugar Cosmetics',
      url: 'https://sugar-cosmetics-psi.vercel.app/',
      repo: 'https://github.com/ashwekkalgutkar/-Sugar-Cosmetics',
      img: '/img/Sugar cosmetics.png',
      year: 2024,
      description:
        'This project is a website for Sugar Cosmetics. It is built using ReactJS, ChakraUI, Firebase, Redux, and Razorpay.',
      tags: ['ReactJS', 'ChakraUI', 'Firebase', 'Redux', 'Razorpay'],
    },
    {
      id: getId(),
      name: 'Myntra - eCommerce',
      url: 'https://masai-myntra-fashion-clone.netlify.app/',
      repo: 'https://github.com/ashwekkalgutkar/Myntra-Clone',
      img: '/img/myntra-website.png',
      description:
        'This is a clone of the Myntra eCommerce website. It is built using HTML, JavaScript, and CSS.',
      year: 2023,
      tags: ['HTML', 'JavaScript', 'Responsive', 'CSS'],
    },
    {
      id: getId(),
      name: 'Sanitisor - eCommerce',
      url: 'https://653694e7d175843431d652d8--jocular-manatee-1fe350.netlify.app/unit5project/homepage',
      repo: 'https://github.com/Sunil8090/choice_rice',
      img: '/img/Sanitisor.png',
      year: 2023,
      description:
        'This project is an eCommerce website for Sanitisor products. It is built using HTML, JavaScript, json-server, and Firebase.',
      tags: ['HTML', 'JavaScript', 'json-server', 'Firebase'],
    },
    {
      id: getId(),
      name: 'Auto Parts - eCommerce',
      url: 'https://650992846403785c0ba39b65--luxury-faun-db5a1e.netlify.app/',
      repo: 'https://github.com/ashwekkalgutkar/Autoparts',
      img: '/img/Auto parts.png',
      year: 2023,
      description:
        'This project is an eCommerce website for Auto Parts. It is built using JavaScript, json-server, Firebase, and Razorpay.',
      tags: ['HTML', 'JavaScript', 'json-server', 'Firebase', 'Razorpay'],
    },
    {
      id: getId(),
      name: 'Bicycle store - eCommerce',
      url: 'https://phenomenal-crisp-d9f0f8.netlify.app/',
      repo: 'https://github.com/105vivek/Electronic_Store/tree/main/cycle-store',
      img: '/img/Bicycle store.png',
      year: 2023,
      description:
        'This project is an eCommerce website for Bicycle Store. It is built using ReactJS, Firebase, ChakraUI, Redux, and Razorpay.',
      tags: ['ReactJS', 'Firebase', 'ChakraUI', 'Redux', 'Razorpay'],
    },
    {
      id: getId(),
      name: 'Nykaa - eCommerce',
      url: 'https://github.com/Shivampathak124/Naykaa-Clone',
      repo: 'https://github.com/Shivampathak124/Naykaa-Clone',
      img: '/img/Nykaa store.png',
      year: 2022,
      description:
        'This project is an eCommerce website for Nykaa. It is built using HTML, JavaScript, and CSS.',
      tags: ['Responsive', 'HTML', 'JavaScript', 'CSS'],
    },
    // {
    //   id: getId(),
    //   name: 'GitHub User Search',
    //   url: 'https://gaurav-sarage.github.io/github-user-search/',
    //   repo: 'https://github.com/gaurav-sarage/github-user-search',
    //   img: 'https://user-images.githubusercontent.com/85820227/231501132-067311ef-2222-46d0-a20a-f0bf48827e01.png',
    //   year: 2021,
    //   tags: ['HTML', 'CSS', 'JavaScript'],
    // },
    // {
    //   id: getId(),
    //   name: 'Hackathon Portfolio',
    //   url: 'https://gaurav-sarage.github.io/webathon-portfolio/',
    //   repo: 'https://github.com/gaurav-sarage/webathon-portfolio',
    //   img: 'https://user-images.githubusercontent.com/85820227/233788920-7c76e976-2f42-4750-a6ce-ad0fb2eb405d.png',
    //   year: 2022,
    //   tags: ['HTML', 'CSS', 'JavaScript'],
    // },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Call me @+91-9606772560',
  link: 'https://www.linkedin.com/in/ashwek-kalgutkar/',
};
