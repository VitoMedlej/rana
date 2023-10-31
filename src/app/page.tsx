
import ContactSection from '@/Components/ContactSection/ContactSection'
import CoursesSection from '@/Components/CoursesSection/CoursesSection'
import MainCarousel from '@/Components/MainCarousel/MainCarousel'
import About from '@/Components/About/About'
import React from 'react'
import Whyus from '@/Components/Whyus/Whyus'
import Testimonials from '@/Components/Testimonials/Testimonials'
// import Contact from '@/Components/Contact/Contact'

const Home = () => {
  return (
    <>
    <MainCarousel res={null}/>
    <ContactSection/>
    <CoursesSection/>
    <About/>
    <Whyus/>
    <Testimonials/>
    {/* <Contact/> */}
    </>
  )
}

export default Home