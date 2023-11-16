"use client"

import React from 'react'
import Title from '../Title'
import { Box, Container, Typography } from '@mui/material'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'
import courses from '../../../courses.json'
import Link from 'next/link'



const CoursesSection = ({limit}:{limit:number}) => {
  const router= useRouter()
  const crs = courses?.map(i=> i.name )
  console.log('crs: ', crs);

  return (
    <>

<Container sx={{maxWidth:'md',background:'#f5f5f5',my:{xs:12,md:14},py:4,borderRadius:'3px'}} className='flex wrap'>
      {[1,2,3].map(i=> <Box key={i} className='flex gap gap2 ' sx={{borderBottom:'1px solid #6a6969',pb:3,mx:1,my:3,width:{xs:'95%',sm:'45%'}}}>
        <Box sx={{height:'50px'}}>
          <img src="https://cdn.kastatic.org/genfiles/topic-icons/icons/math.png-444b34-128c.png" alt="" className="img rounded" />
        </Box>
        <Box sx={{mx:1}}>
            <Typography className='clr' sx={{pb:1,fontWeight:600,fontSize:'1.2em'}}>
              Math: My Course Name Goes - Here
            </Typography>
            <Link href='/' className='decor-none' style={{color:' #1865f2'}}> 
            <Typography sx={{fontWeight:500}}>
              1- Math Course Name 
            </Typography>
            </Link>
            <Link href='/' className='decor-none' style={{color:' #1865f2'}}> 
            <Typography sx={{fontWeight:500}}>
              2- Math Course Name 2 
            </Typography>
            </Link>
            <Link href='/' className='decor-none' style={{color:' #1865f2'}}> 
            <Typography sx={{fontWeight:500}}>
              3- Math Course Name 3 
            </Typography>
            </Link>
        </Box>
      </Box>)}

      

      

    </Container>
    </>
  )
}

export default CoursesSection