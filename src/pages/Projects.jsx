import React from "react";
import work from "../images/work.svg";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Projects() {
  const items = [
    {
      title: "MovieApp",
      link: "https://projecto6-myprojects.web.app",
      description:
        "MovieApp is a web application built using ReactJS, Tailwind  CSS, and Firebase. It replicates the layout of a popular streaming platform, offering features such as user account creation, login, logout, and the ability to add or remove movies from favorites.",
      gitHub: "https://github.com/RodrigoSilvatdl92/MovieApp",
    },
    {
      title: "ChatApp",
      link: "https://chatapp-b71f7.firebaseapp.com",
      description:
        "ChatApp is a ReactJS and Tailwind-powered project that utilizes Firebase for seamless user registration, profile setup, and friend connections. With ChatApp, users can easily create an account, personalize their profiles, and find and add friends to engage in conversations.",
      gitHub: "https://github.com/RodrigoSilvatdl92/ChatApp",
    },
    {
      title: "ToDoApp",
      link: "https://projecto7-todoapp.firebaseapp.com",
      description:
        "ToDoApp is a ReactJS and Tailwind-based project integrated with Firebase, enabling users to register accounts, create personalized profiles, and efficiently manage their tasks and events. With ToDoApp, users can seamlessly add, update, and delete events on a calendar, assigning various priorities and modifying event details.",
      gitHub: "https://github.com/RodrigoSilvatdl92/ToDoApp",
    },
    {
      title: "FourInLineApp",
      link: "https://rodrigosilvatdl92.github.io/FourInLine/",
      description:
        "FourInLineApp was my first project build, its a game crafted using HTML, CSS, and Vanilla JavaScript, where the objective is to strategically create a line of four matching colored tokens",
      gitHub: "https://github.com/RodrigoSilvatdl92/FourInLine",
    },
    {
      title: "Working on progress",
      link: "noLink",
      description: "Working on more projects to add soon",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-gradient-to-br from-black to-gray-900 overflow-auto">
        <div className="mx-auto max-w-screen-xl mt-32 ">
          <h1 className="text-4xl font-secondary text-blue-800 text-center">
            Projects
          </h1>
          <div className="hidden md:block mt-10">
            <div>
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col md:flex-row justify-center items-center md:h-[375px] gap-10 mb-20"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-[275px] h-[375px] overflow-hidden rounded-xl relative ">
                        {item.link === "noLink" ? (
                          <img
                            src={work}
                            alt="/"
                            className="absolute top-[50%] translate-y-[-50%]  h-full "
                          />
                        ) : (
                          <iframe
                            src={item.link}
                            title={item.title}
                            className="origin-top-left scale-[0.5] w-[570px] h-[750px] overflow-auto"
                          ></iframe>
                        )}
                      </div>

                      <div className="w-[290px]">
                        <h2 className="text-sm md:text-base text-blue-800 font-bold font-secondary">
                          {item.title}
                        </h2>
                        <p className="text-sm md:text-base text-white font-secondary font-semibold mt-2">
                          {item.description}
                        </p>
                        {item.link === "noLink" ? (
                          ""
                        ) : (
                          <div className="flex w-full justify-around mt-4">
                            <button className="bg-blue-800 border-2 border-blue-800 text-white rounded-sm px-1 font-secondary">
                              <Link to={item.link} target={"_blank"}>
                                Demo
                              </Link>
                            </button>
                            <button className="bg-blue-800 border-2 border-blue-800 text-white rounded-sm px-1 font-secondary">
                              <Link to={item.gitHub} target={"_blank"}>
                                Code
                              </Link>
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[290px] relative">
                        <h2 className="text-sm md:text-base text-blue-800 font-bold font-secondary">
                          {item.title}
                        </h2>
                        <p className="text-sm md:text-base text-white font-secondary font-semibold mt-2">
                          {item.description}
                        </p>
                        {item.link === "noLink" ? (
                          ""
                        ) : (
                          <div className="flex w-full justify-around mt-4">
                            <button className="bg-blue-800 border-2 border-blue-800 text-white rounded-sm px-1 font-secondary">
                              <Link to={item.link} target={"_blank"}>
                                Demo
                              </Link>
                            </button>
                            <button className="bg-blue-800 border-2 border-blue-800 text-white rounded-sm px-1 font-secondary">
                              <Link to={item.gitHub} target={"_blank"}>
                                Code
                              </Link>
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="w-[275px] h-[375px] overflow-hidden rounded-xl ">
                        {item.link === "noLink" ? (
                          <img src={work} alt={"/"} />
                        ) : (
                          <iframe
                            src={item.link}
                            title={item.title}
                            className="origin-top-left scale-[0.5] w-[570px] h-[750px] overflow-auto"
                          ></iframe>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* small devices */}
          <div className="md:hidden w-screen mt-10">
            <Swiper
              slidesPerView={1}
              modules={[Navigation, Pagination]}
              centeredSlides={true}
              spaceBetween={50}
              navigation
              pagination={{ clickable: true }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index} className=" w-full ">
                  <div className="mx-auto w-[275px] h-[375px] overflow-hidden relative rounded-xl">
                    {item.link === "noLink" ? (
                      <img
                        src={work}
                        alt={"/"}
                        className="absolute top-[50%] translate-y-[-50%]  h-full"
                      />
                    ) : (
                      <iframe
                        src={item.link}
                        title={item.title}
                        className="origin-top-left scale-[0.5] w-[570px] h-[750px] overflow-auto"
                      ></iframe>
                    )}
                  </div>

                  <div className="w-[290px] mx-auto mb-8 mt-2">
                    <h2 className="text-sm md:text-base text-blue-800 font-bold font-secondary">
                      {item.title}
                    </h2>
                    <p className="text-sm md:text-base text-white font-secondary font-semibold mt-2">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
