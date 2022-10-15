import { Fragment } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import TechStack from "./components/TechStack";
import { Navbar } from "./components/Navbar";

function ProfilePage() {
  return (
    <Fragment>
      <Navbar />
      <Fragment>
        <div className=" bg-slate-700  p-2 mt-24">
          <div
            className="my-10 p-5 bg-slate-700 shadow-lg  text-white
            shadow-yellow-500 md:shadow-2xl md:shadow-yellow-600  md:h-screen  md:mt-0 bg-no-repeat  bg-fixed  bg-contain lg:bg-cover "
            style={{ backgroundImage: "url(https://i.imgur.com/iOod8ol.png)" }}
          >
            <div className=" w-full text-center font-semibold">
              <div className=" md:pb-6">
                <img
                  src="https://i.imgur.com/XugJ0vp.jpg"
                  alt="Profile_Picture"
                  className="m-auto w-24 h-24 rounded-full md:w-36 md:h-36 hover:shadow-lg transition-shadow  hover:shadow-purple-400 "
                />
              </div>
              <h1 className="text-3xl mt-2 p-1  "> Shreedhar Hegde</h1>
              <p className="p-1 text-lg">Full Stack Web Developer</p>
            </div>
            <div className="flex justify-center ">
              <div className="sm:flex   md:flex-col ">
                <div className="flex items-center max-w-sm  mt-2  font-medium text-center sm:ml-3  ">
                  <div>
                    <TiLocationArrow />
                  </div>
                  <p className="pl-2">Bangalore, Karnataka</p>
                </div>
                <div className="flex items-center max-w-sm  mt-2  font-medium text-center sm:ml-3 ">
                  <div>
                    <IoMdCall />
                  </div>
                  <p className="pl-2">+919482101148</p>
                </div>
                <div className="flex items-center max-w-sm  mt-2  font-medium text-center sm:ml-3  ">
                  <div>
                    <IoIosMail />
                  </div>
                  <p className="pl-2">snhkelemane@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="px-2 py-4 text-center m-auto max-w-md md:text-lg ">
              <p>
                Aspiring Full Stack Web Developer who focuses on crafting clean
                and user-friendly experiences.Actively ready to join in a great
                lively team of a good start-up to adapt me in any situation and
                environment with ease and perform the best.
              </p>
            </div>

            <div className="flex justify-center py-2">
              <div className="px-2">
                <a href="https://github.com/shreedharhegde99">
                  <GrGithub size={"2.5rem"} />
                </a>
              </div>
              <div className="px-2">
                <a href="https://linkedin.com/shreedharhegde99">
                  <GrLinkedin size={"2.3rem"} color="#2b75ff" />
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stacks and Project */}
          <div className=" w-full ">
            <div>
              <div className="bg-slate-500 p-2 py-4 ">
                <h1 className="text-3xl text-white text-center">Tech Stacks</h1>
              </div>
              <TechStack />
            </div>
            <div>
              <div className="bg-slate-500 p-2 py-4 ">
                <h1 className="text-3xl text-white text-center">Projects</h1>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Fragment>
  );
}

export default ProfilePage;
