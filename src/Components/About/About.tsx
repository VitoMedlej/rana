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
    <Container  sx={{py:{xs:0,sm:4,md:6},mx:0}} className='flex center auto  col '>
          <Grid  sx={{py:8}} container className="flex ">
       
       <Grid item xs={12} sm={6} md={7}>
         <Box sx={{height:'400px'}} className="w100 ">

           <img src="https://www.isasa.org/wp-content/uploads/2021/07/matific-image-585x585.jpg" alt="" className="img contain" />
         </Box>
       </Grid>
       <Grid  item xs={12} sm={6} md={5}>
       <Typography component='h1' className='clr' sx={{pt:4,maxWidth:'600px',fontWeight:500,fontSize:'3em'}}>
          
       {
text('Every child deserves the chance to learn.', 'كل طفل يستحق فرصة التعلم.')
}

       </Typography>
       <Typography component='p' sx={{py:2,maxWidth:'620px',color:'#4d4d4d'}}>
       {
text('Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help. You can change the course of a child’s life.', 'نمكن المعلمين من دعم فصولهم الدراسية بأكملها. وجد 90٪ من المعلمين في الولايات المتحدة الذين استخدموا Khan Academy أننا فعالون.')
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

            <Grid  sx={{py:8}} container className="flex justify-evenly space-evenly">
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



            <Grid  sx={{py:8}} container className="flex ">
       
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