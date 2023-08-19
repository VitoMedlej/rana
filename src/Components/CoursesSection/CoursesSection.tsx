"use client"

import React from 'react'
import Title from '../Title'
import { Box, Typography } from '@mui/material'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'



const courses = [
  {
    img : `https://ucarecdn.com/dbca4ad9-45cb-4f16-83ec-8cb7f8b4a7b0/357500049_762990498939611_1463081558139298326_n.webp`
  },
  {
    img :`https://ucarecdn.com/314f202d-9f04-4828-90d1-794c1201e041/346518887_6290293551036763_3530198153954500771_n.webp"`
  },
  {
    img : `https://ucarecdn.com/4707ba4f-5794-4ea8-a9cc-12d94b05eadd/364288795_667834304915989_755956409881315696_n.webp`
  }
]
const CoursesSection = () => {
  const router= useRouter()
  return (
    <>
    <Title sx={{py:8}}>
            BROWESE OUR LATEST COURSES
    </Title>
<Box className='flex wrap'>

{courses.map(i=>{   
  return <Box key={i.img} sx={{my:2,mx:1,width:{xs:'98%',sm:'49%',md:'32%'}}}>
        <Box 
        className='pointer'
          onClick={()=>router.push(`/course/${i}`)}
        sx={{width:'100%',maxHeight:'400px',minHeight:'200px'}}>
        <img src={`${i.img}`} style={{minHeight:'200px',maxHeight:'400px',}} alt={`Course Main image`} className="img " />
        </Box>
        <Box>
            <Typography className='clr pointer'
          onClick={()=>router.push(`/course/${i}`)}
            
            sx={{mt:1,fontSize:'1.32em',fontWeight:600}}>COURSE TITLE 1 2 - HD</Typography>
            <Typography sx={{fontSize:'.8em',py:.35}}>Vito Medlej</Typography>
            <Typography sx={{fontWeight:600,fontSize:'1.1em'}}>$50</Typography>
        </Box>
</Box>})}
<Btn sx={{mb:8,mt:4,mx:'auto'}}>
  View All
</Btn>
    </Box>
    </>
  )
}

export default CoursesSection