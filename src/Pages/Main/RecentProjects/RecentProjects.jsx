// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import { projects } from "../../../data/projects";
// import ProjectCard from "../../../Global/ProjectCard";
// import memoji from "../../../data/assets/projMemoji.svg";
// import { useInView } from "framer-motion";
// import { about } from "../../../data/About";

// const RecentProjects = () => {
// 	const ref = useRef(null);
// 	const isInView = useInView(ref, { once: true });

// 	return (
// 		<section ref={ref} name="projects" className="min-h-[50dvh] py-24 lg:py-48 xl:py-36 flex flex-col justify-center xl:px-8">
// 			<div className="relative flex items-center mx-auto">
// 				<div className="flex flex-col items-center">
// 					<h2 className="text-4xl font-bold heading">My recent work</h2>

// 					<p className="text-center">
// 						Here are a few past projects I've worked on. Want to see more?
// 						{" "}

// 						<Link
// 							target="_blank"
// 							to={`mailto:${about.email}`}
// 							className="py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 cursor-pointer group"
// 						>
// 							<span className="text-rose-500 bg-left-bottom bg-gradient-to-r from-red-100 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-0.5">
// 								Get in touch
// 							</span>
// 						</Link>
// 					</p>
// 				</div>

// 				<div className="absolute hidden -right-36 -top-12 rotate-6 xl:block">
// 					<img className="w-32 h-32" src={memoji} alt="" />
// 				</div>
// 			</div>

// 			<div className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 lg:m-8">
// 				{[...projects]
// 					.reverse()
// 					.slice(0, 3)
// 					.map((project, key) => {
// 						return <ProjectCard
// 							key={key}
// 							project={project}
// 							styles={{
// 								transform: isInView ? "none" : "translateY(200px)",
// 								opacity: isInView ? 1 : 0,
// 								transition: `all ${key + 0.5}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
// 							}}
// 						/>;
// 					})}
// 			</div>
// 		</section>

// 	);
// };

// export default RecentProjects;


import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";
import ProjectCard from "../../../Global/ProjectCard";
import memoji from "../../../data/assets/projMemoji.svg";
import { useInView } from "framer-motion";
import { about } from "../../../data/About";

const categories = ["All", "Software Dev", "Web Dev","Machine Learning", "IoT/Arduino", "Other"];

const RecentProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.Category === selectedCategory);

  return (
    <section ref={ref} name="projects" className="min-h-[50dvh] py-24 lg:py-48 xl:py-36 flex flex-col justify-center xl:px-8">
      <div className="relative flex items-center mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold heading">My recent work</h2>

          <p className="text-center">
            Here are a few past projects I've worked on. Want to see more?
            {" "}
            <Link
              target="_blank"
              to={`mailto:${about.email}`}
              className="py-1.5 lg:py-0.5 rounded-lg lg:rounded-full duration-300 cursor-pointer group"
            >
              <span className="text-rose-500 bg-left-bottom bg-gradient-to-r from-red-100 to-red-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-0.5">
                Get in touch
              </span>
            </Link>
          </p>
        </div>

        <div className="absolute hidden -right-36 -top-12 rotate-6 xl:block">
          <img className="w-32 h-32" src={memoji} alt="" />
        </div>
      </div>

      {/* Filter Categories */}
      <div className="flex justify-center space-x-4 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-white ${selectedCategory === category ? "bg-green-500" : "bg-gray-400"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 my-8 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 lg:m-8">
        {filteredProjects
          .reverse()
          .slice(0, 3)
          .map((project, key) => (
            <ProjectCard
              key={key}
              project={project}
              styles={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: `all ${key + 0.5}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
              }}
            />
          ))}
      </div>
    </section>
  );
};

export default RecentProjects;
