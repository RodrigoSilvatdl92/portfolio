import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="  fixed top-0 left-0 w-full z-20 bg-black">
      <div className=" mx-auto max-w-screen-xl flex justify-between px-4">
        <div>
          <p className="text-white font-signature text-5xl py-5  ">
            Rodrigo Silva
          </p>
        </div>
        <div className="hidden md:block">
          <ul className="flex  justify-center gap-16">
            <li className="text-3xl text-white font-primary py-5 hover:underline hover:decoration-blue-800 cursor-pointer ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-3xl text-white font-primary py-5 hover:underline hover:decoration-blue-800 cursor-pointer ">
              <Link to="/aboutme">About Me</Link>
            </li>
            <li className="text-3xl text-white font-primary py-5 hover:underline hover:decoration-blue-800 cursor-pointer ">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="text-3xl text-white font-primary py-5 hover:underline hover:decoration-blue-800 cursor-pointer ">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <div className="z-20">
            <Hamburger
              color="#ffffff"
              onToggle={(toggled) => {
                if (toggled) {
                  setMenuIsOpen(true);
                } else {
                  setMenuIsOpen(false);
                }
              }}
            />
          </div>

          <div>
            <AnimatePresence>
              {menuIsOpen ? (
                <div className="fixed top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-sm m-0 p-0 z-10">
                  <motion.div
                    className="fixed top-0 right-0 h-screen bg-black/70 w-[200px] z-20 "
                    initial={{ x: "+100vw" }}
                    animate={{ x: "0vw" }}
                    exit={{ x: "+100vw" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full absolute top-[80px] ">
                      <ul>
                        <li className="text-white text-2xl font-primary mb-6 ml-2 hover:underline hover:decoration-blue-800">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="text-white text-2xl font-primary mb-6 ml-2 hover:underline hover:decoration-blue-800">
                          <Link to="/aboutme">About Me</Link>
                        </li>
                        <li className="text-white text-2xl font-primary mb-6 ml-2 hover:underline hover:decoration-blue-800">
                          <Link to="/skills">Skills</Link>
                        </li>
                        <li className="text-white text-2xl font-primary mb-6 ml-2 hover:underline hover:decoration-blue-800">
                          <Link to="/projects">Projects</Link>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ) : (
                ""
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

/*

<button>
            {menuIsOpen ? (
            ""
          ) : (
            <button>
              <AiOutlineMenu
                className="text-white "
                size={30}
                onClick={() => setMenuIsOpen(true)}
              />
            </button>
          )}

          {menuIsOpen && (
            <div>
              <div className="fixed top-0 left-0 w-screen h-screen  backdrop-filter backdrop-blur-sm "></div>
              <div className="fixed top-0 right-0 h-screen bg-white w-[200px] z-20">
                <p className='text-black'>oláaa</p>
              </div>
            </div>
          )}



<div>
                  <div className="fixed top-0 left-0 w-screen h-screen  backdrop-filter backdrop-blur-sm "></div>
                  <div className="fixed top-0 right-0 h-screen bg-white w-[200px] z-20">
                    <p className="text-black">oláaa</p>
                  </div>
                </div>;




*/
