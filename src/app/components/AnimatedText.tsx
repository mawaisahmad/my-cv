import React from 'react'
import {motion} from "framer-motion"
const quote = {
initial:{
opacity:1,
},
animate: {
opacity:1,
transition:{
delay: 0.5,
staggerChildren: 0.08,
}
}
}
const singelWord = {
initial:{
opacity:0,
y:50,
},
animate: {
opacity:1,
y:0,
transition:{
duration:1,
}
}
}
const AnimatedText = ({text, className=""}) => {
return (
<div className="text-4xl text-dark mt-6 overflow-hidden">
<motion.h1 className={`inline-block w-full text-dark capitalize text-4xl dark:text-light ${className}`}
variants={quote}
initial="initial"
animate="animate"
>
{
text.split(" ").map((word, index) => 
<motion.span key={word+'-'+index} className="inline-block"
variants={singelWord}
>

{word}&nbsp;
</motion.span>
)
}
</motion.h1>

</div>
)
}
export default AnimatedText