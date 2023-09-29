"use client"

import React from 'react'
import Title from '../Title'
import { Box, Typography } from '@mui/material'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'



export const courses = [
  {
    img : `https://ucarecdn.com/972c6818-0439-4174-8f05-da60ca4c0acb/WhatsAppImage20230928at114028_72874c6a.jpg`
    ,id:1,
    name:'Etabs-Safe-Sconcrete',
    price:60,
    length: 7.5
  },
  {
    img : `https://ucarecdn.com/f21026d4-299c-4d86-b070-a4bbc64ce0ff/WhatsAppImage20230928at114343_ba8ed910.jpg`
    ,id:2,
    name:'Revit Architecture and Structural',
    price:70,
    length: 11
  },
  {
    img : `https://ucarecdn.com/8a601023-9f5f-4a90-8a84-2c5952c7f42c/WhatsAppImage20230928at114028_c9d48acf.jpg`
    ,id:3,
    name:'AutoCAD',
    price:60,
    length: 6-8
  },
  
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
          onClick={()=>router.push(`/course/${i.id}?title=${i.name}`)}
        sx={{width:'100%',height:'250px',minHeight:'200px'}}>
        <img src={`${i.img}`} style={{minHeight:'200px',maxHeight:'400px',}} alt={`Course Main image`} className="img " />
        </Box>
        <Box>
            <Typography className='clr pointer'
          onClick={()=>router.push(`/course/${i}`)}
            
            sx={{mt:1,fontSize:'1.32em',fontWeight:600}}>{i.name} </Typography>
            <Typography sx={{fontSize:'.8em',py:.35}}>{i.length}hrs</Typography>
            <Typography sx={{fontWeight:600,fontSize:'1.1em'}}>${i.price}</Typography>
        </Box>
</Box>})}
<Box sx={{width:'100%'}} className="flex">

<Btn sx={{mb:8,mt:4,mx:'auto'}} className='flex '>
  View All
</Btn>
</Box>
    </Box>
    </>
  )
}

export default CoursesSection