"use client"
import { useScroll, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import React from 'react';
import { useRef } from 'react';
import LiIcon from "./LiIcon";
import Navbar from "./Navbar";
import avatar from "../../../avatar.jpg"
import Image from "next/image";

 const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  
}: {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}): JSX.Element => {
  const ref = useRef(null);
  
<Navbar />
return (
  <div className="mt-8 grid w-full grid-cols-12 gap-16">
<li ref={ref} className='col-span-9 lg:col-span-6 lg:-ml-12 justify-left font-medium text-left dark:text-light rounded-2xl border border-solid dark:border-dark bg-dark/10 dark:bg-light/20 p-6 shadow-md shadow-dark/50'> 
<LiIcon reference={ref}/>
<div>
<h3 className='capitalize font-bold text-2x1'>
  {position}&nbsp;<a href={companyLink}
  target='_blank'
  className='text-primary capitalize'
  >@{company} </a></h3> <span className='capitalize font-medium text-dark/75'>
{time}|{address}
</span>
<p className='font-medium w-full'>
  {work}
</p>
</div>
</li>
</div>
)
}
const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
return (

     <div className='mt-16'>
    
      <div>
        <AnimatedText text="Experience" className="text-5xl text-dark font-bold text-center" />
        <div className='w-full mx-auto relative'>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left top-16 -bottom-1 ml-9 w-[4px] h-[80%] bg-dark dark:bg-primary origin-top"
          />
          <ul className="ml-28">
            <Details 
              position="Web Developer"
              company="Fiverr"
              companyLink="www.fiverr.com"
              time="2022-Present"
              address="Pakistan"
              work="I work as a Next.js full-stack developer on Fiverr,
               offering my expertise and services to clients.
               With my strong command over Next.js, I deliver robust and efficient web applications.
               I pride myself on delivering high-quality work that meets client requirements and
               exceeds their expectations. My Fiverr profile showcases my skills and achievements,
               demonstrating my commitment to delivering exceptional results."
            />
            <Details
              position="Data Analyst"
              company="Fiverr"
              companyLink="www.fiverr.com"
              time="2018-Present"
              address="Pakistan"
              work=" I specialize in extracting valuable insights from complex datasets.
              With my expertise in statistical analysis, data visualization,
              and data mining techniques, I provide clients with accurate and actionable reports.
              I strive to deliver data-driven solutions that help businesses make informed decisions
              and optimize their strategies. My Fiverr profile showcases
              my proficiency and successful track record in data analysis."
            />
                        <Details
              position="Director"
              company="Alif Research PVT LTD."
              companyLink="www.google.com"
              time="2019-2022"
              address="Islamabad, Pakistan"
              work="As the Director at ALIF Research Private Limited,
              my primary responsibility was to liaise with clients and
              deliver comprehensive solutions. This involved conducting 
              in-depth research and performing data analysis to identify key insights 
              and provide documented recommendations.
              By leveraging my expertise in research methodologies and data analysis,
              I consistently delivered valuable outcomes for our clients."
            />
                        <Details
              position="Team Leader"
              company="Beta Tutors formerly Alif Research Academy"
              companyLink="https://www.facebook.com/profile.php?id=100088160341894"
              time="2014-2018"
              address="Islamabad, Pakistan"
              work="As a team leader at a Beta tutors, I provided guidance and support to my team members.
               I ensured effective collaboration, fostering a conducive environment for research and teaching activities.
               Through my leadership, I promoted excellence, 
               encouraged innovation, and facilitated the achievement of our institute's goals."
            />
          </ul>
        </div>
      </div>
    </div>
)
}
export default Experience;
