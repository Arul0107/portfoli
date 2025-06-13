import React from "react";
import "./TechStackGrid.css"; // Import the CSS file
const data = {
  "Web Frameworks and Libraries": [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://react.dev/",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      url: "https://getbootstrap.com/",
    },
    {
      name: "Daisy UI",
      icon: "https://avatars.githubusercontent.com/u/76870092?s=200&v=4",
      url: "https://daisyui.com/",
    },
    {
      name: "Shadcn UI",
      icon: "https://www.svgrepo.com/show/532207/resize-handle.svg",
      url: "https://shadcn.dev/",
    }, // Updated to a more stable asset link
    {
      name: "Material UI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      url: "https://mui.com/",
    },
    {
      name: "Ant Design",
      icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      url: "https://ant.design/",
    }, // Updated to a direct SVG from their assets
    {
      name: "Recharts",
      icon: "https://blog.kakaocdn.net/dn/FISsJ/btquotFH0Kb/CKNE6tFezRK7lLkkteWzqk/img.png",
      url: "https://recharts.org/",
    }, // Updated to their main SVG logo
    {
      name: "Framer Motion",
      icon: "https://images.seeklogo.com/logo-png/44/1/framer-motion-logo-png_seeklogo-446185.png",
      url: "https://www.framer.com/motion/",
    },
  ],
  "Mobile Frameworks": [
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://reactnative.dev/",
    },
    {
      name: "Expo",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/expo.svg",
      url: "https://expo.dev/",
    },
  ],
  "Mobile Frameworks": [
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://reactnative.dev/",
    },
    {
      name: "Expo",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/expo.svg",
      url: "https://expo.dev/",
    },
  ],
  "Backend Frameworks and Environments": [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org/en",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      url: "https://expressjs.com/",
    },
    {
      name: "Fast API",
      icon: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
      url: "https://fastapi.tiangolo.com/",
    },
  ],
  "Programming Languages": [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      url: "https://www.python.org/",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
  "Platform Development": [
    {
      name: "ServiceNow (UI Builder)",
      icon: "/servicenow-green-circle-round-25366.svg",
    },
  ],
  "Version Control & Collaboration": [
    {
      name: "git",
      icon: "https://1000logos.net/wp-content/uploads/2020/08/Git-Logo-640x400.png",
    },
    {
      name: "Git Hub",
      icon: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
    },
  ],
  "Backend & Cloud": [
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      url: "https://firebase.google.com/",
    },
 {
  name: "Hostinger",
  icon: "https://assets.hostinger.com/images/logos/hostinger-logo-icon-144x144.png"
}

 // This one seems to be stable and working
  ],
  "Design Tools": [
    {
      name: "Adobe Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      url: "https://www.adobe.com/products/photoshop.html",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      url: "https://www.figma.com/",
    },
  ],
  "Data Visualization": [
   {
  name: "Microsoft Power BI",
  icon: "https://cdn.worldvectorlogo.com/logos/power-bi-1.svg"
}

  ],
  "Project Management & Collaboration": [
    {
      name: "Jira",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      url: "https://www.atlassian.com/software/jira",
    },
  ],
};

const TechStackCard = ({ title, stack }) => (
  <div className="category-section">
    <h3 className="category-title">{title}</h3>
    <div className="card-grid">
      {stack.map((item, index) => (
        <div key={index} className="card">
          <img
            src={item.icon}
            alt={item.name}
            className="card-icon"
            onError={(e) => (e.target.style.display = "none")}
          />
          <span className="card-text">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechStackGrid = () => (
  <div className="tech-stack-container">
    <h1 className="main-title">Tech Stack</h1>
    {Object.entries(data).map(([title, stack]) => (
      <TechStackCard key={title} title={title} stack={stack} />
    ))}
  </div>
);

export default TechStackGrid;
