
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Title from './Components/Title/Title.jsx'
import Unviersity from './Components/University/Unviersity.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer"/>
         <Programs/>
         <About/>
         <Title subTitle="Gallery" title="University Photos"/>
         <Unviersity/>
         <Title subTitle="TESTIMONIALS" title="What Students Say"/>
         <Testimonials/>
         <Title subTitle="Contact Us" title="Get In Touch"/>
         <Contact/>
         <Footer/>

      </div>
     
      
    </div>
  )
}

export default App
