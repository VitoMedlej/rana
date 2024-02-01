"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import Title from '../Title'
import {AiFillContacts} from 'react-icons/ai';
import {HiOutlineUsers} from 'react-icons/hi';
import {BsAward} from 'react-icons/bs';
import useLanguage from '@/Hooks/UseLanguage';







const Whyus = () => {
    const {text} = useLanguage()
    const reasons= [
        {
            title: text('Unmatched Expertise', 'أسعار معقولة'),
            desc:  text(`17 years of excellence. Specialized programs. Practical learning. 
            Choose us for unparalleled expertise in translation and training.
            `,
            `17 عامًا من التميز. برامج متخصصة. تدريبات عملية.
            قم باختيارنا لاكتساب خبرة واسعة في مجال الترجمة والتدريب. 
            `),
            icon: 'https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png',
        },
            {
            title:  text('Personalized Guidance', 'محتوى موثوق به'),
            desc:
                text(`Led by Dr. Rana CHEHAB, our elite team provides personalized education. Join us for hands-on courses tailored to your success.`
                
                ,`بقيادة الدكتورة رنا شهاب، يقدم فريقنا النخبة تعليمًا شخصيًا.
                انضم إلينا للحصول على دورات تدريبية مصممة خصيصًا لنجاحك.
               `)
              ,
            icon: 'https://cdn.kastatic.org/images/lohp/trusted_content_icon.png',
    
        },    {
            title:
                text('Your Success, Our Focus', 'مدرسون معتمدون')
              ,
            desc: text('Your success matters. Explore specialized courses, learn from industry experts, and earn international accreditation. Enroll now for a successful journey.', 'نجاحك يهمنا. استكشف الدورات المتخصصة، وتعلم من خبراء العمل، واحصل على الاعتماد الدولي. سجل الآن لبدء رحلة ناجحة.'),
            icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',
    
        }
    ]

  return (
    <Box id='why-us' sx={{mt:12,py:5}}>
            <Typography component='h1' sx={{fontWeight:500,fontSize:'2.5em',
            
      direction:text(`ltr`,'rtl'),
    color:'black',textAlign:'center'}}>
            {
  text('Why Choose Our Academy', 'لماذا تختار أكاديميتنا')
}
            </Typography>
            <Box
             sx={{width:'100%',
             maxWidth:'lg',
             justifyContent:{xs:'center',sm:'space-between'},
             pt:4,
             flexDirection:{xs:'column',sm:'row'}}} className="flex wrap center auto items-center ">

            {
                reasons.map(i=>{
                    return <Box key={i.title} className='flex center col' sx={{minWidth:'100px',width:{xs:'48%',sm:'32%',md:'22%'},mt:6,flex:1,alignItems:'center'}}>
                            <Box sx={{width:'90px'}}>
                                <img src={i.icon} alt="" className="img" />
                            </Box>
                        <Typography  component='h1' sx={{textAlign:'center',
      direction:text(`ltr`,'rtl'),
                        fontSize:'1.5em',fontWeight:400,pt:1,color:'black'}}>
                            {i.title}
                        </Typography>
                        <Typography className='clr' sx={{textAlign:'center',
      direction:text(`ltr`,'rtl'),
                        
                        maxWidth:'350px',pt:1}}>
                        {i.desc}
                        </Typography>
                    </Box>
                })
            }
            </Box>

    </Box>
  )
}

export default Whyus