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
                             Redefining Excellence in Engineering and Architecture
                                </Typography>
                                <Typography sx={{color:'white',textAlign:'center',fontSize:{xs:'.75em',sm:'.9em'},mt:1,maxWidth:'500px'}}>
                                Whether you are looking for design engineering, certified courses, or corporate training, CivilEnGuide has the right solution for you.
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
                                src={`https://i1.wp.com/news365.co.za/wp-content/uploads/2019/04/Civil-Engineer.jpg?fit=1440%2C960&ssl=1`}
                                alt="Main Carousel Image"/>
                            </Box>

                        </Box>
    
    
    <Grid sx={{mt:12}} container maxWidth='xl'>
        <Grid item xs={12} sm={4}>
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
        </Grid>
        <Grid sx={{mx:1}} xs={12} sm={8}>
            <Box>
            <Box sx={{justifyContent:'space-between'}} className="flex wrap">

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
            </Box>
            </Box>
        </Grid>
        <Grid sx={{mt:16}} xs={12} sm={6}>
        <Box sx={{height:'500px'}}>

<img

    className={`img pointer  
    `}
    // ${item?.className}
    src={`https://i.pinimg.com/736x/4f/56/18/4f56186e8cd088a219d4c50e2ab198af.jpg`}
    alt="Main Carousel Image"/>
</Box>
        </Grid>
        <Grid sx={{mt:{sm:16}}} className='flex bg white center items-center' item xs={12} sm={6}>
            <Box sx={{px:1,py:8}}>
            <Title sx={{color:'white'}}>
            Why Choose CivilEnGuide for Your Engineering and Architecture Needs
                </Title>
                <Typography sx={{color:'white',mx:1,mt:1}}>
                CivilEnGuide is more than just a company. We are a community of professionals who share a vision to redefine excellence in engineering and architecture in Lebanon and the Middle East.
                </Typography>
                <Typography sx={{color:'white',mx:1,mt:1}}>
                We have a proven track record of success, serving over 1200 customers and partnering with more than 15 companies since 2016.
                </Typography>
               
                <Btn
                                onClick={()=>router.push('/')}
                
                v2  sx={{color:'white',mx:1,my:3}}>
                Get a Free Quote
                </Btn>
            </Box>
        </Grid>
    </Grid>
    <Box className='center ' sx={{mt:16}}>
                <Title sx={{textAlign:'center'}}>
                Experience Innovation with CivilEnGuide
                </Title>
                <Typography className='auto' sx={{color:'black',px:1,maxWidth:'700px',mx:1,mt:1,textAlign:'center'}}>
                We believe in turning ideas into reality. Since our inception in 2016, we have been committed to redefining excellence in engineering and architecture across Lebanon and the Middle East. We have successfully served over 1200 customers and partnered with more than 15 companies, offering a range of services from design engineering to certified courses and corporate training. Our team of professionals is dedicated to ensuring quality and client satisfaction.
                </Typography>
    </Box>
    </Box>
    </Box>
  
  )
}

export default Index