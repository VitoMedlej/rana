"use client";
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter()

  return (
    <Container  sx={{px:2,pb:{xs:0,sm:4,md:6},pt:{xs:0,sm:8,md:12}}} className='flex center  col auto'>
         
            <Grid  sx={{pt:12}} container className="flex justify-between space-between">
                <Grid  item xs={12} sm={6} md={5}>
                <Typography component='h1' className='clr' sx={{pt:4,maxWidth:'600px',fontWeight:500,fontSize:'3em'}}>
                   
                You can learn anything.

                </Typography>
                <Typography component='p' sx={{py:2,maxWidth:'620px',color:'#4d4d4d'}}>
                Build a deep, solid understanding in math, science, and more.
              
                </Typography>
      
                                   
                                <Btn 
                                onClick={()=>router.push('/about-us')}
                                className='  ' sx={{mt:2,mb:{xs:3,sm:0}}}>
                          Start Now
                                </Btn>
                </Grid>
                <Grid item xs={12} sm={6} md={7}>
                  <Box sx={{height:'400px'}} className="w100 ">

                    <img src="https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png" alt="" className="img contain" />
                  </Box>
                </Grid>
            </Grid>
    </Container>
  )
}

export default About