"use client" 
import Navbar from '../components/Navbar'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import Work from '../components/Work'
import react from 'react'


export default function Home() {
  return (
    <main>
<section className="container ">
      <Navbar />
      <Work />
      </section>  
      <section className="fixed top-1/4 right-2">
      <Contacts />
      </section>
      <section>
      <Footer />
      </section>
      </main>
  )
  }
