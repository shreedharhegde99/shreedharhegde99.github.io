import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="h-24 flex p-4 items-center bg-slate-400 justify-between fixed w-full z-10 top-0">
        <div>
          <p className="text-4xl">Shreedhar Hegde</p>
        </div>
        <div className="md:hidden">
          <div>
            <GiHamburgerMenu
              color="black"
              size="1.5rem"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        <div className="hidden md:flex  basis-1/2 justify-between">
          <div>Home</div>
          <div>About Me</div>
          <div>Skills</div>
          <div>Project</div>
          <div>Contact</div>
        </div>
      </div>
      <div
        className={
          open
            ? "flex flex-col fixed top-0 right-0 bg-white w-full   p-4 py-6 border md:hidden z-20 "
            : " hidden "
        }
      >
        <div className="flex justify-end py-2 ">
          <AiOutlineClose
            color="black"
            size="1.5rem"
            onClick={() => setOpen(false)}
          />
        </div>
        <div>
          <div className="text-xl    py-2 my-2">Home</div>
          <div className="text-xl   py-2 my-2 ">About Me</div>
          <div className="text-xl   py-2 my-2 ">Skills</div>
          <div className="text-xl   py-2 my-2 ">Project</div>
          <div className="text-xl   py-2 my-2 ">Contact</div>
        </div>
      </div>
    </Fragment>
  );
}
