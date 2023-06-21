import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Back from './components/Back'
import About from './components/About'
export default function Home() {
  return (

    <main>
<section className="container">
      <Navbar />
      <Hero />
      </section>  
      <section className="fixed top-14 right-2">
      <Contacts />
        </section>
              <section className="fixed bottom-6 right-2">
        <Back />
      </section>
        <section>
          <Footer />
        </section>
              </main>
  )
  }
