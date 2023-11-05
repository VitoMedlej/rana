"use client"

import React from 'react'
import Title from '../Title'
import { Box, Typography } from '@mui/material'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import courses from '../../../courses.json'



const CoursesSection = ({limit}:{limit:number}) => {
  const router= useRouter()
  const crs = courses?.map(i=> i.name )
  console.log('crs: ', crs);

  return (
    <>
    <Title sx={{py:8}}>
            BROWESE OUR LATEST COURSES
    </Title>
<Box className='flex wrap'>

{courses && courses.slice(0,Number(limit)).map(i=>{   
  return <Box
  onClick={()=>router.push(`/course/${i.id}?title=${i.name}`)}
  key={i.img} sx={{my:2,mx:1,width:{xs:'98%',sm:'49%',md:'32%'}}}>
        <Box 
        className='pointer'
       
        sx={{width:'100%',height:'250px',minHeight:'200px'}}>
        <img src={`${i.img}`} style={{minHeight:'200px',maxHeight:'400px',}} alt={`Course Main image`} className="img " />
        </Box>
        <Box>
            <Typography className='clr pointer'
          onClick={()=>router.push(`/course/${i}`)}
            
            sx={{mt:1,fontSize:'1.32em',fontWeight:600}}>{i.name} </Typography>
            <Typography sx={{fontSize:'.8em',py:.35}}>{i.duration}</Typography>
            <Typography sx={{fontWeight:600,fontSize:'1.1em'}}>{i.coursePrice['1 person']}</Typography>
        </Box>
</Box>})}
<Box sx={{width:'100%'}} className="flex">

<Btn 
onClick={()=>router.push('/courses')}
sx={{mb:8,mt:4,mx:'auto'}} className='flex '>
  View All
</Btn>
</Box>
    </Box>
    </>
  )
}

export default CoursesSection