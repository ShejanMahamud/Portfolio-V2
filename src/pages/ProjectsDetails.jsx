import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectsDetails = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProject = async () => {
      try {
        const { data } = await axios.get("/projects.json");
        const project = data.find((project) => project.id === parseInt(id));
        setProject(project);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };
    getProject();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center space-x-2 w-full min-h-screen">
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
      </div>
    );
  }

  if (!project) {
    return <div className="text-center mt-40">Project not found</div>;
  }

  return (
    <div className="w-[80%] mx-auto mt-40 font-poppins">
      <div className="w-full relative z-10">
        <img
          src={project?.project_image}
          alt={project?.project_name}
          className="aspect-video rounded-lg h-[500px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] dark:bg-gradient-to-t dark:from-neutral-900"></div>
      </div>
      <div className="flex items-center flex-col gap-3 relative z-50 text-[#D4D4D8]">
        <h1 className="text-3xl font-bold -mt-10">{project?.project_name}</h1>
        <div className="flex items-center gap-3 text-xs md:text-md text-base">
          <span>{project?.project_category}</span>
          {" | "}
          <span>{project?.project_type}</span>
          {" | "}
          <span>{project?.project_nature}</span>
        </div>
      </div>
      <div className="w-full mt-20 grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 row-auto items-start lg:p-10 p-5 rounded-lg ring-stone-800 ring-1 border-opacity-10 text-[#D4D4D8] lg:gap-10 gap-12">
        <div className="flex items-start flex-col gap-3 w-full">
          <h1 className="lg:text-3xl text-xl font-semibold mb-3">Features</h1>
          <ul className="flex flex-col gap-4 list-disc text-zinc-400 mx-5 text-sm lg:text-base">
            {project?.projects_features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex items-start flex-col gap-3 w-full">
          <h1 className="lg:text-3xl text-xl font-semibold mb-3">Technologies</h1>
          <div className="flex flex-wrap gap-4 text-base text-zinc-400">
            {project?.projects_techs.map((tech, index) => (
              <div
                key={index}
                className="lg:text-sm text-xs text-zinc-600 dark:text-zinc-400 px-3 py-1 ring-1 ring-stone-200 dark:ring-stone-800 hover:bg-white dark:hover:bg-stone-900 rounded-full transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <button onClick={() => navigate("/projects")} type="button" className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-12 w-12 p-1 text-zinc-600 dark:text-zinc-400 hover:bg-white dark:hover:bg-stone-900 border-2 border-stone-200 dark:border-stone-800 rounded-full"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <span className="isolate inline-flex rounded-full">
          <a
            href={project?.project_code}
            target="_blank"
            className="font-semibold text-violet-500 dark:text-violet-400 hover:bg-gradient-to-l hover:from-white hover:to-zinc-50 dark:hover:bg-gradient-to-l dark:hover:from-stone-900 dark:hover:to-neutral-900 border-t-2 border-r-[1px] border-b-2 border-l-2 border-stone-200 dark:border-stone-800 rounded-l-full"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="relative inline-flex items-center rounded-l-full px-5 py-2.5 focus:ring-2 lg:text-base text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="-ml-1 mr-2 h-5 w-5 text-violet-500 dark:text-violet-400"
              >
                <path
                  fillRule="evenodd"
                  d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Code
            </button>
          </a>
          <a
            href={project?.project_live}
            target="_blank"
            className="font-semibold text-violet-500 dark:text-violet-400 hover:bg-gradient-to-r hover:from-white hover:to-zinc-50 dark:hover:bg-gradient-to-r dark:hover:from-stone-900 dark:hover:to-neutral-900 border-t-2 border-r-2 border-b-2 border-l-[1px] border-stone-200 dark:border-stone-800 rounded-r-full"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="relative inline-flex items-center rounded-r-full px-5 py-2.5 focus:ring-2 lg:text-base text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="-ml-1 mr-2 h-5 w-5 text-violet-500 dark:text-violet-400"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25v-4a.75.75 0 011.5 0v4c0 1.656-1.344 3-3 3h-8.5c-1.656 0-3-1.344-3-3v-8.5c0-1.656 1.344-3 3-3h5c.414 0 .75-.336.75-.75a.75.75 0 00-.75-.75h-5z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Live
            </button>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectsDetails;
