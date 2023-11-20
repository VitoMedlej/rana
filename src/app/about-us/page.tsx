"use client"
import Btn from '@/Components/Btn/Btn'
import Title from '@/Components/Title'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import {AiFillContacts} from 'react-icons/ai';




const reasons= [
    {
  title:'Industry Experts',
       desc:'Engage with a well-written and organized content along with exercises and practicing resources',
        icon: AiFillContacts
    },
        {
  title:'Industry Experts',
       desc:'Engage with a well-written and organized content along with exercises and practicing resources',
        icon: AiFillContacts
    },    {
  title:'Industry Experts',
       desc:'Engage with a well-written and organized content along with exercises and practicing resources',
        icon: AiFillContacts
    },
    {
  title:'Industry Experts',
  desc:'Engage with a well-written and organized content along with exercises and practicing resources',

        icon: AiFillContacts
    }
]

const Index = () => {
    const router = useRouter()

  return (
    <Box sx={{pb:8}}>
    <Box sx={{minHeight:'500px'}}>
           <Box
          className='flex center col  items-center justify-center'

                            sx={{
                                position:'relative',

                                height: '100%',
                            width:'100%'
                        }}>
                            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.5}} className="absolute">

                            </Box>
                            <Box
          className='flex center col items-center justify-center'
                            
                            sx={{
                                top:'50%',
                                px:6,
                                maxWidth:'700px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                margin :'0 auto',
                                position:'absolute'}}>
                             <Typography sx={{textAlign:'center',color:'white',fontSize:{xs:'1.95em',sm:'2.5em',md:'3em'},fontWeight:600}}>
                             {/* Redefining Excellence in Engineering and Architecture */}
                             high-quality translation and learning courses to the globle
                                </Typography>
                                <Typography sx={{color:'white',textAlign:'center',fontSize:{xs:'.75em',sm:'.9em'},mt:1,maxWidth:'500px'}}>
                                We aim to foster an environment that encourages intellectual growth and cultural exchange.


                                </Typography>
                                <Btn
                                onClick={()=>router.push('/')}
                                sx={{mt:3,width:'220px'}}>
                                Contact Us Now
                                </Btn>
                            </Box>
                            <Box sx={{height:'500px',width:'100%'}}>

                            <img
            
                                className={`img pointer  cover
                                `}
                                // ${item?.className}
                                src={`https://ucarecdn.com/64fd9c9b-40da-4b04-b64f-0ff58eaa252f/download.jfif`}
                                alt="Main Carousel Image"/>
                            </Box>

                        </Box>
    
                        <Box className='center ' sx={{mt:16}}>
                <Title sx={{textAlign:'center'}}>
                Why Choose IATT?
                </Title>
                <Typography className='auto' sx={{color:'black',px:1,maxWidth:'700px',mx:1,mt:1,textAlign:'center'}}>
                At IATT, we believe in providing our students with a comprehensive learning experience. Our courses are taught by experienced instructors who are experts in their respective fields. We also offer flexible learning options, including online courses, to cater to the diverse needs of our students.

Join us at the International Academy for Translation and Learning Courses in Lebanon and embark on a journey of learning and discovery.
                </Typography>
    </Box>
    <Grid sx={{my:8}} container maxWidth='xl'>
        {/* <Grid item xs={12} sm={4}>
            <Box>
                <Title>
                    Our Specialties 
                </Title>
                <Btn 
                   onClick={()=>router.push('/')}
                sx={{mx:2}}>
                    Register Now
                </Btn>
            </Box>
        </Grid> */}
        <Grid sx={{mx:1}} xs={12} sm={8}>
            <Box>
            {/* <Box sx={{justifyContent:'space-between'}} className="flex wrap">

            {
                reasons.map(i=>{
                    return <Box key={i.title} className='flex  col' sx={{width:{xs:'48%'}, mt:6}}>
                            <i.icon fontSize={'3em'} className='clr' />
                        <Typography sx={{fontSize:'1.5em',fontWeight:600,color:'black'}}>
                            {i.title}
                        </Typography>
                        <Typography sx={{maxWidth:'400px',fontSize:'.8em',color:'black'}}>
                        {i.desc}

                        </Typography>
                    </Box>
                })
            }
            </Box> */}
            </Box>
        </Grid>
        <Grid sx={{mt:16}} xs={12} sm={6}>
        <Box sx={{height:'500px'}}>

<img

    className={`img pointer  
    `}
    // ${item?.className}
    src={`https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
    alt="Main Carousel Image"/>
</Box>
        </Grid>
        <Grid sx={{mt:{sm:16},background:'#000818 '}} className='flex  white center items-center' item xs={12} sm={6}>
            <Box sx={{px:1,py:8}}>
            <Title sx={{color:'white'}}>
            We offer a wide range of courses, including:
                </Title>
                <Typography sx={{color:'white',mx:1,mt:1}}>
                Translation Studies: This course provides students with the skills necessary to translate texts accurately and effectively between various languages.
                </Typography>
                <Typography sx={{color:'white',mx:1,mt:1}}>
                Language Learning: We offer courses in several languages, including Arabic, English, French, and Spanish. Our language courses are designed to help students achieve fluency and confidence in their chosen language.
                </Typography>
               
                <Btn
                                onClick={()=>router.push('/')}
                
                v2  sx={{color:'white',mx:1,my:3}}>
                Get a Free Quote
                </Btn>
            </Box>
        </Grid>
    </Grid>

    </Box>
    </Box>
  
  )
}

export default Index