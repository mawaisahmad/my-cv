import React from 'react'
import AnimatedText from './AnimatedText'
import Image from 'next/image'
import Link from 'next/link'
import image1 from '../../../public/image1.png'
import image10 from '../../../public/image10.png'
import image9 from '../../../public/image9.png'
import image4 from '../../../public/image4.png'
import image5 from '../../../public/image5.png'
import image7 from '../../../public/image7.png'
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
const FramerImage = motion(Image);
 const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  
}: {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github: string;
}): JSX.Element => {
return(
<article className="flex items-center justify-between rounded-3xl border border-solid dark:border-dark
 bg-dark/10 dark:bg-light/20 shadow-md shadow-dark/50 p-8 ml-16 lg:ml-2  relative lg:flex-col 
 lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
 
  {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>  */}

 <Link href={link} target="_blank"
className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
<FramerImage src={img} alt={title} className="w-full h-[100%]" 
whileHover={{scale:1.1}}
transition={{duration:0.2}}
priority
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
</Link>
<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full'>
<span className='text-primary font-medium text-xl'>{type}</span>
<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
<h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
</Link>

<p className='my-2 font-medium text-dark lg:hidden'>{summary}</p>
<div className="flex items-center">
  <Link href={github} target="_blank">
    <AiFillGithub style={{ fontSize: '32px' }} />
  </Link>
  <Link
    href={link}
    target="_blank"
    className="text-light ml-8 rounded-lg bg-dark p-2 px-4 text-lg font-semibold"
  >
    Visit Project
  </Link>
</div>
 </div>
</article>
)
}
const Project = ({
  type,
  title,
  img,
  link,
  github,
  
}: {
  type: string;
  title: string;
  img: any;
  link: string;
  github: string;
}): JSX.Element => {
    return(
      <article className=" flex flex-col items-center justify-center rounded-2xl border border-solid dark:border-dark 
       bg-dark/10 dark:bg-light/20 p-6 shadow-md shadow-dark/50 relative ml-16 lg:ml-2 lg:flex-col 
 lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
<Link href={link} target="_blank"
className='w-full cursor-pointer overflow-hidden rounded-lg'>
<FramerImage src={img} alt={title} className="w-full h-[100%]" 
whileHover={{scale:1.1}}
transition={{duration:0.2}}
priority
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
</Link>
<div className='my-2 w-full text-left text-3xl font-bold mx-4'>
<span className='text-primary font-medium text-xl'>{type}</span>
<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
<h2 className='my-2 w-full text-left text-2xl font-bold'>{title}</h2>
</Link>
<div className="flex items-center">
  <Link href={github} target="_blank">
    <AiFillGithub style={{ fontSize: '32px' }} />
  </Link>
  <Link
    href={link}
    target="_blank"
    className="text-light ml-8 rounded-lg bg-dark p-2 px-4 text-lg font-semibold"
  >
    Visit
  </Link>
</div>
</div>
</article>
    )
  }


const Work = () => {
  return (
    <>
    <AnimatedText text="Passion fuel" className='text-5xl text-dark font-bold text-center mt-16'/>
    <main className='grid grid-cols-12 gap-12 gap-y-16 xl:gap-x-8 lg:gap-x-4 md:gap-y-12 sm:gap-x-0 mt-10 ml-16'>
    <div className="col-span-10">
      <FeaturedProject 
      title="Personal Portfolio Website"
      img={image1}
      summary="A feature-rich Personal Portfolio Website using Nextjs 13, typescript and Tailwind CS. It covers personal information
      educational background, experiences, main projects and context section"
      link ="/" 
      github="/"
      type ="Featured Project"
     />
    </div>

    <div className="col-span-5 flex flex-col mx-auto lg:col-span-10">
      <Project 
      title="Panel Data Analysis on STATA"
      img={image10} 
      link ="/" 
      github="/"
      type ="Project"
     />
    </div>

    <div className="col-span-5 flex flex-col mx-auto lg:col-span-10">
      <Project 
      title="Event Study Analysis"
      img={image9}
      link ="/" 
      github="/"
      type ="Project"
     />
    </div>
        <div className="col-span-10">
      <FeaturedProject 
      title="UKRAINIAN DAIRY INDUSTRY: FINANCIAL PERFORMANCE "
      img={image4}
      summary="A feature-rich Personal Portfolio Website using Nextjs 13, typescript and Tailwind CS. It covers personal information
      educational background, experiences, main projects and context section"
      link ="/" 
      github="/"
      type ="Featured Project"
     />
    </div>
    <div className="col-span-5 flex flex-col mx-auto lg:col-span-10">
   <Project 
      title="Business Plan: Mahra Laundries "
      img={image5}
      link ="/" 
      github="/"
      type ="Project"
     />
    </div>

    <div className="col-span-5 flex flex-col mx-auto mb-10 lg:col-span-10">
   <Project 
      title="Financial Analysis Bannu Woollen"
      img={image7}
      link ="/" 
      github="/"
      type ="Project"
     />
    </div>
      </main>
      </>
   
  )
}

export default Work