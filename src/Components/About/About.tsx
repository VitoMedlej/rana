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
text('Online Learning: Anytime, Anywhere.', 'كل طفل يستحق فرصة التعلم.')
}

       </Typography>
       <Typography component='p' sx={{py:2,maxWidth:'620px',color:'#4d4d4d'}}>
       {
text('Whether you prefer in-person classes or the flexibility of online learning, we have got you covered. Access our courses seamlessly through Zoom, connecting with a global community of learners.', 'نمكن المعلمين من دعم فصولهم الدراسية بأكملها. وجد 90٪ من المعلمين في الولايات المتحدة الذين استخدموا Khan Academy أننا فعالون.')
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
  text('Elevate Your Skills with International Accreditation', 'يمكنك تعلم أي شيء.')
}

                </Typography>
                <Typography component='p' sx={{py:2,maxWidth:'620px',color:'#4d4d4d'}}>
                {
  text('Participate in our courses, engage in hands-on practice, and witness your skills soar. ', 'بناء فهم عميق وراسخ في مجالات الرياضيات والعلوم وأكثر.')
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
  text('Our Journey: When and Why We Started.', 'قم بتمييز صفك الدراسي وشارك كل طالب.')
}

                </Typography>
                <Typography component='p' sx={{py:2,maxWidth:'620px',color:'#4d4d4d'}}>
                {
  text('Established in 2023, the International Academy for Translation and Training has proudly served as a beacon of knowledge for 17 years. Our journey began with a commitment to providing unparalleled education in translation and training, driven by passion and dedication.  .', 'نمكن المعلمين من دعم فصولهم الدراسية بأكملها. وجد 90٪ من المعلمين في الولايات المتحدة الذين استخدموا Khan Academy أننا فعالون.')
}              
                </Typography>
      
                                   
                                <Btn 
                                onClick={()=>router.push('/about-us')}
                                className='  ' sx={{mt:2,mb:{xs:3,sm:0}}}>
                       {
  text('About Us', 'ابدأ الآن')
}
                                </Btn>
                </Grid>
            </Grid>
    </Container>
  )
}

export default About