import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid font-medium text-lg shadow-lg sm:text-base z-10'> 
<div className='mx-24 py-8 flex items-center justify-between lg:flex-col lg:mx-8 lg:py-8'>

 <div className='flex items-center dark:text-light'>
    Build <span className='text-3x1 px-1 lg:py-2'></span> 
    by&nbsp;
    <Link href="https://github.com/mawaisahmad" className='underline underline-offset-2' target={"_blank"}> Alif Consultant </Link>
</div>
<Link href="mailto:muhammadawaisahmadrana@gmail.com" className='underline underline-offset-2  dark:text-light'target={"_blank"}>Say Hello</Link>
<span className='dark:text-light'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
</div>
</footer>
  )
}

export default Footer