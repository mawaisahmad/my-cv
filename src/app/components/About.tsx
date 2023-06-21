"use client"
import Image from "next/image";
import awais from "../../../awais.jpg";
import Animatedtext from "./AnimatedText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import React, { useRef, useEffect } from "react"

const AnimatedNumbers = ({value}) =>  { 
const ref = useRef(null);
const motionValue = useMotionValue(0);
const springValue = useSpring (motionValue, { duration: 3000 })
const isInView = useInView(ref);

useEffect(() => { 
    if(isInView)
    { motionValue.set(value);
}
}, [isInView, value, motionValue])
useEffect(() => {
springValue.on("change", (latest) => 
{ if(ref.current && latest.toFixed(0) <= value ){
     ref.current.textContent = latest.toFixed(0);
    }
})
}, [springValue, value])
return <span ref={ref}></span>
}

const About = () => {
  return (

<main className='flex w-full flex-col items-center justify-center'> 
<Animatedtext text="Passion Fuels Purpose!" className="!text-7xl font-bold lg:!text-5xl sm:!text-4xl xs:!text-3xl lg:text-center"/>
<div className='grid w-11/12 grid-cols-8 gap-16'>
<div className='col-span-3 flex flex-col items-start justify-around gap-2  md:order-2 lg:col-span-7 '>
<h2 className='mb-4 text-1g font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
<p className="font-medium text-left dark:text-light rounded-2xl border border-solid dark:border-dark  bg-dark/10 dark:bg-light/20 p-6 shadow-md shadow-dark/50 ">
    For the past eight years, I have specialized in data analysis, providing research analytical services on freelancing forums. 
    I have assisted clients in various research tasks, including developing conceptual frameworks, 
    conducting surveys, performing statistical computations,
    and offering econometric modeling.
</p>
<p className="font-medium text-left dark:text-light rounded-2xl border border-solid dark:border-dark  bg-dark/10 dark:bg-light/20 p-6 shadow-md shadow-dark/50 ">
    Over the past four months, I have embarked on a web development journey. I have delved into typescript, tailwindCSS and NextJS 
    framework to expand my skill set.
    This newfound expertise in web development allows me to offer comprehensive solutions that 
    seamlessly integrate data analysis with captivating web interfaces. 
    </p>
     </div>
    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light
     dark:bg-dark p-8 mt-16 md:order-1 lg:col-span-7">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light/80"/>
            <Image src={awais} alt="Alif" className="w-full h-auto rounded-2xl" 
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
    </div>

<div className='col-span-2 flex flex-col items-end justify-between lg:col-span-6 lg:flex-row lg:items-center md:order-3'>
          <div className='flex flex-col items-end justify-center md:items-center'>
            <span className='inline-block text-5xl font-bold dark:text-light lg:text-lg sm:text-4xl xs:text-3xl'>
              <AnimatedNumbers value={400}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 whitespace-nowrap lg:text-center lg:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
          </div>
          <div className='flex flex-col items-end justify-center lg:items-center'>
            <span className='inline-block text-5xl font-bold dark:text-light lg:text-lg sm:text-4xl xs:text-3xl'>
              <AnimatedNumbers value={500}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 whitespace-nowrap lg:text-center lg:text-lg sm:text-base xs:text-sm ml-2'>Projects Completed</h2>
          </div>
          <div className='flex flex-col items-end justify-center lg:items-center'>
            <span className='inline-block text-5xl font-bold dark:text-light lg:text-lg sm:text-4xl xs:text-3xl'>
              <AnimatedNumbers value={8}/>+
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 whitespace-nowrap md:text-center md:text-lg sm:text-base xs:text-sm ml-2'>Years of Experience</h2>
          </div>
        </div>
        </div>
</main>
  )
}

export default About