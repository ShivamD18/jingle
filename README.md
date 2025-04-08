<div align="center">
  <br />
    <a href="" target="_blank">
      <img src="public/images/readme.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </div>

  <h3 align="center">Interactive 3D Portfolio Website</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## ⚠️ Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

The 3D Portfolio project is a highly engaging personal website that features animated 3D scenes, smooth camera transitions, interactive model showcases, and responsive design. It’s ideal for developers, designers, or freelancers looking to stand out in the digital crowd.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **50k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Three.js
- React Three Fiber
- Drei
- GSAP
- Tailwind CSS
- Vite
- React 19

## <a name="features">🔋 Features</a>

### Features of the 3D Portfolio Project

👉 Animated 3D models and reveal animations

👉 Realistic lighting and shadows

👉 GSAP-powered scroll interactions

👉 Responsive design with Tailwind CSS and Flexbox/Grid

👉 Micro Interactions

👉 Multi-section layout (About, Projects, Contact)

👉 Mobile optimized 3D experience

and many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/JavaScript-Mastery-Pro/3d-portfolio_2025.git
cd 3d-portfolio_2025
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap");
@import "tailwindcss";

:root {
  --gradient: radial-gradient(circle, #e5e5e5 0%, #fff 100%);
}

html,
body {
  width: 100dvw;
  overflow-x: hidden;
  background-color: black;
  color: white;
  scroll-behavior: smooth;
  font-family: "Mona Sans", sans-serif;
}

section {
  width: 100dvw;
}

@theme {
  --font-sans: "Mona Sans", sans-serif;
  --color-white-50: #d9ecff;
  --color-black-50: #1c1c21;
  --color-black-100: #0e0e10;
  --color-black-200: #282732;
  --color-blue-50: #839cb5;
  --color-blue-100: #2d2d38;
}

@layer utilities {
  .flex-center {
    @apply flex justify-center items-center;
  }
  .flex-col-center {
    @apply flex flex-col justify-center items-center;
  }
}

@layer components {
  .padding-x {
    @apply px-5 md:px-10;
  }

  .padding-x-lg {
    @apply px-5 md:px-20;
  }

  .section-padding {
    @apply px-5 md:px-10 md:mt-40 mt-20;
  }

  .mt-responsive {
    @apply xl:mt-20 md:mt-0 mt-40;
  }

  /* General Grids */
  .grid-base {
    @apply grid grid-cols-1;
  }

  .grid-2-cols {
    @apply grid grid-cols-1 md:grid-cols-2 gap-6;
  }

  .grid-3-cols {
    @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6;
  }

  .grid-3-cols-md-tight {
    @apply grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0;
  }

  .grid-4-cols {
    @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7;
  }

  .grid-12-cols {
    @apply grid grid-cols-1 xl:grid-cols-12 gap-10;
  }

  .hero-layout {
    @apply relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center;
  }

  .hero-text {
    @apply flex flex-col justify-center md:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none;
    img {
      @apply size-8 md:size-10 object-contain;
    }
    .slide {
      @apply absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden;
    }
  }

  .hero-badge {
    @apply bg-black-200 py-2 px-4 rounded-full w-fit text-sm md:text-base text-nowrap;
  }

  .hero-3d-layout {
    @apply xl:w-[70%] w-full h-full min-h-[50vh] absolute xl:-top-20 top-24 xl:-right-20 right-0;
  }

  .navbar {
    @apply fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out;

    &.scrolled {
      @apply top-0 bg-black;
    }

    &.not-scrolled {
      @apply md:top-10 top-0 bg-transparent;
    }

    .inner {
      @apply mx-auto flex items-center justify-between;
    }

    .logo {
      @apply text-white-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105;
    }

    nav.desktop {
      @apply hidden lg:flex items-center;

      ul {
        @apply flex space-x-8;

        li {
          @apply text-white-50 relative;

          span {
            @apply transition-colors duration-300 hover:text-white;
          }

          .underline {
            @apply absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full;
          }
        }
      }
    }

    .contact-btn {
      @apply flex;

      .inner {
        @apply px-5 py-2 rounded-lg bg-white text-black group-hover:bg-black-50 transition-colors duration-300;

        span {
          @apply group-hover:text-white transition-colors duration-300;
        }
      }
    }
  }

  .app-showcase {
    @apply w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center;

    .showcaselayout {
      @apply flex xl:flex-row flex-col gap-10 justify-between;
    }

    .first-project-wrapper {
      @apply h-full flex flex-col justify-between xl:w-[60%];

      .image-wrapper {
        @apply xl:h-[70vh] md:h-[50vh] h-96 relative;

        img {
          @apply w-full h-full object-cover rounded-xl absolute inset-0;
        }
      }

      .text-content {
        @apply space-y-5 mt-5;

        .badges {
          @apply flex gap-2 mb-4;
        }

        h2 {
          @apply text-2xl md:text-3xl lg:text-4xl font-bold;
        }
      }
    }

    .project-list-wrapper {
      @apply flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%];

      .image-wrapper {
        @apply xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0;
      }

      img {
        @apply w-full h-full object-contain rounded-xl;
      }

      h2 {
        @apply text-lg md:text-xl lg:text-2xl font-semibold mt-5;
      }
    }
  }

  .cta-wrapper {
    @apply relative z-20 cursor-pointer;
  }

  .cta-button {
    @apply px-4 py-4 rounded-lg bg-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden;

    .bg-circle {
      @apply absolute -right-10 origin-center top-1/2 -translate-y-1/2 
        w-[120%] h-[120%] group-hover:size-10 group-hover:right-10
        rounded-full bg-white-50 transition-all duration-500;
    }

    .text {
      @apply uppercase md:text-lg text-black transition-all duration-500
        group-hover:text-white-50 group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5;
    }

    .arrow-wrapper {
      @apply group-hover:bg-white-50 size-10 rounded-full absolute right-10 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden;

      img {
        @apply size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500;
      }
    }
  }

  .card-border {
    @apply border border-black-50 bg-black-100;
  }

  .marquee-item {
    @apply md:w-40 w-32;
  }

  .timeline-wrapper {
    @apply absolute top-0 xl:left-[35.5vw] md:left-10 left-5 h-full flex justify-center;
  }

  .timeline {
    @apply absolute h-[110%] -top-10 w-14 md:w-28 z-20 bg-black;
  }

  .timeline-logo {
    @apply md:size-20 size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7 border border-black-50 bg-black-100;
  }

  .exp-card-wrapper {
    @apply flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between;
  }

  .gradient-edge {
    @apply w-36 h-full absolute bottom-0 z-20;
  }

  .tech-card-animated-bg {
    @apply absolute left-0 bottom-[-100%] w-full h-full bg-[#2D3240] group-hover:bottom-0 transition-all duration-700;
  }

  .tech-card-content {
    @apply flex flex-col md:justify-center items-center xl:gap-5 xl:h-[50vh] overflow-hidden relative z-10 group-hover:cursor-grab;

    & p {
      @apply text-lg 2xl:text-2xl pb-5 xl:pb-0 font-semibold text-white-50 text-center;
    }
  }

  .tech-grid {
    @apply grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 xl:gap-16 md:gap-10 gap-5 mt-16;
  }

  .tech-icon-wrapper {
    @apply flex justify-center items-center w-52 h-60 relative;
  }

  form {
    label {
      @apply block text-white-50 mb-2;
    }

    input,
    textarea {
      @apply w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md;
    }

    a {
      @apply w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center gap-2;

      img {
        @apply inline-block;
      }
    }
  }

  .footer {
    @apply my-10 md:mt-20 mt-10 text-white-50 px-5 md:px-20 xl:px-20 flex items-center justify-center;

    .footer-container {
      @apply grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 w-full;
    }

    p {
      @apply text-center md:text-start cursor-pointer;
    }

    .socials {
      @apply flex items-center justify-center gap-5;

      .icon {
        @apply border border-black-50 bg-black-100 flex justify-center items-center rounded-xl size-10 md:size-12 cursor-pointer transition-all duration-500 hover:bg-black-50;
      }

      img {
        @apply inline-block;
      }
    }
  }
}

/* Hero text slider starts */
.slide {
  display: inline-block;
  flex-direction: column;
  transition: all cubic-bezier(0.71, 0.03, 0.34, 1);
}

.wrapper {
  display: flex;
  flex-direction: column;
  animation: wordSlider 21s infinite cubic-bezier(0.9, 0.01, 0.3, 0.99);
}

@keyframes wordSlider {
  0% {
    transform: translateY(0.5%);
  }
  12.5% {
    transform: translateY(-12.5%);
  }
  25% {
    transform: translateY(-25%);
  }
  37.5% {
    transform: translateY(-37.5%);
  }
  50% {
    transform: translateY(-50%);
  }
  62.5% {
    transform: translateY(-62.5%);
  }
  75% {
    transform: translateY(-75%);
  }
  87.5% {
    transform: translateY(-87.5%);
  }
}

/* Hero Text slider ends */

.gradient-line {
  width: 2px;
  background: linear-gradient(
    0deg,
    rgba(69, 222, 196, 0) 0%,
    #62e0ff 25%,
    #52aeff 37.51%,
    #fd5c79 62.83%,
    #6d45ce 92.91%
  );
}

.gradient-edge:nth-of-type(1) {
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.gradient-edge:nth-of-type(2) {
  right: 0;
  background: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

/* marquee */
.marquee {
  width: 100dvw;
  overflow: hidden;
  position: relative;
}
.marquee-box {
  display: flex;
  align-items: center;
  width: 200%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  animation: marquee 60s linear infinite;
}
.marquee-item {
  float: left;
}
@keyframes marquee {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
/* marquee end */

.card {
  --start: 0;
  position: relative;
  overflow: hidden;
  transition: border-color 1s ease-in-out;
}

.card::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  border: 2px solid transparent;
  background: var(--gradient);
  background-attachment: fixed;
  mask: linear-gradient(#0000, #0000),
    conic-gradient(
      from calc((var(--start) - 15) * 1deg),
      #ffffff1f 0deg,
      white,
      #ffffff00 100deg
    );
  mask-composite: intersect;
  mask-clip: padding-box, border-box;
  opacity: 0;
  transition: 0.5s ease;
}

.glow {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: blur(10px);
  filter: saturate(200);
}

.card:hover::before {
  opacity: 1;
}

```

</details>

<details>
<summary><code>constants/index.js</code></summary>

```js
const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
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
  techStackImgs,
  navLinks,
};
```

</details>

<details>
<summary><code>components/models/hero_models/Room.jsx</code></summary>

```jsx
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 optimized-room.glb 
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/models/optimized-room.glb");
  const screensRef = useRef();
  const matcapTexture = useTexture("/images/textures/mat1.png");

  const curtainMaterial = new THREE.MeshPhongMaterial({
    color: "#d90429",
  });

  const bodyMaterial = new THREE.MeshPhongMaterial({
    map: matcapTexture,
  });

  const tableMaterial = new THREE.MeshPhongMaterial({
    color: "#582f0e",
  });

  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: "#fff",
  });

  const compMaterial = new THREE.MeshStandardMaterial({
    color: "#fff",
  });

  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: "#8338ec",
  });

  const chairMaterial = new THREE.MeshPhongMaterial({
    color: "#000",
  });

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={screensRef}
          intensity={1.5} // Strength of the bloom
          luminanceThreshold={0.2} // Minimum luminance needed
          luminanceSmoothing={0.9} // Smooth transition
          blendFunction={BlendFunction.ADD} // How it blends
        />
      </EffectComposer>
      <mesh
        geometry={nodes._________6_blinn1_0.geometry}
        material={curtainMaterial}
      />
      <mesh geometry={nodes.body1_blinn1_0.geometry} material={bodyMaterial} />
      <mesh geometry={nodes.cabin_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.chair_body_blinn1_0.geometry}
        material={chairMaterial}
      />
      <mesh geometry={nodes.comp_blinn1_0.geometry} material={compMaterial} />
      <mesh
        ref={screensRef}
        geometry={nodes.emis_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.handls_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.keyboard_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.kovrik_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_bl_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.lamp_white_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.miuse_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor2_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.monitor3_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pCylinder5_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.pillows_blinn1_0.geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={nodes.polySurface53_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0.geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={nodes.radiator_blinn1_0001.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.railing_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_bttns_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.red_vac_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.stylus_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh geometry={nodes.table_blinn1_0.geometry} material={tableMaterial} />
      <mesh
        geometry={nodes.tablet_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.triangle_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vac_black_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuum1_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vacuumgrey_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.vires_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window_blinn1_0.geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={nodes.window4_phong1_0.geometry}
        material={materials.phong1}
      />
    </group>
  );
}

useGLTF.preload("/models/optimized-room.glb");
```

</details>

<details>
<summary><code>/components/models/contact/Computer.jsx</code></summary>

```jsx
import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    "/models/computer-optimized-transformed.glb"
  );

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/computer-optimized-transformed.glb");

export default Computer;
```

</details>

## <a name="links">🔗 Assets</a>

- Assets used in the project can be found [here](https://drive.google.com/drive/folders/1Z-ovENYzzTQ-MEnNWyLpdPH2Bkv0M1ti)

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with
detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://beta.jsmastery.pro/" target="_blank">
  <img src="public/images/readme-bottom.png" alt="Project Banner">
</a>
