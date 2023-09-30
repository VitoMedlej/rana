"use client"

import React from 'react'
import Title from '../Title'
import { Box, Typography } from '@mui/material'
import Btn from '../Btn/Btn'
import { useRouter } from 'next/navigation'



export const courses = [

  {
    images : [''],
    img : `https://ucarecdn.com/972c6818-0439-4174-8f05-da60ca4c0acb/WhatsAppImage20230928at114028_72874c6a.jpg`
    ,id:1,
    name: "Etabs-Safe-Sconcrete: (Live & Recorded)",
    duration: "7.5 hours (5 sessions)",
    softwareVersionPreference: "2017 +",
    coursePrice: {
        "1 person": "$60",
        "3-5 persons": "$50",
        "5 & plus": "$40"
    },
    summaryContent: [
        "Full building analysis",
        "Wind study",
        "Seismic simulations",
        "Full design and result extraction",
        "Rebar for all elements",
        "Displacement and deflections",
        "Foundation design",
        "All types of slabs analysis (1 way / 2 ways / Waffle Slab / Hourdis, etc.)",
        "Structural element detailing",
        "Drawings extraction using Sconcrete"
    ]
},
{
  name: "Revit Architecture and Structural: (Live & Recorded)",
  duration: "11 hours (7 sessions)",
  softwareVersionPreference: "2018 +",
  coursePrice: {
      "1 person": "$70",
      "3-5 persons": "$55",
      "5 & plus": "$45"
  },
  summaryContent: [
      "Getting familiar with the User Interface",
      "Starting a Project",
      "Working with Modeling Basics",
      "Controlling the Views",
      "Working with Sketch-Based Modeling Components",
      "Controlling the Visibility & Graphics",
      "Create levels and Grid",
      "Add all structural elements (columns, walls, beams, slabs, stairs, footings, piles)",
      "Prepare BOQ",
      "Adding Schedules & Tags",
      "Creating Annotation & Details",
      "Rendering",
      "Get familiar with Links and how to Import CAD files",
      "Create a complete 3D Model including all elements",
      "Landscaping Works",
      "Structural Rebar for footings, columns, and Slabs",
      "Creating and printing 'Cartouches'",
      "Load cases and Combinations/Structural elements design"
  ],
  img : `https://ucarecdn.com/f21026d4-299c-4d86-b070-a4bbc64ce0ff/WhatsAppImage20230928at114343_ba8ed910.jpg`
  ,id:2,
},
{
  name: "AutoCAD: (Live & Recorded)",
  duration: "6-8 hours (4-5 sessions)",
  softwareVersionPreference: "2017 +",
  coursePrice: {
      "1 person": "$60",
      "3-5 persons": "$50",
      "5 & plus": "$40"
  },
  summaryContent: ["Structural & Architectural (2D & 3D)"],
  img : `https://ucarecdn.com/8a601023-9f5f-4a90-8a84-2c5952c7f42c/WhatsAppImage20230928at114028_c9d48acf.jpg`
  ,id:3,
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
            <Typography sx={{fontSize:'.8em',py:.35}}>{i.duration}hrs</Typography>
            <Typography sx={{fontWeight:600,fontSize:'1.1em'}}>${i.coursePrice['1 person']}</Typography>
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