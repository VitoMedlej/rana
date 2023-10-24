import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter()

  return (
    <Container  sx={{px:2,pb:{xs:0,sm:4,md:6},pt:{xs:0,sm:8,md:12}}} className='flex center  col auto'>
         
            <Grid  sx={{pt:12}} container className="flex justify-between space-between">
                <Grid  item xs={12} sm={6} md={7.5}>
                <Typography component='h2' sx={{maxWidth:'600px',fontSize:'2em'}}>
                   
                Meet CivilEnGuide: Your Partner in Engineering Excellence

                </Typography>
                <Typography sx={{pt:2,maxWidth:'620px',color:'#4d4d4d'}}>
                At CivilEnGuide, we’re more than just a service provider. We’re a community of innovators, educators, and engineers committed to shaping the future of engineering. Discover our journey, our values, and how we’re making a difference in the engineering world.
              
                </Typography>
      
                                   
                                <Btn 
                                onClick={()=>router.push('/about')}
                                className='bg white borderColor' sx={{mt:3,mb:{xs:6,sm:0}}}>
                              Discover Our Story
                                </Btn>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box className="w100 h100">

                    <img src="https://ucarecdn.com/9bbb2df8-72a4-4762-ba21-29667d122735/glenncarstenspetersnpxXWgQ33ZQunsplash_glnAGPln.webp" alt="" className="img" />
                  </Box>
                </Grid>
            </Grid>
    </Container>
  )
}

export default About