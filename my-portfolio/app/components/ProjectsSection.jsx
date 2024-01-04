"use client";
import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: "1",
    title: "Social Media Application (MemoRift)",
    description:
      "Introducing MemoRift - a user-friendly social media application where you can create, share, and cherish memories. Sign up to document your life's moments through photos and notes. Enjoy the freedom to delete or customize memories, engage with others through likes and comments, and explore a timeline of your digital journey. Your personal haven for memories awaits on MemoRift",
    image: "/images/p1.png",
    tag: ["ALL", "FUll-STACK"],
    gitUrl: "https://github.com/AhmadSaleh99/social-media-app.git",
    previewUrl: "https://beamish-kheer-f833c1.netlify.app",
  },
  {
    id: "2",
    title: "Simple Linkedin clone",
    description:
      "a simple Linkedin clone project built with React, Redux, and Firebase. Sign up, log in, and effortlessly share your thoughts through text-based posts. Elevate your professional presence in a user-friendly environment designed for simplicity and connectivity.The project brings together the power of React for a dynamic user interface, Redux for state management, and Firebase for secure authentication and real-time data storage",
    image: "/images/p2.png",
    tag: ["ALL", "FUll-STACK"],
    gitUrl: "https://github.com/AhmadSaleh99/linkedin-clone",
    previewUrl: "https://linkedin-clone-7ed09.web.app/",
  },
  {
    id: "3",
    title: "Quick Chat",
    description:
      " Introducing QuickChat  a minimalist chat application crafted with React and Firebase. Experience seamless communication as you log in, connect with friends, and exchange messages in real-time. QuickChat leverages the simplicity of React for a responsive interface, while Firebase ensures secure authentication and instant message delivery.",
    image: "/images/p3.png",
    tag: ["ALL"],
    gitUrl: "https://github.com/AhmadSaleh99/react-chat-app",
    previewUrl: "https://celadon-mandazi-a920d0.netlify.app/",
  },
  {
    id: "4",
    title: "simple netflix clone",
    description:
      " Introducing FlixHub – a React-based Netflix-inspired project that brings the world of movies to your fingertips. With Firebase authentication, dive into a personalized movie exploration experience. Browse through diverse categories, discover new releases, and read detailed movie descriptions.",
    image: "/images/p4.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/netflix-clone",
    previewUrl: "https://netflix-clone-83a0f.web.app/",
  },
  {
    id: "5",
    title: "Leon agency",
    description:
      "A profitional design for an online agency called Leon with html, css, webfonts and js.",
    image: "/images/p5.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/template-one",
    previewUrl: "https://ahmadsaleh99.github.io/template-one/",
  },
  {
    id: "6",
    title: "Coffee Shop",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p6.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/Coffee-Shope",
    previewUrl: "https://ahmadsaleh99.github.io/Coffee-Shope/",
  },
  {
    id: "7",
    title: "GPT-3",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p7.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/gpt_ash",
    previewUrl: "https://stupendous-froyo-3d8f4f.netlify.app/",
  },
  {
    id: "8",
    title: "Gym Exercises",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p8.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/gym-exercises",
    previewUrl: "https://sage-meerkat-faedb8.netlify.app/",
  },
  {
    id: "9",
    title: "YouTube clone",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p9.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/youTube-Clone",
    previewUrl: "https://subtle-lolly-f3fd73.netlify.app/",
  },
  {
    id: "10",
    title: "Todo List",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p10.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/todo-list",
    previewUrl: "https://ahmadsaleh99.github.io/todo-list/",
  },
  {
    id: "11",
    title: "Memory Card Game",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p11.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/memory-card-game",
    previewUrl: "https://ahmadsaleh99.github.io/memory-card-game/",
  },
  {
    id: "12",
    title: "Tic Tac Toe Game",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p12.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/tic-tac-toe-game",
    previewUrl: "https://ahmadsaleh99.github.io/tic-tac-toe-game/",
  },
  {
    id: "13",
    title: "Simple Calculator",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p13.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/eval-calculator",
    previewUrl: "https://ahmadsaleh99.github.io/eval-calculator/",
  },
  {
    id: "14",
    title: "Profile Card",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p14.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/card",
    previewUrl: "https://ahmadsaleh99.github.io/card/",
  },
  {
    id: "15",
    title: "Insure landing page",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p15.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/challenge-one",
    previewUrl: "https://ahmadsaleh99.github.io/challenge-one/",
  },
  {
    id: "16",
    title: "Special design for web development agency",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p16.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/special-design",
    previewUrl: "https://ahmadsaleh99.github.io/special-design/",
  },
  {
    id: "17",
    title: "Art Agency Landing page",
    description:
      "a stylish and user-friendly coffee shop website. Crafted with HTML, CSS, and JS, it brings the cozy charm of a coffee shop online. Browse through the menu, explore blends, and catch up on the latest promotions. A simple, yet delightful, experience for coffee lovers. Welcome to BeanBuzz Café – where web development meets the love for coffee",
    image: "/images/p17.png",
    tag: ["ALL", "FRONT-END"],
    gitUrl: "https://github.com/AhmadSaleh99/template-two",
    previewUrl: "https://ahmadsaleh99.github.io/template-two/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("ALL");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2
        className="text-center text-4xl font-bold text-white mt-4"
        id="projects"
      >
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-4 py-6 text-white ">
        <ProjectTag
          name="ALL"
          onClick={handleTagChange}
          isSelected={tag === "ALL"}
        />
        <ProjectTag
          name="FUll-STACK"
          onClick={handleTagChange}
          isSelected={tag === "FUll-STACK"}
        />
        <ProjectTag
          name="FRONT-END"
          onClick={handleTagChange}
          isSelected={tag === "FRONT-END"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
        {filteredProject.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
