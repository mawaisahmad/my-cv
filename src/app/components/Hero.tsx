"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import avatar from "../../../avatar.jpg";
import AnimatedText from "./AnimatedText";
import Link from "next/link"
import { BsBoxArrowInUpLeft } from "react-icons/bs";
const Hero = () => {
  return (

<div className="flex items-center text-dark w-full min-h-screen"> 

<div className="w-full items-center justify-between flex lg:flex-col mb-4">
  <div className="w-1/2"> 
           <Image
                     src={avatar}
          alt="Awais Ahmad"
          width={325}
          height={325}
          className="rounded-full float-lelf mx-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
</div>
<div className="w-1/2 flex flex-col"> 

<h1>
< AnimatedText text="I'm Awais Ahmad" className="!text-6xl  text-dark dark:text-light font-bold text-left lg:!text-2xl lg:w-full lg:!text-center md:!text-3xl sm:!text-6xl"/>
</h1>
<h4 className="text-4xl text-dark dark:text-light font-bold pt-5 text-start lg:text-center lg:text-xl md:text-3xl sm:text-2xl">
<Typewriter
  options={{
    strings: ["Data Analyst!", "Web Developer!"],
    delay: 50, 
    deleteSpeed: 20, 
    autoStart: true,
    loop: true,
  }}
/>
          </h4>
<div className="bg-gold mt-4 h-[3px] w-[140px] lg:mx-auto"></div>
<p className="text-dark dark:text-light text-sm mt-8 font-bold lg:text-center">
 Your satisfaction is my top priority...
</p>
<div className= "flex items-center self-start mt-2 pt-6 lg:self-center"> 
<Link href="/resume.pdf" target={"_blank"}
className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold
 hover:bg-light hover:text-dark  dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent
hover:border-dark dark:hover:border-light md:px-4 md:text-base
"
download={true}>
Resume 
<div className="className={w-6 ml-1">
<BsBoxArrowInUpLeft /> 
</div>
</Link>
<Link href="mailto: muhammadawaisahmadrana@gmail.com" target={"_blank"}
className="ml-8 text-lg font-medium capitalize text-dark dark:text-light underline hover:1.5 md:text-base">
  Contact
  </Link> 
</div>
</div>
        </div>
</div>
  )
}
export default Hero

