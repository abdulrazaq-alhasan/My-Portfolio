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
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
},
{
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
},
{
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
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
    description: "The wisdom of life consists in the elimination of non-essentials.",
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
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
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