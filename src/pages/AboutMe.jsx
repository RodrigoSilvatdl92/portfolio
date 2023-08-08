import React from "react";
import Navbar from "../components/Navbar";
import forklift from "../images/forklift.png";
import consola from "../images/consola.png";
import coding from "../images/coding.png";
function AboutMe() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="w-screen h-screen bg-gradient-to-br from-black to-gray-900 overflow-auto">
        <div className="max-w-screen-xl m-auto px-4 mt-32  ">
          <div className="max-w-screen-lg m-auto px-4 relative p-1">
            <div className="border-b-2 border-l-4 border-blue-800 absolute bottom-0 left-0 w-32 h-44" />
            <h1 className="text-blue-800 text-4xl font-secondary text-center">
              About me
            </h1>
            <div className="mt-10">
              <img
                src={consola}
                alt="/"
                className="w-[100px] ml-4 float-right "
              />
              <p className="text-white mt-4 leading-8 text-base md:text-xl">
                Hello! I'm Rodrigo, a front-end developer. Ever since a young
                age, I immersed myself playing games on the computer and
                exploring its intricacies, which sparked my passion for all
                things tech-related.
              </p>
            </div>

            <br />
            <div>
              <img
                src={forklift}
                alt="/"
                className="w-[100px] float-left mr-6 "
              />
              <p className="text-white  leading-8 text-base md:text-xl ">
                After working as a logistic operator, responsible for the
                efficient expedition of company goods for six years, I decided
                to pursue a career change and follow my passion for web
                development. My journey began with studying HTML and CSS
                independently, laying a solid foundation for my front-end
                skills.
              </p>
            </div>

            <br />
            <div>
              <img
                src={coding}
                alt="/"
                className="w-[100px] float-right ml-[-4] pl-4"
              />
              <p className="text-white mt-4 leading-8 text-base md:text-xl ">
                Eager to expand my knowledge, I embarked in JavaScript, delving
                deeper into the language that powers the web. Later, I started
                to study React, a powerful library that revolutionized the way I
                build dynamic and interactive user interfaces.
              </p>
            </div>

            <br />
            <p className="text-white mt-4 leading-8 text-base md:text-xl">
              I'm a calm, humble and dedicated person and excited to learn new
              things.If you're seeking a front-end developer who brings
              dedication, a love for learning, and a collaborative spirit to the
              table, I would be thrilled to work with you.
            </p>
            <p className="text-white mt-4 leading-8 text-xl"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
