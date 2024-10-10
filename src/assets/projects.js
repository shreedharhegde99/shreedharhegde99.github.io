import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiChartdotjs,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const [
  html,
  css,
  javascript,
  react,
  chakraui,
  nodejs,
  expressjs,
  mongodb,
  redux,
  chartjs,
] = [
  <AiFillHtml5 size="2.2rem" color="#ff7b53e0" />,
  <SiCss3 size="2rem" color="#7b7bf7" />,
  <SiJavascript size="2rem" color="#3ca73c" />,
  <SiReact size="2rem" color="#61dafb" />,
  <SiChakraui size="2rem" color="#61dafb" />,
  <IoLogoNodejs size="2rem" color="green" />,
  <SiExpress size="2rem" color="#fff" />,
  <SiMongodb size="2rem" color="green" />,
  <SiRedux size="2rem" color="#7b7bf7" />,
  <SiChartdotjs size="2rem" color="#ff7b53e0" />,
];

export const projectList = [
  {
    image: "https://i.imgur.com/XbRgmeB.png",
    name: "Moneyfi",
    desc: `An app to keep a track of all your income and expense
     related transactions at a single place`,
    tech_stacks_icons: [
      react,
      redux,
      nodejs,
      expressjs,
      mongodb,
      chakraui,
      chartjs,
    ],
    tech_stacks: [
      "React",
      "Redux",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "ChakraUI",
      "Chart.js",
    ],
    deployed_link: "https://moneyfi.netlify.app",
    github_link: "https://github.com/shreedharhegde99/moneyfi",
  },
  {
    image: "https://i.imgur.com/ZY0smSE.png",
    name: "KFC Clone",
    desc: `KFC is a fast food restaurant chain that specializes in fried chicken. 
              It is the world's second-largest restaurant chain after McDonald's`,
    tech_stacks_icons: [html, css, javascript],
    tech_stacks: ["Html", "CSS", "Javascript"],
    deployed_link: "https://kfc-clone-spry-smash-650.netlify.app/",
    github_link: "https://github.com/shreedharhegde99/spry-smash-650",
  },
  {
    image: "https://i.imgur.com/9CpN868.png",
    name: "MyHours Clone",
    desc: `MyHours is an online platform to organize projects, track time and report work.
        It is good great tool to create great looking reports `,
    tech_stacks_icons: [react, chakraui],
    tech_stacks: ["React", "ChakraUI"],

    deployed_link: "https://myhours.pages.dev/",
    github_link: "https://github.com/shreedharhegde99/annoyed-spark-4097",
  },
  {
    image: "https://i.imgur.com/6aqpO7K.png",
    name: "Treasury Trip website",
    desc: `Treasury trip is a website to explore tourist places, book flight tickets, airport taxis and hotel rooms`,
    tech_stacks_icons: [react, chakraui, nodejs, expressjs, mongodb],
    tech_stacks: ["React", "ChakraUI", "NodeJs", "ExpressJS", "MongoDB"],

    deployed_link: "https://treasury-trip.netlify.app/",
    github_link: "https://github.com/shreedharhegde99/Treasury-Trip",
  },
  {
    image:
      "https://raw.githubusercontent.com/shreedharhegde99/Google-Timer-Clone/master/public/timer.png",
    name: "Google Timer clone",
    desc: `Google Timer is an app used to set countdown timer . We can also use this as a stopwatch `,
    tech_stacks_icons: [react, css, javascript],
    tech_stacks: ["React", "CSS", "Javascript"],
    deployed_link: "https://google-clock-clone.netlify.app",
    github_link: "https://github.com/shreedharhegde99/Google-Timer-Clone",
  },
];
