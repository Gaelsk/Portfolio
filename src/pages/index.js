import React from "react"
import '../styles/App.css'
import Layout from "../components/Layout";
import SEO from '../components/Seo';

import HeroSection from '../sections/hero'
import AboutSection from '../sections/about'
import SkillsSection from '../sections/skills'
import ProjectsSection from '../sections/projects'

/* ##TODO
    #Nav bar animation
*/

export default () => (
    <>       
        <SEO title='Portfolio' />     
        <Layout>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
        </Layout>
    </>
)
