import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiChakraui,
  SiRedux,
  SiNestjs,
  SiPostgresql,
  SiAngular,
} from "react-icons/si";

import { IoLogoNodejs } from "react-icons/io";
import Heading from "./Heading";

const data = [
  { name: "HTML", icon: <SiHtml5 size="2rem" color="#ff6637" /> },
  { name: "CSS", icon: <SiCss3 size="2rem" color="#6767ff" /> },
  { name: "Javascript", icon: <SiJavascript size="2rem" color="#228b22" /> },
  { name: "NodeJs", icon: <IoLogoNodejs size="2rem" color="#228b22" /> },
  { name: "React", icon: <SiReact size="2rem" color="#61dafb" /> },
  { name: "Angular", icon: <SiAngular size="2rem" color="#d90c8a" /> },
  { name: "ExpressJs", icon: <SiExpress size="2rem" color="gray" /> },
  { name: "NestJS", icon: <SiNestjs size="2rem" color="#e40020" /> },
  { name: "MongoDB", icon: <SiMongodb size="2rem" color="#399d39" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size="2rem" color="#699eca" /> },
  { name: "Chakra UI", icon: <SiChakraui size="2rem" color="#61dafb" /> },
  { name: "Redux", icon: <SiRedux size="2rem" color="#ad61ff" /> },
  { name: "Tailwind", icon: <SiTailwindcss size="2rem" color="#38bdf8" /> },
];

function TechStack() {
  return (
    <div id="techstack">
      <Heading text="Tech Stacks" />

      <div className="grid grid-cols-3 justify-center py-6  mt-4 shadow-2xl   shadow-cyan-500/50 lg:grid lg:grid-cols-5 lg:gap-5 lg:place-items-center lg:w-4/5 lg:m-auto lg:shadow-none xl:w-2/3">
        {data.map((el) => (
          <div
            key={el.name}
            className="m-4 text-center px-6 py-2  hover:shadow-xl hover:shadow-cyan-500 transition-shadow"
          >
            <div className="w-max mx-auto">{el.icon}</div>
            <div className="text-white py-2"> {el.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
