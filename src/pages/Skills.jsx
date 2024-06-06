import React from 'react';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
    SiExpress,
    SiFigma,
    SiFirebase,
    SiMongodb,
    SiNodedotjs,
    SiReactrouter,
    SiTailwindcss
} from "react-icons/si";
import HeadingText from '../Utils/HeadingText';
import SkillCard from '../Utils/SkillCard';


const Skills = () => {
  return (
    <div className="mt-40 w-[80%] mx-auto font-poppins min-h-screen">
    <HeadingText bgText={"EXPERTISE"} topText={"SKILLS"}></HeadingText>
    <p className="text-center text-zinc-300 my-5 lg:text-base md:text-sm text-xs tracking-wider">
      Programming Languages, Frameworks, Libraries, Tools, and Technologies
      I'm working on.
    </p>

    <div className="grid lg:grid-cols-3 grid-cols-1 row-auto gap-x-8 gap-y-16 lg:mt-28 mt-16">
      <SkillCard
        title={"HTML"}
        description={"Markup Language"}
        level={4}
        icon={<FaHtml5 />}
      />
      <SkillCard
        title={"CSS"}
        description={"Stylesheet Language"}
        level={4}
        icon={<FaCss3Alt />}
      />
      <SkillCard
        title={"Tailwind CSS"}
        description={"CSS Framework"}
        level={4}
        icon={<SiTailwindcss />}
      />
      <SkillCard
        title={"JavaScript"}
        description={"Language"}
        level={3}
        icon={<IoLogoJavascript />}
      />
      <SkillCard
        title={"React"}
        description={"JavaScript Library"}
        level={3}
        icon={<FaReact />}
      />
      <SkillCard
        title={"React Router"}
        description={"React Routing Library"}
        level={3}
        icon={<SiReactrouter />}
      />
      <SkillCard
        title={"Node JS"}
        description={"JavaScript Runtime"}
        level={4}
        icon={<SiNodedotjs />}
      />
      <SkillCard
        title={"Express JS"}
        description={"NodeJS Framework"}
        level={4}
        icon={<SiExpress />}
      />
      <SkillCard
        title={"MongoDB"}
        description={"Database"}
        level={3}
        icon={<SiMongodb/>}
      />
              <SkillCard
        title={"Figma"}
        description={"Design Tool"}
        level={3}
        icon={<SiFigma />}
      />
      <SkillCard
        title={"Git"}
        description={"Version Control Tool"}
        level={4}
        icon={<FaGitAlt />}
      />
      <SkillCard
        title={"Firebase"}
        description={"Authentication Tool"}
        level={4}
        icon={<SiFirebase />}
      />
    </div>
  </div>
  )
}

export default Skills