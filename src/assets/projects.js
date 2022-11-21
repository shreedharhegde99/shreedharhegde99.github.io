import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

const [html, css, javascript, react, chakraui, nodejs, expressjs, mongodb] = [
  <AiFillHtml5 size="2.2rem" color="#ff7b53e0" />,
  <SiCss3 size="2rem" color="#7b7bf7" />,
  <SiJavascript size="2rem" color="#3ca73c" />,
  <SiReact size="2rem" color="#61dafb" />,
  <SiChakraui size="2rem" color="#61dafb" />,
  <IoLogoNodejs size="2rem" color="green" />,
  <SiExpress size="2rem" color="#fff" />,
  <SiMongodb size="2rem" color="green" />,
];

export const projectList = [
  {
    image: "https://i.imgur.com/1FA60E3.png",
    name: "KFC Clone",
    desc: `KFC is a fast food restaurant chain that specializes in fried chicken. 
              It is the world's second-largest restaurant chain after McDonald's`,
    tech_stacks_icons: [html, css, javascript],
    tech_stacks: ["Html", "CSS", "Javascript"],
    deployed_link: "https://kfc-clone-spry-smash-650.netlify.app/",
    github_link: "https://github.com/shreedharhegde99/spry-smash-650",
  },
  {
    image: "https://i.imgur.com/7t2lgxb.png",
    name: "MyHours Clone",
    desc: `MyHours is an online platform to organize projects, track time and report work.
        It is good great tool to create great looking reports `,
    tech_stacks_icons: [react, chakraui],
    tech_stacks: ["React", "ChakraUI"],

    deployed_link: "https://myhours.pages.dev/",
    github_link: "https://github.com/shreedharhegde99/annoyed-spark-4097",
  },
  {
    image:
      "https://raw.githubusercontent.com/shreedharhegde99/Envoy-Website-Clone/main/assets/Dashboard.png",
    name: "Envoy Clone",
    desc: `Envoy.com is an platform for reserving workspace,room and desks. 
      It also provides services like visitor management,workspace protection and package pickup `,
    tech_stacks_icons: [html, css, javascript],
    tech_stacks: ["Html", "CSS", "Javascript"],

    deployed_link: "https://envoy-website-clone.netlify.app/",
    github_link: "https://github.com/shreedharhegde99/Envoy-Website-Clone",
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
  {
    image: "https://i.imgur.com/fiBFwiZ.png",
    name: "Treasury Trip website",
    desc: `Treasury trip is a website to explore tourist places, book flight tickets, airport taxis and hotel rooms`,
    tech_stacks_icons: [react, chakraui, nodejs, expressjs, mongodb],
    tech_stacks: ["React", "ChakraUI", "NodeJs", "ExpressJS", "MongoDB"],

    deployed_link: "https://treasury-trip.netlify.app/",
    github_link: "https://github.com/shreedharhegde99/Treasury-Trip",
  },
];
