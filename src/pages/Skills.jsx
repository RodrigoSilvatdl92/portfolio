import React from "react";
import Navbar from "../components/Navbar";
import css3 from "../images/css3.png";
import firebase from "../images/firebase.png";
import html5 from "../images/html5.png";
import js from "../images/js.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import wordpress from "../images/wordpress.png";

function Skills() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-gradient-to-br from-black to-gray-900 overflow-auto">
        <div className="max-w-screen-xl m-auto px-4 mt-32">
          <h1 className="text-blue-800 text-4xl text-center font-secondary">
            Skills
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            <div className="flex flex-col gap-4 items-center justify-center rounded-md shadow-lg shadow-gray-900 p-4 hover:shadow-gray-800 hover:shadow-xl hover:scale-105 duration-500">
              <img className="w-[100px] h-[100px]" src={html5} alt="html5" />
              <p className="text-white center ">HTML</p>
            </div>
            <div className="flex flex-col gap-4  items-center justify-center rounded-md shadow-lg shadow-gray-900 p-4 hover:shadow-gray-800 hover:shadow-xl hover:scale-105  duration-500 ">
              <img className="w-[100px] h-[100px]" src={css3} alt="css3" />
              <p className="text-white center ">CSS</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center rounded-md shadow-lg shadow-gray-900 p-4 hover:shadow-gray-800 hover:shadow-xl hover:scale-105 duration-500">
              <img className="w-[100px] h-[100px]" src={js} alt="js" />
              <p className="text-white center ">JavaScript</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center rounded-md shadow-lg shadow-gray-900 p-4 hover:shadow-gray-800 hover:shadow-xl hover:scale-105 duration-500">
              <img className="w-[100px] h-[100px]" src={react} alt="react" />
              <p className="text-white center ">React</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center rounded-md shadow-lg shadow-gray-900 p-4 hover:shadow-gray-800 hover:shadow-xl hover:scale-105 duration-500">
              <img
                className="w-[100px] h-[100px]"
                src={tailwind}
                alt="tailwind"
              />
              <p className="text-white center ">Tailwind CSS</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center rounded-md shadow-lg shadow-gray-900 p-4 hover:shadow-gray-800 hover:shadow-xl hover:scale-105 duration-500">
              <img
                className="w-[100px] h-[100px]"
                src={firebase}
                alt="firebase"
              />
              <p className="text-white center ">Firebase</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center rounded-md shadow-lg shadow-gray-900 p-4 hover:shadow-gray-800 hover:shadow-xl hover:scale-105 duration-500">
              <img
                className="w-[100px] h-[100px]"
                src={wordpress}
                alt="wordpress"
              />
              <p className="text-white center ">WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
