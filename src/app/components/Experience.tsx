"use client"
import { useScroll, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import React from 'react';
import { useRef } from 'react';
import LiIcon from "./LiIcon";
import Navbar from "./Navbar";
import avatar from "../../../avatar.jpg"
import Image from "next/image";

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null);
  
<Navbar />
return (
<li ref={ref} className='my-8 w-[75%] mx-auto -ml-8 flex flex-col items-center justify-between'> 
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
        <div className='w-[75%] mx-auto relative'>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-14 top-16 -bottom-1 -ml-24 w-[4px] h-[120%] bg-dark dark:bg-primary origin-top"
          />
          <ul className="w-[120%] flex flex-col items-start justify-between ml-4 gap-24  dark:text-light">
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
