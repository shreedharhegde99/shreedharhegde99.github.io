import { Fragment } from "react";
import { GrGithub } from "react-icons/gr";
import { RiExternalLinkFill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiJavascript, SiReact, SiChakraui } from "react-icons/si";

const [html, css, javascript, react, chakraui] = [
  <AiFillHtml5 size="2.2rem" color="#ff7b53e0" />,
  <SiCss3 size="2rem" color="#ababff" />,
  <SiJavascript size="2rem" color="#3ca73c" />,
  <SiReact size="2rem" color="#61dafb" />,
  <SiChakraui size="2rem" color="#61dafb" />,
];

const projects = [
  {
    image: "https://i.imgur.com/1FA60E3.png",
    name: "KFC Clone",
    desc: `KFC is a fast food restaurant chain that specializes in fried chicken. 
            It is the world's second-largest restaurant chain after McDonald's`,
    tech_stacks: [html, css, javascript],
    deployed_link: "https://kfc-clone-spry-smash-650.netlify.app/",
    github_link: "https://github.com/shreedharhegde99/spry-smash-650",
  },
  {
    image: "https://i.imgur.com/7t2lgxb.png",
    name: "MyHours Clone",
    desc: `MyHours is an online platform to organize projects, track time and report work.
      It is good great tool to create great looking reports `,
    tech_stacks: [react, chakraui],
    deployed_link: "https://myhours.pages.dev/",
    github_link: "https://github.com/shreedharhegde99/annoyed-spark-4097",
  },
  {
    image:
      "https://raw.githubusercontent.com/shreedharhegde99/Envoy-Website-Clone/main/assets/Dashboard.png",
    name: "Envoy Clone",
    desc: `Envoy.com is an platform for reserving workspace,room and desks. 
    It also provides services like visitor management,workspace protection and package pickup `,
    tech_stacks: [html, css, javascript],
    deployed_link: "https://envoy-website-clone.netlify.app/",
    github_link: "https://github.com/shreedharhegde99/Envoy-Website-Clone",
  },
];

function Projects() {
  return (
    <Fragment>
      <div id="project">
        <div className="bg-slate-500 p-2 py-4 ">
          <h1 className="text-3xl text-white text-center">Projects</h1>
        </div>
        <div className="flex flex-col gap-9 justify-center items-center  py-10 text-white md:flex-row md:flex-wrap md:items-stretch md:py-14">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-slate-500 rounded-md hover:bg-slate-800  hover:shadow-lg hover:shadow-cyan-500 hover:scale-105 transition-all
              max-w-lg flex flex-col items-center justify-center text-center p-2 md:w-max"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64"
                />
              </div>
              <div className="px-2">
                <div>
                  <h1 className="text-2xl my-2 font-semibold">
                    {project.name}
                  </h1>
                  <p className="py-2">{project.desc}</p>
                </div>
                <div className=" py-4 flex justify-center gap-5">
                  {project.tech_stacks.map((stack, i) => (
                    <div key={i}>{stack}</div>
                  ))}
                </div>
                <div className="flex justify-center gap-7 py-4">
                  <div>
                    <a
                      href={project.deployed_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <RiExternalLinkFill size="1.4rem" />
                    </a>
                  </div>
                  <div>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrGithub size="1.4rem" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Projects;
