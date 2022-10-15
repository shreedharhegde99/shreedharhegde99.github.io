import { Fragment } from "react";
import { GrGithub } from "react-icons/gr";
import { RiExternalLinkFill } from "react-icons/ri";

function Projects() {
  return (
    <Fragment>
      <div className="flex flex-col items-center my-2 py-2">
        <div>
          <img
            src="https://i.imgur.com/wwmyP3B.png"
            alt="project_image"
            className="w-40"
          />
        </div>
        <div>
          <h1>Project Title</h1>
          <p>description</p>
          <div className="flex items-center">
            <div className="flex items-center">
              <p>Demolink</p>
              <a href="https://shreedharhegde.netlify.app">
                <RiExternalLinkFill />
              </a>
            </div>
            <span className="block ml-4">
              <a href="https://shreedharhegde.netlify.app">
                <GrGithub size="1.3rem" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-2 py-2">
        <div>
          <img
            src="https://i.imgur.com/wwmyP3B.png"
            alt="project_image"
            className="w-40"
          />
        </div>
        <div>
          <h1>Project Title</h1>
          <p>description</p>
          <div className="flex items-center">
            <div className="flex items-center">
              <p>Demolink</p>
              <a href="https://shreedharhegde.netlify.app">
                <RiExternalLinkFill />
              </a>
            </div>
            <span className="block ml-4">
              <a href="https://shreedharhegde.netlify.app">
                <GrGithub size="1.3rem" />
              </a>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col items-center my-2 py-2">
        <div>
          <img
            src="https://i.imgur.com/wwmyP3B.png"
            alt="project_image"
            className="w-40"
          />
        </div>
        <div>
          <h1>Project Title</h1>
          <p>description</p>
          <div className="flex items-center">
            <div className="flex items-center">
              <p>Demolink</p>
              <a href="https://shreedharhegde.netlify.app">
                <RiExternalLinkFill />
              </a>
            </div>
            <span className="block ml-4">
              <a href="https://shreedharhegde.netlify.app">
                <GrGithub size="1.3rem" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Projects;
