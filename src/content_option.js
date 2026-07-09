import backroad from "./assets/images/backroads.png";
import unsplash from "./assets/images/unsplash-images.png";

const logotext = "ABBE";
const meta = {
    title: "Abdulrazaq Alhasan",
    description: "I'm Abdulrazaq Alhasan, a Frontend Developer specializing in React, Next.js, Redux Toolkit, and Tailwind CSS.",
};

const introdata = {
    title: "I’m Abdulrazaq Alhasan",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I create responsive modern websites",
    },
    description: "Passionate about creating fast, responsive, and scalable web applications with modern frontend technologies.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Frontend Developer based in Västerås, Sweden, passionate about building modern, responsive, and user-friendly web applications. I enjoy learning new technologies, solving problems, and creating clean, maintainable code with React, JavaScript, and Vue.",
};

const worktimeline = [
    {
        jobtitle: "Frontend Development Intern",
        where: "Ampilio AB, Västerås",
        date: "Feb 2020",
    },
    {
        jobtitle: "Frontend Development Intern",
        where: "Rise and Shine Örebro",
        date: "Oct 2019",
    },
];

const skills = [
    {
        name: "Html",
        value: 95,
    },
    {
        name: "Css",
        value: 85,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Vue",
        value: 75,
    }
];

const services = [{
    title: "UI & UX Design",
    description: "I design clean and modern user interfaces focused on usability, responsiveness, and user experience.",
},
{
    title: "Frontend Development",
    description: "I build responsive and interactive web applications using React, JavaScript, TypeScript, and modern frontend tools.",
},
{
    title: "Wordpress Design",
    description: "I create and customize WordPress websites with a focus on performance, responsiveness, and clean design.",
},
];

const dataportfolio = [{
    img: backroad,
    description: "A responsive travel website built with React featuring reusable components, modern UI, and a clean user experience.",

    link: "https://backroads-web.vercel.app/",
    github: "https://github.com/abdulrazaq-alhasan/backroads-app",
},
{
    img: unsplash,
    description: "An image search application powered by the Unsplash API, allowing users to search and browse high-quality photos in real time.",

    link: "https://unsplash-images-taupe.vercel.app/",
    github: "https://github.com/abdulrazaq-alhasan/Unsplash-Images",
},
{
    img: "https://picsum.photos/400/?grayscale",
    title: "Coming Soon",
    description: "This project is currently in development. Stay tuned!",
    link: "#",
    github: "#",
},
{
    img: "https://picsum.photos/400/600/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    github: "#",
},
{
    img: "https://picsum.photos/400/300/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    github: "#",
},
{
    img: "https://picsum.photos/400/700/?grayscale",
    description: "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
    github: "#",
}];

const contactConfig = {
    YOUR_EMAIL: "abdulrazaq.me@gmail.com",
    YOUR_FONE: "+46 765 87 90 28",
    description: "I’m always open to discussing new opportunities, projects, or collaborations in frontend development. Feel free to reach out anytime.",
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/abdulrazaq-alhasan",
    linkedin: "https://www.linkedin.com/feed/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};