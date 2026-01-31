const navLinks = [
  { name: "Projects", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Explorations", link: "/explorations" }, // <-- add this
];


const words = [
  { text: "Robotics", imgPath: "/images/ideas.svg" },
  { text: "Control Systems", imgPath: "/images/concepts.svg" },
  { text: "Circuits", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Robotics", imgPath: "/images/ideas.svg" },
  { text: "Control Systems", imgPath: "/images/concepts.svg" },
  { text: "Circuits", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 22, suffix: "+", label: "Technical Projects Built" },
  { value: 25, suffix: "+", label: "Core Tools, Applications and Languages" },
  { value: 3, suffix: "rd", label: "Year Mechatronics Engineering Student" },
  { value: 3, suffix: "+", label: "Logistical Positions Held" }
];

const logoIconsList = [
  { imgPath: "/images/logos/fusionlogo.png" },
  { imgPath: "/images/logos/solidworkslogo.png" },
  { imgPath: "/images/logos/pythonlogo.png" },
  { imgPath: "/images/logos/matlablogo.png" },
  { imgPath: "/images/logos/revitlogo.png" },
  { imgPath: "/images/logos/nilogo.png" },
  { imgPath: "/images/logos/siemenslogo.png" },
  { imgPath: "/images/logos/quanserlogo.png" },
  { imgPath: "/images/logos/autocadlogo.png" },

];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "System Based Thinking",
    desc: "I break problems into signals, constraints, and requirements—then build clean, testable solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "I document decisions, explain tradeoffs, and keep work organized for teammates and stakeholders.",
  },
  {
    imgPath: "/images/time.png",
    title: "Reliable Execution",
    desc: "I ship on deadlines by planning milestones, testing early, and iterating quickly.",
  },
];

const techStackImgs = [
  { name: "C++", imgPath: "/images/logos/cpp.svg" },
  { name: "MATLAB", imgPath: "/images/logos/matlab.svg" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Arduino", imgPath: "/images/logos/arduino.svg" },
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "React", imgPath: "/images/logos/nilogo.png" },

];

const techStackIcons = [
  {
    name: "Autodesk",
    modelPath: "/models/autodesklogo.glb",
    scale: 0.7,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/pythonlogo.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "C++",
    modelPath: "/models/cpp.glb",
    scale: 20,
    rotation: [0, -1.6, 0],
  },
  {
    name: "Solidworks",
    modelPath: "/models/solidlogo.glb",
    scale: 0.25,
    rotation: [0, Math.PI, 0],
  },
  {
    name: "STMicroE",
    modelPath: "/models/stmlogo.glb",
    scale: 0.015,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
        "Shivam is calm under pressure and stays detail-focused while supporting a fast-paced clinically demanding environment.",
    imgPath: "/images/logos/willy.svg",
    logoPath: "/images/logos/basicwilliamlogo.png",
    title: "Emergency Department Clerical Associate",
    date: "Nov 2024 - Present",
    responsibilities: [
      "Supporting emergency patient care logistic operations by coordinating patient flow and communication across care teams.",
      "Accurately enter/update patient information and maintain documentation while prioritizing confidentiality and speed.",
      "Handle high-volume, time-sensitive tasks while staying composed and professional in stressful situations.",
    ],
  },
  {
    review:
        "Shivam brought strong organization and accountability—he consistently followed through and kept things accurate.",
    imgPath: "/images/logos/airliq.png",
    logoPath: "/images/logos/vitalaire-logo.svg",
    title: "Patient Care Coordinator",
    date: "2022",
    responsibilities: [
      "Supported patient communication and scheduling workflows in a clinical services setting.",
      "Reconciled discrepancies by reviewing transaction details and communicating with internal teams.",
      "Improved reliability of reporting by keeping patient/account data clean and consistent.",
    ],
  },
  {
    review:
        "Shivam combines engineering curiosity with hands-on building—he learns fast and turns ideas into prototypes.",
    imgPath: "/images/TMU-CEIE-rgb.png",
    logoPath: "/images/TMU_Bold_Logo.png",
    title: "Industrial / Engineering Student Projects",
    date: "2023 - Present",
    responsibilities: [
      "Built control/robotics prototypes (Arduino + servo driver/PCA9685) and iterated based on testing.",
      "Implemented algorithms and tooling in C++/MATLAB (signal response, poles/roots, numerical methods).",
      "Designing modules with CAD software's paired with additive manufacturing and circuitry to bring projects to life",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/AODA.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const awardsAndCertifications = [
  {
    title: "Accessibility for Ontarians with Disabilities Act (AODA) Certification",
    issuer: "Government of Ontario",
    year: "2025",
    desc: "Accessibility and inclusion training focused on compliance and accessible service practices.",
    imgPath: "/images/AODA.png",
  },
  {
    title: "Medical Terminology",
    issuer: "Universal Class",
    year: "2024",
    desc: "Clinical terminology training to support accurate documentation and communication in healthcare settings.",
    imgPath: "/images/medtermin.png",
  },
  {
    title: "EchoAR Inspiratory Award",
    issuer: "Echo3D",
    year: "2022",
    desc: "Recognized for innovative use of 3D/AR technology and technical creativity.",
    imgPath: "/images/logos/echoar.png",
  },
  {
    title: "Financial Markets Certificate",
    issuer: "Coursera Yale Open Course",
    year: "2022",
    desc: "Successful completion of the introduction to financial markets online course.",
    imgPath: "/images/logos/yalelog.png",
  },

];

const socialImgs = [
  { name: "Insta", imgPath: "/images/insta.png" }, // swapped for more relevant
  { name: "x", imgPath: "/images/x.png" },
  { name: "Linkedin", imgPath: "/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  awardsAndCertifications,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
