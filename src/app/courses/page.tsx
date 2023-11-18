"use client"
import CoursesSection from '@/Components/CoursesSection/CoursesSection'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Index = () => {

  return (
    <>
    <Typography className='text-center auto' component='h1' sx={{px:1,py:8,fontSize:'2.4em'}}>
      Checkout Our Latest Offers
    </Typography>
    <Box className="flex auto gap wrap">

    {[1,2,3,4].map(i=>{
      return <Box className='auto center' sx={{py:2,width:{xs:'95%',sm:'45%'}}}>
          <img src="" alt="" className="img" />
      </Box>
    })}
    </Box>
    
    </>
  )
}

export default Index