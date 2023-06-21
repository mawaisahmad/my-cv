import Link from "next/link"
import React from 'react'
import { motion } from "framer-motion"
const MotionLink = motion(Link);

const Logo = () => {
    return (
    <div className="flex items-center justify-center mt-2 ml-8">
      <MotionLink href="/"
      className="w-16 h-16 text-dark dark:text-light/80 flex items-center justify-center text-2xl font-bold"
      whileHover={{
            scale:1.5,
      }}
      >
        ALIF
      </MotionLink>
    </div>
  )
}

export default Logo