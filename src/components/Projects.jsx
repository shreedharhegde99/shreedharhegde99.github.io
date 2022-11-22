import { Fragment } from "react";
import { GrGithub } from "react-icons/gr";
import { RiExternalLinkFill } from "react-icons/ri";
import { projectList } from "../assets/projects";

function Projects() {
  return (
    <Fragment>
      <div id="project">
        <div className="bg-slate-500 p-2 py-4 ">
          <h1 className="text-3xl text-white text-center">Projects</h1>
        </div>

        <div
          className="flex flex-col gap-12 transition-all md:gap-9 justify-center items-center  py-10  text-white 
        md:flex-row md:flex-wrap md:items-stretch md:py-14  2xl:justify-start xl:px-10"
        >
          {projectList.map((project) => (
            <div
              key={project.name}
              className="shadow-sm shadow-cyan-300 rounded-md bg-slate-800  hover:shadow-lg hover:shadow-cyan-500 hover:scale-105 transition-all
              max-w-lg flex flex-col items-center justify-center text-center p-2 md:w-max xl:my-4"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64"
                />
              </div>
              <div className="px-2 ">
                <div>
                  <h1 className="text-2xl my-2 font-semibold">
                    {project.name}
                  </h1>
                  <p className="py-2">{project.desc}</p>
                </div>
                <div className="bg-slate-700 py-4 rounded-lg">
                  <div className="text-xl">Tech Stacks</div>
                  <div className=" py-4 flex justify-center gap-6 flex-wrap ">
                    {project.tech_stacks_icons.map((stack, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 justify-between "
                      >
                        <div>{stack}</div>
                        <div className=" font-bold rounded-md px-2">
                          {" "}
                          {project.tech_stacks[i]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center gap-7 py-4">
                  <div>
                    <a
                      href={project.deployed_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <RiExternalLinkFill size="1.7rem" />
                    </a>
                  </div>
                  <div>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrGithub size="1.7rem" />
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
