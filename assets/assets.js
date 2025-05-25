import user_image from './user_image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import frameworks_icon from './frameworks_icon.png';
import frameworks_icon_dark from './frameworks_icon_dark.png';
import tools_icon from './tools_icon.png';
import tools_icon_dark from './tools_icon_dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_image.jpg';
import download_icon from './download-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    frameworks_icon,
    frameworks_icon_dark,
    tools_icon,
    tools_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: 'Secure Authentication System with Spring Boot and React',
    description:
      'Developed a complete authentication system with Spring Security and React, featuring JWT-based login, email OTP verification, password reset, and protected routes.',
    bgImage: '/work-1.png',
    link: 'https://github.com/dea-238/spring-auth-system',
  },
  {
    title: 'Real Estate Rental Platform with Role-Based Dashboards',
    description:
      'Built a full-stack real estate platform with geo search, Cognito auth, and AWS deployment. UI built with Redux Toolkit and animations.',
    bgImage: '/work-2.png',
    link: 'https://github.com/dea-238/real-estate-platform',
  },
  {
    title: 'Social Media Platform Using Java Full Stack',
    description:
      'Developed a social media app with Spring Boot, image uploads, post/comment system, and secure auth with JavaMail.',
    bgImage: '/work-3.png',
    link: 'https://github.com/dea-238/social-platform-java',
  },
  {
    title: 'Decentralized Crowdfunding Platform with Smart Contract Integration',
    description:
      'Built a full-stack Ethereum-based DApp with wallet login, smart contract deployment, goal tracking, and refunds.',
    bgImage: '/work-4.png',
    link: 'https://github.com/dea-238/eth-crowdfund-dapp',
  },
];


export const serviceData = [
    { icon: assets.web_icon, title: 'Banana Sports India - Web development & Social Media Intern', description: 'Built a responsive web platform with interactive galleries and performance optimizations. I also supported event execution, managed social media content, and integrated a digital payment system to streamline bookings. Improved user engagement by 25%', link: 'https://www.bananasports.in/' },
    { icon: assets.mobile_icon, title: ' Kacklewalls Nutrition Pvt Ltd - Web development & Data Analytics Intern', description: 'Developed a web app to automate inventory and transaction management with PhonePe Business integration, reducing manual work by 30%. Built real-time analytics dashboards for inventory and finance insights, and collaborated in a 3-member team to enhance UX and streamline workflows', link: '' },
    { icon: assets.ui_icon, title: 'CanOfJuice - The Design Studio - Frontend Developer Intern', description: 'Built a responsive portfolio site using React.js, Tailwind CSS, and Framer Motion with scroll animations, dynamic filtering, and modular components. I optimized image rendering and collaborated with designers to turn case studies into interactive visual experiences.', link: 'https://can-of-juice.vercel.app/' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java, JavaScript, TypeScript (basic),HTML, CSS, SQL' },
    { icon: assets.frameworks_icon, iconDark: assets.frameworks_icon_dark, title: 'Frameworks', description: 'React.js, Tailwind CSS, GSAP, Angular (beginner),Node.js (Express), Flask, Spring Boot,Prophet' },
    { icon: assets.tools_icon, iconDark: assets.tools_icon_dark, title: 'Tools', description: 'Visual Studio Code, Jupyter Notebook, Git, GitHub, Postman,AWS (EC2, S3 – beginner), Streamlit Cloud, GitHub Pages,MySQL, MongoDB (beginner)' }
];
