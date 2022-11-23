import { Fragment } from "react";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { IoIosMail, IoMdCall } from "react-icons/io";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <Fragment>
      <div id="contact">
        <div>
          <div className="bg-slate-500 p-2 py-4 ">
            <h1 className="text-3xl text-white text-center">Contact</h1>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 md:flex-row md:p-4 md:justify-around md:items-start">
          <div className="flex-grow md:py-10">
            <div className="flex justify-center">
              <div className=" items-center  text-xl text-white py-4 m-auto">
                <div className="flex items-center gap-5 max-w-xs   mt-2  font-medium text-center py-2">
                  <div>
                    <IoMdCall size="1.5rem" />
                  </div>
                  <p className="pl-2">
                    <a href="tel:+917204482283">+91-7204482283</a>
                  </p>
                </div>
                <div className="flex items-center gap-5 max-w-xs   mt-2  font-medium text-center py-2 ">
                  <div>
                    <IoIosMail size="1.5rem" />
                  </div>
                  <p className="pl-2">
                    <a href="mailto:snhkelemane@gmail.com">
                      snhkelemane@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-5 max-w-xs   mt-2  font-medium text-center py-2 ">
                  <div>
                    <a
                      href="https://github.com/shreedharhegde99"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrGithub size="1.5rem" />
                    </a>
                  </div>
                  <p className="pl-2">
                    <a
                      href="https://github.com/shreedharhegde99"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-5 max-w-xs   mt-2  font-medium text-center py-2 ">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/shreedharhegde99"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrLinkedin size="1.5rem" color="#4478d9" />
                    </a>
                  </div>
                  <p className="pl-2">
                    <a
                      href="https://www.linkedin.com/in/shreedharhegde99"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </Fragment>
  );
}

export default Contact;
