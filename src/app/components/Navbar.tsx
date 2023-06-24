"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from "react";
import Logo from './Logo';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { BsFillSunFill } from 'react-icons/bs'
import { BsMoonStarsFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

const CustomLink = ({
  title,
  href,
  className

}: {
  title: string;
  href: string;
  className: string;
}): JSX.Element => {

return(
<Link href={href} className={`${className} relative group`}>
{title}
<span className={`
h-[3px] inline-block w-0 bg-dark 
absolute left-0 -bottom-0.5
group-hover:w-full transition-[width] ease duration-300 dark:bg-light/80
`}>&nbsp;
</span>
</Link>
)
}
const CustomMobileLink = ({
  title,
  href,
  className,
  toggle
}: {
  title: string;
  href: string;
  className: string;
  toggle: any;
}): JSX.Element => {

  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }
return(
<button className={`${className} relative group`} onClick={handleClick}>
  {title}
  <span className={`
    h-[3px] inline-block w-0 bg-light dark:bg-dark 
    absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300 dark:bg-dark/80
  `}>&nbsp;</span>
</button>
)
}
const Navbar = () => {
  const [mode, setMode]:any = useThemeSwitcher();
  const [isOpen, setIsopen] = useState(false);
  const handleClick = () => {
    setIsopen(!isOpen)
  }
  return (
    <header
    className='top-0 left-0 w-full px-32 font-medium flex items-center justify-between shadow-md dark:text-light/80 relative lg:px-6 md:px-6 sm:px-4 z-20'>

      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light/80  transition-all duration-300 ease-out block h-0.5 w-8 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark dark:bg-light/80 transition-all duration-300 ease-out block h-0.5 w-8 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`bg-dark dark:bg-light/80 transition-all duration-300 ease-out block h-0.5 w-8 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
        </button>
      <Logo />
      <button
      onClick={() => setMode(mode === "light" ? "dark" : "light") 
      }
      >
        {
          mode === "dark" ?
          <BsFillSunFill className={"fill-light/80"} />
          : <BsMoonStarsFill className={"fill-dark"} />
        }
      </button>
<div className='lg:hidden'>
        <nav>
            <CustomLink href="/" title="HOME" className='mr-5' />
             <CustomLink href="/about" title="ABOUT" className='mx-5' />
              <CustomLink href="/projects" title="PROJETCS" className='mx-5' />
               <CustomLink href="/articles" title="ARTICLES" className='ml-5' />
        </nav>
        </div>
        
        {
          isOpen ?
<div className='min-w-[70vw] flex flex-col text-light/80 dark:text-dark/90 hidden:lg:flex justify-between z-30 fixed items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/80 dark:bg-light/80 rounded-lg backdrop-blur-md py-32'>
        <nav className='flex flex-col justify-center items-start gap-6'>
          <button
      onClick={() => setMode(mode === "light" ? "dark" : "light") 
      }
      >
        {
          mode === "dark" ?
          <BsFillSunFill className={"fill-dark"} />
          : <BsMoonStarsFill className={"fill-light"} />
        }
      </button>
            <CustomMobileLink href="/" title="HOME" className='' toggle={handleClick}/>
             <CustomMobileLink href="/about" title="ABOUT" className='' toggle={handleClick} />
              <CustomMobileLink href="/projects" title="PROJETCS" className='' toggle={handleClick} />
               <CustomMobileLink href="/articles" title="ARTICLES" className='' toggle={handleClick} />
        </nav>
        </div>
          :null
        }
    </header>
  )
}

export default Navbar
// "use client"
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {

//     function handleNavbar() {
//         let x = document.getElementById("navbar");
//         x?.classList.toggle("hidden")
//     }
//     const navs: string[] = ["Home", "About", "Skills", "Projects", "Contact"]

//     return (
//         <div className='fixed top-0 left-0 w-full mb-60 flex flex-col md:flex-row justify-between z-20'>
//             <div className="flex justify-between">
//                 <div className="mx-8 my-4">
//                     <Link href="/Blog" className="text-xl md:text-2xl font-bold text-dark ">Visit my Blog</Link>
//                 </div>
//                 <button className="px-2 md:px-6 block md:hidden active:outline-none" onClick={handleNavbar}>
//                     <Image src={"/menu.svg"} alt="menu" width={32} height={32}/>
//                 </button>
//             </div>

//             <div id="navbar" className="hidden md:m-6 bg-light md:bg-transparent md:my-0 md:block">
//                 <ul id="navbar" className='md:mx-0 list-none w-full md:w-full text-center md:text-start flex flex-col md:flex-row md:justify-between md:gap-6'>
//                     {navs.map((nav, index) => {
//                         return (
//                             <li key={index} className='py-4 md:my-0 p-3 text-lg md:rounded-2xl font-medium text-dark'>
//                                 <a href={`#${nav}`} className="active:outline-none">{nav}</a>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </div>
//     )
// }
