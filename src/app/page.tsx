"use client"
import ContactSection from '@/Components/ContactSection/ContactSection'
import CoursesSection from '@/Components/CoursesSection/CoursesSection'
import MainCarousel from '@/Components/MainCarousel/MainCarousel'
import About from '@/Components/About/About'
import React from 'react'
import Whyus from '@/Components/Whyus/Whyus'
import Testimonials from '@/Components/Testimonials/Testimonials'
import { Box, Container, Typography } from '@mui/material'
import Btn from '@/Components/Btn/Btn'
// import Contact from '@/Components/Contact/Contact'

const Home = () => {
  return (
    <>
    <Container sx={{my:5,mx:'auto',maxWidth:'lg'}} className='flex wrap space-evenly justify-evenly items-center'>
      <Box sx={{width:'450px'}}>
        <img src="https://cdn.kastatic.org/images/lohp/hero_student_collage_US_1x.png" alt="" className="img" />
      </Box>
      <Box>
        <Typography component="h1" className='clr' sx={{fontWeight:600,maxWidth:'300px',fontSize:'2em'}}>
        For every student,
        every classroom.
        Real results.
        </Typography>
        <Typography  className='' sx={{py:2,color:'#4b4e55',maxWidth:'600px'}}>

        We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
        </Typography>
        <Box className="flex gap gap2">

        <Btn>
          Learners
        </Btn>
        <Btn>
          Courses
        </Btn>
        </Box>
      </Box>
    </Container>

    <CoursesSection limit={0} />
    <Whyus/>
    {/* <MainCarousel res={null}/> */}
    {/*
  <CoursesSection limit={6}/>
    <About/>
    <Testimonials/> */}
    {/* <Contact/> */}
    </>
  )
}

export default Home