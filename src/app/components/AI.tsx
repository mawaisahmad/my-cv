"use client"
import { useScroll, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import React from 'react';
import { useRef } from 'react';
import LiIcon from "./LiIcon";
import Navbar from "./Navbar";
const Details = ({work}) => {
  const ref = useRef(null);
  
<Navbar />
return (
<li ref={ref} className='my-8 w-[75%] mx-auto -ml-8 flex flex-col items-center justify-between'> 
<LiIcon reference={ref}/>
<div>

<p className='font-medium w-full'>
  {work}
</p>
</div>
</li>
)
}
const AI = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
return (

     <div className='mb-28 pb-24'>
    
      <div>
        <AnimatedText text="Artificial Intelligence" className="text-5xl text-dark font-bold text-center" />
        <div className='w-[75%] mx-auto relative'>
          {/* <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-14 top-16 -bottom-1 -ml-24 w-[4px] h-[120%] bg-dark dark:bg-primary origin-top"
          /> */}
          <ul className="w-[120%] flex flex-col items-start justify-between ml-4 gap-24  dark:text-light">
            <Details 
              work="Artificial intelligence (AI) is a branch of computer science that deals with the creation of intelligent agents, which are systems that can reason, learn, and act autonomously. AI research has been highly successful in developing effective techniques for solving a wide range of problems, from game playing to medical diagnosis. "
            />
          </ul>
        </div>
      </div>
    </div>
)
}
export default AI;
