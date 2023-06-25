"use client" 
import Navbar from '../components/Navbar'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import AI from '../components/AI'

export default function Home() {
  return (
    <main>
<section className="container ">
      <Navbar />
      <AI />
      </section>  
      <section className="fixed top-1/4 right-2">
      <Contacts />
      </section>
      <Footer/>
      </main>
  )
}