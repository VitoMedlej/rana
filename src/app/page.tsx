"use client"
import ContactSection from '@/Components/ContactSection/ContactSection'
import CoursesSection from '@/Components/CoursesSection/CoursesSection'
import MainCarousel from '@/Components/MainCarousel/MainCarousel'
import About from '@/Components/About/About'
import React, { useEffect, useState } from 'react'
import Whyus from '@/Components/Whyus/Whyus'
import Testimonials from '@/Components/Testimonials/Testimonials'
import { Box, Container, Typography } from '@mui/material'
import Btn from '@/Components/Btn/Btn'
import Contact from '@/Components/Contact/Contact'
import useLanguage from '@/Hooks/UseLanguage'
import { useRouter } from 'next/navigation'
import { categorizeCourses } from './courses/page'
// import Contact from '@/Components/Contact/Contact'

const Home = () => {
  const {text} = useLanguage()
  const router = useRouter()
  const [data,setData] = useState(null)
  
  const fetcher =async () => {
    try {

      const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-all`)
      const res = await req.json(); 
      if (res && res?.data?.products) {
        const newArray = categorizeCourses(res?.data?.products)
        setData(newArray)
      }
    }
    catch(e){
      console.log('e: ', e);

    }
  }
  useEffect(() => {
    
  
    fetcher()

  }, [])
  return (
    <>
    <Container sx={{my:5,mx:'auto',maxWidth:'lg'}} className='flex wrap space-evenly justify-evenly items-center'>
      <Box sx={{width:'450px'}}>
        <img src="https://cdn.kastatic.org/images/lohp/hero_student_collage_US_1x.png" alt="" className="img" />
      </Box>
      <Box>
        <Typography component="h1" className='clr' sx={{fontWeight:600,maxWidth:'300px',fontSize:'2em'}}>
       { text('Excellence in Translation and Training.', 'لكل طالب، في كل فصل دراسي. نتائج حقيقية.')}
        </Typography>
        <Typography  className='' sx={{py:2,color:'#4b4e55',maxWidth:'600px'}}>

        {
  text('Unlock your potential and chart a course to linguistic excellence with the International Academy for Translation and Training.', 'نحن منظمة غير ربحية برسالة توفير تعليم مجاني ومتميز على مستوى العالم لأي شخص في أي مكان.')
}
        </Typography>
        <Box className="flex gap gap2">

        <Btn
         onClick={()=>router.push(`/about-us`)}
        >
        {
  text('Our Story', 'قصتنا')
}
        </Btn>
        <Btn
        
        onClick={()=>router.push(`/courses`)}>
        {
  text('Courses', 'الدورات')
}
        </Btn>
        </Box>
      </Box>
    </Container>

    <CoursesSection data={data} limit={0} />
    <Whyus/>
    <About/>
    {/* <MainCarousel res={null}/> */}
    {/*
  <CoursesSection limit={6}/>
    <Testimonials/> */}
    <Contact/>
    </>
  )
}

export default Home