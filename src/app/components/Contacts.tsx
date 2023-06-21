import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Contacts() {
    const socials = [
        {
            icon: faGithub,
            link: "https://github.com/mawaisahmad"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/awais-ahmad-ab2411257/"
        },
        {
            icon: faTwitter,
            link: "https://twitter.com/mawaisahmadrana"
        },
        {
            icon: faEnvelope,
            link: "mailto:muhammadawaisahmadrana@gmail.com"
        },
        {
            icon: faWhatsapp,
            link: "https://api.whatsapp.com/send?phone=923335053343"
        },
    ]

    return (
        <ul className='flex flex-col gap-2'>
            {socials.map((social, index) => {
                return (
                    <Link key={index} target="_blank" href={social.link}>
                        <li className='my-4 w-12 h-12 border-3 group shadow-inner cursor-pointer rounded-full flex justify-center items-center'
>
                            <FontAwesomeIcon icon={social.icon} className='hover:w-8 hover:h-8 w-6 h-6 text-gold' />
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}
