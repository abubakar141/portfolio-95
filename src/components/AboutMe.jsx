import React from 'react'
import blue from "/public/blue.jpeg"
import Image from 'next/image'
const AboutMe = () => {
  return (
    <div >
   
  <center>    <h1 id='about' className="text-4xl tracking-tight lg:text-5xl ml-8 font-black text-blue-800">About Me</h1></center>
  <br /><br /><br />
  <Image 
      src={blue}
      alt='blue'
      height={500}
      width={500}
      className='img rounded-lg mt-20 '
      />
      <br /><br /><br />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-8">
     I&apos;m Abu Bakar
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 ml-8">
      Hi there! I'm Abu Bakar, a passionate frontend developer with a keen interest in creating dynamic and responsive <br /> web applications. At just 9 years old, I am constantly exploring new technologies <br /> and tools to enhance my skills. I have successfully completed the Next.js <br /> course and am actively participating in the PIAIC program to further expand my knowledge.
 <br />
My journey in web development has been exciting, as I love turning ideas into reality through <br /> code. Recently, I&apos;ve been working with Next.js and Redux for state management and have been creating various  <br />components with Tailwind CSS to ensure they are fully responsive and visually appealing
<br />
I&apos;m always eager to learn and take on new challenges, and I enjoy working on projects that allow me to grow both personally <br /> and professionally. Whether it&apos;s creating intricate animations or developing <br />
 robust user interfaces, I strive to deliver high-quality work that exceeds expectations.


      </p>

    </div>
  )
}

export default AboutMe
