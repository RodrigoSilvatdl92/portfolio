import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="fixed top-[80px] left-0 w-full h-full bg-gradient-to-br from-black to-gray-900">
        <div className="max-w-screen-xl m-auto px-4 flex justify-center items-center h-full w-full ">
          <div>
            <p className="text-white text-6xl font-secondary">
              Hi,
              <br /> I'm <span className="text-blue-800">
                Rodrigo
              </span> <br /> a{" "}
              <span className="text-blue-800"> front-end </span>{" "}
              <span>developer</span>
            </p>
            <button className="border-2 border-blue-800 px-2 rounded my-4 font-secondary bg-blue-800 text-white hover:bg-blue-700">
              <Link to="/projects">Projects</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
