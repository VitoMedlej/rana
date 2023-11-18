"use client";
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation';
import useLanguage from '@/Hooks/UseLanguage';

const About = () => {
  const router = useRouter()
  const {text} = useLanguage()

  return (
    <Container  sx={{pb:{xs:0,sm:4,md:6},pt:{xs:0,sm:8,md:12},mx:0}} className='flex center  col '>
         
            <Grid  sx={{pt:12}} container className="flex justify-evenly space-evenly">
                <Grid  item xs={12} sm={6} md={5}>
                <Typography component='h1' className='clr' sx={{pt:4,maxWidth:'600px',fontWeight:500,fontSize:'3em'}}>
                   
                {
  text('You can learn anything.', 'يمكنك تعلم أي شيء.')
}

                </Typography>
                <Typography component='p' sx={{py:2,maxWidth:'620px',color:'#4d4d4d'}}>
                {
  text('Build a deep, solid understanding in math, science, and more.', 'بناء فهم عميق وراسخ في مجالات الرياضيات والعلوم وأكثر.')
}
              
                </Typography>
      
                                   
                                <Btn 
                                onClick={()=>router.push('/about-us')}
                                className='  ' sx={{mt:2,mb:{xs:3,sm:0}}}>
                       {
  text('Start Now', 'ابدأ الآن')
}
                                </Btn>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <Box sx={{height:'400px'}} className="w100 ">

                    <img src="https://cdn.kastatic.org/images/lohp/laptop_collage@2x.png" alt="" className="img contain" />
                  </Box>
                </Grid>
            </Grid>



            <Grid  sx={{my:20}} container className="flex ">
       
                <Grid item xs={12} sm={6} md={7}>
                  <Box sx={{height:'400px'}} className="w100 ">

                    <img src="https://cdn.kastatic.org/images/lohp/faces_collage_2@2x.png" alt="" className="img contain" />
                  </Box>
                </Grid>
                <Grid  item xs={12} sm={6} md={5}>
                <Typography component='h1' className='clr' sx={{pt:4,maxWidth:'600px',fontWeight:500,fontSize:'3em'}}>
                   
                {
  text('Differentiate your classroom and engage every student.', 'قم بتمييز صفك الدراسي وشارك كل طالب.')
}

                </Typography>
                <Typography component='p' sx={{py:2,maxWidth:'620px',color:'#4d4d4d'}}>
                {
  text('We empower teachers to support their entire classroom. 90% of US teachers who have used Khan Academy have found us effective.', 'نمكن المعلمين من دعم فصولهم الدراسية بأكملها. وجد 90٪ من المعلمين في الولايات المتحدة الذين استخدموا Khan Academy أننا فعالون.')
}              
                </Typography>
      
                                   
                                <Btn 
                                onClick={()=>router.push('/about-us')}
                                className='  ' sx={{mt:2,mb:{xs:3,sm:0}}}>
                       {
  text('Start Now', 'ابدأ الآن')
}
                                </Btn>
                </Grid>
            </Grid>
    </Container>
  )
}

export default About