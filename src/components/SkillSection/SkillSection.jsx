import React from 'react';
import { FaCss3Alt, FaGitAlt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFigma, SiFirebase, SiReactrouter, SiTailwindcss, SiUbuntu } from "react-icons/si";
import HeadingText from '../Utils/HeadingText';
import SkillCard from '../Utils/SkillCard';

const SkillSection = () => {
  return (
    <div className='my-28 w-[80%] mx-auto font-poppins'>
        <HeadingText bgText={'EXPERTISE'} topText={'SKILLS'}></HeadingText>
        <p className='text-center text-zinc-300 my-5' >Programming Languages, Frameworks, Libraries, Tools, and Technologies I'm working on.</p>

       <div className='grid grid-cols-3 row-auto gap-x-8 gap-y-16 mt-28'>
       <SkillCard title={'HTML'} description={'Markup Language'} level={4} icon={<FaHtml5 />}/>
       <SkillCard title={'CSS'} description={'Stylesheet Language'} level={4} icon={<FaCss3Alt  />}/>
        <SkillCard title={'Tailwind CSS'} description={'CSS Framework'} level={4} icon={<SiTailwindcss />}/>
        <SkillCard title={'JavaScript'} description={'Language'} level={3} icon={<IoLogoJavascript />}/>
        <SkillCard title={'React'} description={'JavaScript Library'} level={3} icon={<FaReact />}/>
        <SkillCard title={'React Router'} description={'React Framework'} level={3} icon={<SiReactrouter />}/>
        <SkillCard title={'Ubuntu'} description={'Operating System'} level={4} icon={<SiUbuntu />}/>
        <SkillCard title={'Figma'} description={'Design Tool'} level={3} icon={<SiFigma />}/>
        <SkillCard title={'Git'} description={'Version Control Tool'} level={4} icon={<FaGitAlt />}/>
        <SkillCard title={'Firebase'} description={'Authentication Tool'} level={4} icon={<SiFirebase />}/>
       </div>
    </div>
  )
}

export default SkillSection