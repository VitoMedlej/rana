"use client"
import Btn from '@/Components/Btn/Btn'
import useLanguage from '@/Hooks/UseLanguage'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  const {text} = useLanguage()
  const reasons= [
  
        {
        title:  text('Personalized Guidance', 'محتوى موثوق به'),
        desc:
            text('Led by Dr. Rana CHEHAB, our elite team provides personalized education. Join us for hands-on courses tailored to your success.', 'تم إنشاؤها بواسطة خبراء، مكتبة الدروس والتمارين الموثوقة في Khan Academy تغطي مواضيع الرياضيات والعلوم وأكثر. دائمًا مجانية للمتعلمين والمعلمين.')
          ,
        icon: 'https://cdn.kastatic.org/images/lohp/trusted_content_icon.png',

    },    
    {
      title: text('Service 1', 'أسعار معقولة'),
      desc:  text('17 years of excellence. Specialized programs. Practical learning. Choose us for unparalleled expertise in translation and training.', 'يمارس الطلاب بوتيرة خاصة بهم، يقومون أولاً بسد الفجوات في فهمهم ثم يسرعون في عملية التعلم.'),
      icon: 'https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png',
  },
    {
        title:
            text('Your Success, Our Focus', 'مدرسون معتمدون')
          ,
        desc: text('Your success matters. Explore specialized courses, learn from industry experts, and earn international accreditation. Enroll now for a successful journey.', 'مع Khan Academy، يمكن للمعلمين تحديد الفجوات في فهم طلابهم، ضبط التعليم، وتلبية احتياجات كل طالب.'),
      icon: 'https://cdn.kastatic.org/images/lohp/trusted_content_icon.png',


    },
    {
      title:  text('Personalized Guidance', 'محتوى موثوق به'),
      desc:
          text('Led by Dr. Rana CHEHAB, our elite team provides personalized education. Join us for hands-on courses tailored to your success.', 'تم إنشاؤها بواسطة خبراء، مكتبة الدروس والتمارين الموثوقة في Khan Academy تغطي مواضيع الرياضيات والعلوم وأكثر. دائمًا مجانية للمتعلمين والمعلمين.')
        ,
        icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',

  },    
  {
    title: text('Service 1', 'أسعار معقولة'),
    desc:  text('17 years of excellence. Specialized programs. Practical learning. Choose us for unparalleled expertise in translation and training.', 'يمارس الطلاب بوتيرة خاصة بهم، يقومون أولاً بسد الفجوات في فهمهم ثم يسرعون في عملية التعلم.'),
    icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',
  
},
  {
      title:
          text('Your Success, Our Focus', 'مدرسون معتمدون')
        ,
      desc: text('Your success matters. Explore specialized courses, learn from industry experts, and earn international accreditation. Enroll now for a successful journey.', 'مع Khan Academy، يمكن للمعلمين تحديد الفجوات في فهم طلابهم، ضبط التعليم، وتلبية احتياجات كل طالب.'),
      icon: 'https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png',

  }
]

  return (
    <>
    <Container maxWidth='lg' className='auto'>
      <Box className='auto' sx={{py:4,width:{xs:'99%',sm:'450px'}}}>
        <img src="https://cdn.kastatic.org/images/careers/careers-hero.png" alt="" className="img" />
      </Box>
      <Box>
      <Box>
        <Typography component="h1" className='clr auto center text-center' 
        sx={{fontWeight:400,maxWidth:'500px',fontSize:'2.5em'}}>
       { text('Excellence in Translation and Training.', 'لكل طالب، في كل فصل دراسي. نتائج حقيقية.')}
        </Typography>
        <Typography  className=' auto center text-center' sx={{py:2,color:'#4b4e55',maxWidth:'600px'}}>

        {
  text('Unlock your potential and chart a course to linguistic excellence with the International Academy for Translation and Training.', 'نحن منظمة غير ربحية برسالة توفير تعليم مجاني ومتميز على مستوى العالم لأي شخص في أي مكان.')
}
        </Typography>
        <Box sx={{pt:2}} className="flex gap gap2 auto center">

        <Btn>
        {
  text('Learners', 'المتعلمون')
}
        </Btn>
        <Btn sx={{color:' #1865f2',ml:1,border:'1px solid',background:'transparent'}}>
        {
  text('Courses', 'الدورات')
}
        </Btn>
        </Box>
      </Box>
      </Box>
    

    </Container>
    <Box sx={{mt:8,background:'#f5f5f5',px:{xs:2},py:6}}>
      <Typography component="h1" className='clr auto center text-center' 
        sx={{fontWeight:400,maxWidth:'500px',fontSize:'2em'}}>
       { text('Our Services.', 'لكل طالب، في كل فصل دراسي. نتائج حقيقية.')}
        </Typography>
      <Box
             sx={{width:'100%',
             maxWidth:'lg',
             justifyContent:{xs:'center',sm:'space-between'},
             pt:4,
             flexDirection:{}}} className="flex wrap  auto  ">

            {
                reasons.map(i=>{
                    return <Box key={i.title} className='flex  col' sx={{minWidth:{xs:'100%',md:'350px'},width:{xs:'48%',sm:'32%',md:'22%'},mt:6,flex:1}}>
                            <Box sx={{width:'90px'}}>
                                <img src={i.icon} alt="" className="img" />
                            </Box>
                        <Typography  component='h1' sx={{
                        fontSize:'1.5em',fontWeight:400,pt:1,color:'black'}}>
                            {i.title}
                        </Typography>
                        <Typography className='clr' sx={{maxWidth:'350px',pt:1}}>
                        {i.desc}
                        </Typography>
                    </Box>
                })
            }
            </Box>
      </Box>
    </>

  )
}

export default page