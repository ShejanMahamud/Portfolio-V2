import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      project_image: "https://i.ibb.co/mBT0s23/bookify.png",
      project_logo:
        "https://gist.githubusercontent.com/ShejanMahamud/55027157d9ed288e0c490b8f59878179/raw/b6f06773886c4314ccd39286a026afc0549f431e/bookify.svg",
      project_des:
        "Manage Library as Librarian & Borrow Book as User using MERN Stack",
      project_name: "Bookify",
      project_category: "Library Management",
      project_type: "Full-Stack",
      project_nature: "Personal",
      project_code: "https://github.com/ShejanMahamud",
      project_live: "https://bookify-library.netlify.app/",
      projects_features: [
        "Librarian and User Role",
        "Librarian can add book, delete book, update book",
        "User can borrow book and return a book",
        "Login/Registration",
        "Dashboard for librarian",
      ],
      projects_techs: [
        "Tailwind CSS",
        "JavaScript",
        "React.JS",
        "React Router",
        "Tanstack Query",
        "MongoDB",
        "Express.JS",
        "Firebase Auth",
      ],
    },
    {
      id: 2,
      project_image: "https://i.ibb.co/2s5s5jd/jobify.png",
      project_name: "Jobify",
      project_logo:
        "https://gist.github.com/ShejanMahamud/6f5ae99646017228295820fbaed8f6fb/raw/fa2c804443a9ed19cc6212975c86283699bdaec8/logo.svg",
      project_des: "A complete job portal web app using MERN Stack",
      project_category: "Job Portal Web App",
      project_type: "Full-Stack",
      project_nature: "Personal(In Progress)",
      project_code: "https://github.com/ShejanMahamud/Jobify-Front-End",
      project_live: "https://jobify-web.netlify.app/",
      projects_features: [
        "Role based authentication and authorization",
        "Companies can post jobs, see candidates per specific job, candidate resume and cover letter, change status to Hire, Offer, Rejected, Interview schedule, Interviewed",
        "Candidate can set job preferences in profile settings",
        "Different Dashboard for each role",
      ],
      projects_techs: [
        "Tailwind CSS",
        "JavaScript",
        "React.JS",
        "React Router",
        "Tanstack Query",
        "MongoDB",
        "Node.JS",
        "SSL-Commerz",
        "Node Crons",
        "JWT",
        "Stripe",
        "Express.JS",
        "Firebase Auth",
        "NodeMailer",
      ],
    },
    {
      id: 3,
      project_image: "https://i.postimg.cc/vTtTWLBv/Screenshot-19.png",
      project_name: "NestQuest",
      project_logo:
        "https://gist.githubusercontent.com/ShejanMahamud/1f2446a51e9766dc7d01b9a0115b45c1/raw/7d4e7ecfec11aeb842339981fd2ebea77c863575/logo.svg",
      project_des:
        "A complete full stack real estate management web app using MERN Stack",
      project_category: "Real Estate Management Web App",
      project_type: "Full-Stack",
      project_nature: "Personal",
      project_code: "https://github.com/ShejanMahamud/NestQuest-Client",
      project_live: "https://nestquest-web.netlify.app/",
      projects_features: [
        "User Authentication & Authorization",
        "Social Login/Register & Email Password Based Login/Register",
        "Private Route and Role Based Route",
        "User can add property to wishlist from property details route and wishlist status will be pending by default and user can make an offer between the price range or remove that property from wishlist (can't select price over or below range). Agent can make this request approved or rejected. If status is approved, then user can pay via Stripe, and if paid successfully, the status will be Paid and that property will show in Bought Property section. Also, tran_id will show in that card.",
        "User can add reviews on specific properties from property details route and reviews will show on My Reviews route in user dashboard. From that route, user can also delete any of the reviews they added.",
        "User, Admin, and Agent can all update their profile from the Profile route in their dashboard.",
        "Agent can add property and by default its status will be Pending. If admin approves it, then it will show in My Properties route in agent dashboard.",
        "Agent can keep track of sold properties from Sold Properties route in dashboard.",
        "Agent can keep track of requested properties and see all properties users offered from user dashboard and agent can make these properties status approved or rejected.",
        "Admin can manage all properties in this app. Admin can change agent's added property status from pending to Verified or Rejected.",
        "Admin can manage users and can change user to agent or user to admin and make an agent fraud. If an agent is marked as fraud, then their property will not show in all properties route.",
        "Admin can also manage reviews and delete reviews.",
        "Admin can manage reports against properties.",
        "Admin can manage advertisements from Advertisement route. From here, user can make a property advertised and that will show on the home page.",
      ],
      projects_techs: [
        "Tailwind CSS",
        "JavaScript",
        "React.JS",
        "React Router",
        "Tanstack Query",
        "MongoDB",
        "Node.JS",
        "SSL-Commerz",
        "Node Crons",
        "JWT",
        "Stripe",
        "Express.JS",
        "Firebase Auth",
        "NodeMailer",
      ],
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/project/${id}`);
  };

  const HeadingText = ({ bgText, topText }) => {
    return (
      <div className="text-center">
        <h1 className="text-6xl lg:text-8xl font-bold text-stone-800">{bgText}</h1>
        <h2 className="text-2xl lg:text-4xl font-semibold text-white mt-2">{topText}</h2>
      </div>
    );
  };

  const SearchBar = () => {
    return (
      <div className="w-full flex items-center justify-end mt-20">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-zinc-500"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="search project by name or type"
            className="block p-3 px-10 min-w-[300px] bg-stone-900 border border-neutral-800 text-zinc-400 focus:border-violet-500 focus:ring-violet-500 sm:text-sm rounded-full transition focus:outline-none"
          />
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project }) => {
    return (
      <div
        key={project.id}
        onClick={() => handleCardClick(project.id)}
        className="cursor-pointer opacity-100 transform-none"
      >
        <article className="relative w-full min-h-full p-4 md:p-6 lg:p-8 flex flex-col ring-1 ring-stone-900 bg-gradient-to-tr from-stone-900 to-neutral-900 hover:-translate-y-0.5 rounded-xl transition group">
          <div>
            <span className="absolute inset-0 rounded-xl"></span>
            <span className="absolute top-0 right-0 text-xs font-semibold text-violet-400 py-2 px-4 bg-zinc-800 rounded-bl-xl rounded-tr-xl">
              {project.project_type}
            </span>
          </div>
          <img src={project.project_logo} alt={project.project_name} className="lg:w-16 w-14" />
          <div>
            <h3 className="text-lg text-zinc-300 font-bold my-3">
              {project.project_name}
            </h3>
            <p className="text-zinc-400 text-sm lg:text-base">
              {project.project_category}
            </p>
            <p className="text-zinc-400 text-sm lg:text-base mt-3 font-mukti">
              {project.project_des}
            </p>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className="mt-40 w-[80%] mx-auto">
      <HeadingText bgText={"FEATURED"} topText={"PROJECTS"} />
      <p className="text-center text-zinc-300 my-5 lg:text-base md:text-sm text-xs tracking-wider">
        {`Things I've built that prove my skills and capacity regarding the
        technologies I mentioned.`}
      </p>
      <SearchBar />
      <div className="grid lg:grid-cols-2 grid-cols-1 row-auto items-stretch gap-10 w-full my-20 font-poppins">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
