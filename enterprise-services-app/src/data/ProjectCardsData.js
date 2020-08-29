import cutellama from '../images/cute-llama.jpg'
import llama from '../images/llama2.svg'
import llamaGlasses from '../images/Llama-face/SVG/glasses01.svg'
import llamaHeartGlasses from '../images/Llama-face/SVG/heart-glasses.svg'
import llamaOpenGlasses from '../images/Llama-face/SVG/open-glasses.svg'
import llamaRibbonBow from '../images/Llama-face/SVG/ribbon.svg'

const ProjectCardsData = [
  {
    img: cutellama,
    cardTitle :"AI/ML Projects",
    cardText : "Host of Data Science Projects",
    listItem1: "Projects in Python covering:",
    listItem2: "CV/RV, KNN, IR, Predictions,",
    listItem3: "Rec Systems and many more.",
    cardLink1: "/gitDataScience",
    cardLink2: "/home"
  },

  {
    img: llamaHeartGlasses,
    cardTitle :"Portfolio Application",
    cardText : "Used as my projects directory.",
    listItem1: "Front End Application based on:",
    listItem2: "JS, React, Redux,",
    listItem3: "Bootstrap, etc",
    cardLink1: "/gitEnterpriseApp",
    cardLink2: "/home"
  },

  {
    img: llamaGlasses,
    cardTitle :"ProMan Application",
    cardText : "Project Tasks Management App",
    listItem1: "Full Stack Application based on:",
    listItem2: "JS, React, Redux, Bootstrap,",
    listItem3: "Java, SpringBoot, mySQL, H2",
    cardLink1: "/gitProjectManagementTool",
    cardLink2: "/home"
  },
  {
    img: llama,
    cardTitle :"TDD with React",
    cardText : "Highlights TDD practices.",
    listItem1: "Simple Front End Application",
    listItem2: "JS, React, Redux",
    listItem3: "Enzyme, mocha",
    cardLink1: "/gitTestingWithReact",
    cardLink2: "/home"
  },

  {
    img: llamaRibbonBow,
    cardTitle :"Full Repository Directory",
    cardText : "Want to see more?",
    listItem1: "See my full repository",
    listItem2: "by clicking the button",
    listItem3: "below.",
    cardLink1: "/gitOtherRepositories",
    cardLink2: "/home"
  },

  {
    img: llamaOpenGlasses,
    cardTitle :"Project 007",
    cardText : "Play as James llama",
    listItem1: "Cool cars? Check!",
    listItem2: "Perfectly tailored suit? Check!",
    listItem3: "Evil villain with shark tank? Check!",
    cardLink1: "/resume",
    cardLink2: "/home"
  }

];

export default ProjectCardsData;
