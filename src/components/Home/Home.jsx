import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import ProjectSection from '../ProjectSection/ProjectSection'
import SkillSection from '../SkillSection/SkillSection'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>
        <SkillSection></SkillSection>
        <ProjectSection></ProjectSection>
    </div>
  )
}

export default Home