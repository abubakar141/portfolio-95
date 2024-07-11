import Hero from '@/components/Hero'
import React from 'react'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import AboutMe from '@/components/AboutMe'
import ContactMe from '@/components/ContactMe'
import Instructor from '@/components/Instructor'
const page = () => {
  return (
    <div>
    <Hero />
    <br /> <br /> <br /> <br /> <br />
    
     <br /> <br /> <br /> <br /> <br /> <br />
     <br /> <br /> <br /> <br /> <br />
    
     <br /> <br /> <br />
     <AboutMe />
     <br /> <br /> <br /> <br /> <br />
      <Skills />
      <br /> <br /> <br /> <br /> <br /> <br /> 
      <Projects />

      <br /> <br /> <br /> <br /> <br /> 

    <br /> <br /> <br /> <br /> <br />
    <ContactMe />
    <br /> <br /> <br /> <br /> <br />
    </div>
  )
}

export default page
