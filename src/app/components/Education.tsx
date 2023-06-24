"use client"
import { useScroll, motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
import React from 'react';
import { useRef } from 'react';
import LiIcon from "../components/LiIcon";
import Navbar from "../components/Navbar";
import avatar from "../../../avatar.jpg"
import Image from "next/image";

const Details = ({
  degree,
  institute,
  webLink,
  time,
  address,
  details
}: {
  degree: string;
  institute: string;
  webLink: string;
  time: string;
  address: string;
  details: string;
}): JSX.Element => {
  const ref = useRef(null);
  return (
<li ref={ref} className='my-8 w-[75%] mx-auto -ml-8 flex flex-col items-center justify-between'> 
<LiIcon reference={ref}/>
<div>
<h3 className='capitalize font-bold text-2x1'>
  {degree}&nbsp;<a href={webLink}
  target='_blank'
  className='text-primary capitalize'
  >@{institute} </a></h3> <span className='capitalize font-medium text-dark/75 dark:text-light'>
{time}|{address}
</span>
<p className='font-medium w-full'>
  {details}
</p>
</div>
</li>
)
}
const Education = () => {
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
        <AnimatedText text="Education" className="text-5xl text-dark font-bold text-center" />
        <div className='w-[75%] mx-auto relative'>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-14 top-16 bottom-40 -ml-24 w-[4px] h-[71%] bg-dark dark:bg-primary origin-top"
          />
          <ul className="w-[120%] lg:w-140 text-justify flex flex-col items-start justify-between ml-4 gap-12 dark:text-light">
            <Details
              degree="MBA-Finance (Gold Medalist)"
              institute="Iqra University"
              webLink="https://iuisl.iqra.edu.pk/"
              time="2020-2021"
              address="H-9 Sector,Islambad Pakistan"
              details="I am an accomplished professional with expertise in finance,
              holding an MBA with a specialization in finance.
              I take pride in being awarded the prestigious Gold Medal for my outstanding academic performance.
              With a strong foundation in finance,
              I bring a wealth of knowledge and skills to any financial role or project."
            />
                        <Details
              degree="CMA-Managerial Certification"
              institute="ICMAP"
              webLink="https://www.icmainternational.com/"
              time="2013-2015"
              address="H-9 Sector,Islambad Pakistan"
              details="I am a skilled cost and management accountant with a strong focus on financial planning. 
              With a wealth of experience in analyzing complex financial data,
              I excel at accurately predicting future financial outcomes
              and offering valuable insights to facilitate effective decision-making.
              My expertise in cost management guarantees optimal resource allocation
              and meticulous financial planning for organizations."
            />
                                    <Details
              degree="BBA-H (Finance)"
              institute="Iqra University"
              webLink="https://iuisl.iqra.edu.pk/"
              time="2009-2013"
              address="H-9 Sector,Islambad Pakistan"
              details="I hold a BBA in Finance, which served as the foundation for my journey in the finance field.
              This degree equipped me with a comprehensive understanding of financial principles and practices.
              It ignited my passion for finance and propelled
              me towards pursuing a successful career in the financial industry."
            />
                    </ul>
        </div>

                </div>
       </div>            

)
}
export default Education;
