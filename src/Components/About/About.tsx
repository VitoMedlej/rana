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

           <img src="https://ucarecdn.com/fd4aae48-154d-412c-9cc2-fa068e52261d/WhatsAppImage20240130at110632.jpeg" alt="" className="img contain" />
         </Box>
       </Grid>
       <Grid  item xs={12} sm={6} md={5}>
       <Typography component='h1' className='clr' sx={{pt:4,
      direction:text(`ltr`,'rtl'),
        
        maxWidth:'600px',fontWeight:500,fontSize:'3em'}}>
          
       {
text('Online Learning: Anytime, Anywhere.', 'التعلم عبر الإنترنت: في أي زمان، وفي أي مكان.')
}

       </Typography>
       <Typography component='p' sx={{py:2,
      direction:text(`ltr`,'rtl'),
        
        maxWidth:'620px',color:'#4d4d4d'}}>
       {
text(`Whether you prefer in-person classes or the flexibility of online learning, we have got you covered. Access our courses seamlessly through Zoom, connecting with a global community of learners.`
,`سواء كنت تفضل الصفوف حضوريًا أو مرونة التعلم عبر الإنترنت، فإننا نقدم لك كل الدعم. يمكنك الوصول إلى دوراتنا بسلاسلة من خلال تطبيق زووم، والتواصل مع مجتمع عالمي من المتعلمين.`)
}              
       </Typography>

                          
                       <Btn 
                       onClick={()=>router.push('/#contact')}
                       className='  ' sx={{mt:2,mb:{xs:3,sm:0}}}>
              {
text('Start Now', 'ابدأ الآن')
}
                       </Btn>
       </Grid>
   </Grid>

            <Grid  sx={{py:8}} container className="flex justify-evenly space-evenly">
                <Grid  item xs={12} sm={6} md={5}>
                <Typography component='h1' className='clr' sx={{pt:4,
      direction:text(`ltr`,'rtl'),
                  
                  maxWidth:'600px',fontWeight:500,fontSize:'3em'}}>
                   
                {
  text('Elevate Your Skills with International Accreditation', 'طور مهاراتك مع الاعتماد الدولي')
}

                </Typography>
                <Typography component='p' sx={{py:2,
      direction:text(`ltr`,'rtl'),
                  
                  maxWidth:'620px',color:'#4d4d4d'}}>
                {
  text(`Participate in our courses, engage in hands-on practice, and witness your skills soar.`,
  `شارك في دوراتنا، وشارك في التدريب العملي، ولاحظ تطور مهاراتك بشكل ملحوظ.`)
}
              
                </Typography>
      
                                   
                                <Btn 
                                onClick={()=>router.push('/courses')}
                                className='  ' sx={{mt:2,mb:{xs:3,sm:0}}}>
                       {
  text('View Courses', 'ابدأ الآن')
}
                                </Btn>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <Box sx={{height:'400px'}} className="w100 ">

                    <img src="https://ucarecdn.com/1e74b1f5-70bf-44b0-9831-2e538e38c497/WhatsAppImage20240131at114912.jpeg" alt="" className="img contain" />
                  </Box>
                </Grid>
            </Grid>



            <Grid  sx={{py:8}} container className="flex ">
       
                <Grid item xs={12} sm={6} md={7}>
                  <Box sx={{height:'400px'}} className="w100 ">

                    <img src="https://ucarecdn.com/12e12243-003a-466f-9134-ef455ff8689a/WhatsAppImage20240130at111746.jpeg" alt="" className="img contain" />
                  </Box>
                </Grid>
                <Grid  item xs={12} sm={6} md={5}>
                <Typography component='h1' className='clr' sx={{pt:4
      ,direction:text(`ltr`,'rtl'),

                  
                  maxWidth:'600px',fontWeight:500,fontSize:'3em'}}>
                   
                {
  text('Our Journey: When and Why We Started.', 'رحلتنا: متى ولماذا ')
}

                </Typography>
                <Typography component='p' sx={{py:2,maxWidth:'620px'
      ,direction:text(`ltr`,'rtl'),
                
                color:'#4d4d4d'}}>
                {
  text(`Established in 2023, the International Academy for Translation and Training has proudly served as a beacon of knowledge for 17 years. Our journey began with a commitment to providing unparalleled education in translation and training, driven by passion and dedication.`
  ,`تأسست الأكاديمية الدولية للترجمة والتدريب عام 2023، وكانت بمثابة منارة للمعرفة لمدة 17 عامًا. بدأت رحلتنا بالتزام بتقديم تعليم لا مثيل له في مجال الترجمة والتدريب، مدفوعة بالشغف والتفاني.`)
}              
                </Typography>
      
                                   
                                <Btn 
                                onClick={()=>router.push('/about-us')}
                                className='  ' sx={{mt:2,mb:{xs:3,sm:0}}}>
                       {
  text('About Us', 'من نحن')
}
                                </Btn>
                </Grid>
            </Grid>
    </Container>
  )
}

export default About