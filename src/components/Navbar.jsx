import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="h-24 flex p-4 items-center bg-slate-500 justify-end fixed w-full z-10 top-0">
        <div className="md:hidden">
          <div>
            <GiHamburgerMenu
              color="black"
              size="1.5rem"
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        <div className="hidden justify-between text-2xl md:flex md:basis-2/3 lg:basis-3/5   xl:basis-1/3">
          <div className="cursor-pointer border-b-2 border-slate-500  hover:text-white hover:border-b-2 hover:border-blue-500">
            <a rel="noreferrer" href="#home">
              Home
            </a>
          </div>
          <div className="cursor-pointer border-b-2 border-slate-500 hover:text-white hover:border-b-2 hover:border-blue-500">
            <a rel="noreferrer" href="#techstack">
              Skills
            </a>
          </div>
          <div className="cursor-pointer border-b-2 border-slate-500 hover:text-white hover:border-b-2 hover:border-blue-500">
            <a rel="noreferrer" href="#project">
              Project
            </a>
          </div>
          <div className="cursor-pointer border-b-2 border-slate-500 hover:text-white hover:border-b-2 hover:border-blue-500">
            <a rel="noreferrer" href="#contact">
              Contact
            </a>
          </div>
          <div className="cursor-pointer border-b-2 border-slate-500 hover:text-white hover:border-b-2 hover:border-blue-500">
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/1nc28F_WVQthDAcL9jtMmcrYOPjF3nTK3/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
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
          <div className="text-xl py-2 my-2">
            <a rel="noreferrer" href="#home">
              Home
            </a>
          </div>
          <div className="text-xl py-2 my-2 ">
            <a rel="noreferrer" href="#techstack">
              Skills
            </a>
          </div>
          <div className="text-xl py-2 my-2 ">
            <a rel="noreferrer" href="#project">
              Project
            </a>
          </div>
          <div className="text-xl py-2 my-2 ">
            <a rel="noreferrer" href="#contact">
              Contact
            </a>
          </div>
          <div className="text-xl py-2 my-2 ">
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/1nc28F_WVQthDAcL9jtMmcrYOPjF3nTK3/view?usp=sharing"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
