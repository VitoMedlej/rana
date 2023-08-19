"use client"
import Btn from '@/Components/Btn/Btn'
import Title from '@/Components/Title'
import { Box, Grid, Typography } from '@mui/material'
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
                                TAKE CONTROL OF YOUR AEC BUSINESS!
                                </Typography>
                                <Typography sx={{color:'white',textAlign:'center',fontSize:{xs:'.75em',sm:'.9em'},mt:1,maxWidth:'500px'}}>
                                ENGINEER&apos;S SOFT SKILLS ACCELERATOR is a 20-hour practical training program. It will enhance your professional.
                                </Typography>
                                <Btn sx={{mt:3,width:'220px'}}>
                                    button
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
                <Btn sx={{mx:2}}>
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
            BROWESE OUR LATEST COURSES
                </Title>
                <Typography sx={{color:'white',mx:1,mt:1}}>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laudantium iusto excepturi! Recusandae sunt reprehenderit autem suscipit, repellat quibusdam eligendi sed quod. Velit, quam sit!
                </Typography>
                <Typography sx={{color:'white',mx:1,mt:1}}>
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore laudantium iusto excepturi! Recusandae sunt reprehenderit autem suscipit, repellat quibusdam eligendi sed quod. Velit, quam sit!
                </Typography>
                <Btn v2  sx={{color:'white',mx:1,my:3}}>
                    REGISTER NOW
                </Btn>
            </Box>
        </Grid>
    </Grid>
    <Box className='center ' sx={{mt:16}}>
                <Title sx={{textAlign:'center'}}>
                BROWESE OUR LATEST COURSES
                </Title>
                <Typography className='auto' sx={{color:'black',maxWidth:'700px',mx:1,mt:1,textAlign:'center'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis incidunt doloremque. Dignissimos, laboriosam odit? Hic sunt, architecto distinctio beatae minus impedit sit eligendi animi sapiente eum provident quia magni alias saepe ut! Quis officiis dolorem ipsa consectetur! Saepe quisquam quod quibusdam amet dolorem ipsum explicabo incidunt inventore nesciunt voluptates!
                </Typography>
    </Box>
    </Box>
    </Box>
  
  )
}

export default Index