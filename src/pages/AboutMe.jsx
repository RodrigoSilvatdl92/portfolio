import React from "react";
import Navbar from "../components/Navbar";

function AboutMe() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="absolute lg:fixed top-[80px] left-0 w-screen h-screen bg-gradient-to-br from-black to-gray-900 overflow-auto">
        <div className="max-w-screen-xl m-auto px-4 ">
          <h1 className="text-white text-4xl font-secondary mt-8 text-center ">
            About me
          </h1>
          <p className="text-white mt-4 leading-8 text-xl text-justify ">
            Hello there! I'm Rodrigo, a self-taught front-end developer with a
            lifelong love for computers and technology. Ever since a young age,
            I immersed myself in playing games on the computer and exploring its
            intricacies, which sparked my passion for all things tech-related.
          </p>
          <p className="text-white mt-4 leading-8 text-xl test-justify">
            After working as a logistic operator, responsible for the efficient
            expedition of company goods for six years, I decided to pursue a
            career change and follow my passion for web development. My journey
            began with studying HTML and CSS independently, laying a solid
            foundation for my front-end skills.
          </p>
          <p className="text-white mt-4 leading-8 text-xl test-justify">
            Eager to expand my knowledge, I embarked on a Udemy course in
            JavaScript, delving deeper into the language that powers the web.
            Later, I started to study React, a powerful library that
            revolutionized the way I build dynamic and interactive user
            interfaces.
          </p>
          <p className="text-white mt-4 leading-8 text-xl test-justify">
            When I'm not coding, you might find me working out , reading books,
            exploring new places with my family and friends or playing games
            with friends.
          </p>
          <p className="text-white mt-4 leading-8 text-xl test-justify">
            I'm a calm, humble and dedicated person genuinely passionate about
            creating exceptional user experiences and excited to learn new
            things with individuals who have great knowledge in the field. I
            believe that continuous growth is essential in the ever-evolving
            world of web development.
          </p>
          <p className="text-white mt-4 leading-8 text-xl test-justify">
            If you're seeking a front-end developer who brings dedication, a
            love for learning, and a collaborative spirit to the table, I would
            be thrilled to work with you.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
