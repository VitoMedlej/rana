"use client"
import CoursesSection from '@/Components/CoursesSection/CoursesSection'
import Title from '@/Components/Title'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Index = () => {

  return (
    <>
        <Typography component={'h1'} sx={{pt:6,fontSize:'2em'}} className='center text-center auto'>
        Explore Our Diverse Courses    
        </Typography>
       <CoursesSection limit={100}/>
    </>
  )
}

export default Index