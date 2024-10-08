import { Fragment } from "react";
import { TiLocationArrow } from "react-icons/ti";

export default function About() {
  return (
    <Fragment>
      <div
        id="home"
        className=" my-10 mt-0 p-5 py-10 bg-slate-700 shadow-lg  text-white  bg-none
             md:flex md:justify-center md:gap-14 md:items-center   md:shadow-2xl 
             md:mt-0 md:pt-12  lg:justify-center lg:gap-28 lg:py-28 lg:opacity-90"
      >
        <div className=" text-center flex flex-col items-center font-semibold ">
          <div className=" md:pb-6">
            <img
              src="https://res.cloudinary.com/dp3u41izk/image/upload/v1728544031/XugJ0vp_xnh4hy.jpg"
              alt="Profile_Picture"
              className="m-auto w-40 h-40 rounded-full  
                   md:w-48 md:h-48 lg:w-52 lg:h-52  xl:w-60 xl:h-60"
            />
          </div>
          <h1 className="text-3xl mt-2 p-1 lg:text-4xl ">Shreedhar Hegde</h1>
          <p className="p-1 text-lg lg:text-xl">Full Stack Web Developer</p>
          <div className="flex items-center max-w-sm  mt-2  font-medium text-center  justify-center ">
            <div>
              <TiLocationArrow />
            </div>
            <p className="pl-2">Bangalore, Karnataka</p>
          </div>
        </div>

        <div className=" m-auto px-2 py-4 text-center text-xl  max-w-md md:m-0 lg:max-w-xl lg:text-2xl xl:max-w-3xl">
          <p>
            Aspiring Full Stack Web Developer who focuses on crafting clean and
            user-friendly experiences. Actively ready to join in a great lively
            team of a good start-up to adapt in any situation and environment
            with ease and perform the best.
          </p>
        </div>
      </div>
    </Fragment>
  );
}
