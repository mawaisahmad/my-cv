import Navbar from '../components/Navbar'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import Experience from '../components/Experience'
import Education from '../components/Education'
import About from '../components/About'


export default function Home() {
  return (
    <main>
<section className="container mx-auto">
      <Navbar />
      <About />
      <Experience />
      <Education />
      </section>  
      <section className="fixed top-1/4 right-2 md:right-4">
      <Contacts />
      </section>
      <section>
      <Footer />
      </section>
      </main>
  )
  }
