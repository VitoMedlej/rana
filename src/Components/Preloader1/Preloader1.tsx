"use client"
import Btn from '@/Components/Btn/Btn'
import ContentList from '@/Components/ContentList/ContentList'
import Title from '@/Components/Title'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import courses from '../../../courses.json'



// const courses = [
//   {
//     images: [
//       ""
//     ],
//     img: "https://ucarecdn.com/972c6818-0439-4174-8f05-da60ca4c0acb/WhatsAppImage20230928at114028_72874c6a.jpg",
//     id: "FK0941MCDMFFNF",
//     name: "Etabs-Safe-Sconcrete: (Live & Recorded)",
//     duration: "7.5 hours (5 sessions)",
//     softwareVersionPreference: "2017 +",
//     coursePrice: {
//       "1 person": "$60",
//       "3-5 persons": "$50",
//       "5 & plus": "$40"
//     },
//     summaryContent: [
//       "Full building analysis",
//       "Wind study",
//       "Seismic simulations",
//       "Full design and result extraction",
//       "Rebar for all elements",
//       "Displacement and deflections",
//       "Foundation design",
//       "All types of slabs analysis (1 way / 2 ways / Waffle Slab / Hourdis, etc.)",
//       "Structural element detailing",
//       "Drawings extraction using Sconcrete"
//     ]
//   },
//   {
//     name: "Revit Architecture and Structural: (Live & Recorded)",
//     duration: "11 hours (7 sessions)",
//     softwareVersionPreference: "2018 +",
//     coursePrice: {
//       "1 person": "$70",
//       "3-5 persons": "$55",
//       "5 & plus": "$45"
//     },
//     summaryContent: [
//       "Getting familiar with the User Interface",
//       "Starting a Project",
//       "Working with Modeling Basics",
//       "Controlling the Views",
//       "Working with Sketch-Based Modeling Components",
//       "Controlling the Visibility & Graphics",
//       "Create levels and Grid",
//       "Add all structural elements (columns, walls, beams, slabs, stairs, footings, piles)",
//       "Prepare BOQ",
//       "Adding Schedules & Tags",
//       "Creating Annotation & Details",
//       "Rendering",
//       "Get familiar with Links and how to Import CAD files",
//       "Create a complete 3D Model including all elements",
//       "Landscaping Works",
//       "Structural Rebar for footings, columns, and Slabs",
//       "Creating and printing 'Cartouches'",
//       "Load cases and Combinations/Structural elements design"
//     ],
//     img: "https://ucarecdn.com/f21026d4-299c-4d86-b070-a4bbc64ce0ff/WhatsAppImage20230928at114343_ba8ed910.jpg",
//     id: "KMFK24NK512CKF"
//   },
//   {
//     name: "3D-MAX: (Live & Recorded)",
//     duration: "7.5 hours (15 sessions)",
//     softwareVersionPreference: "2016 +",
//     coursePrice: {
//       "1 person": "$40"
//     },
//     summaryContent: [
//       {
//         title: "Introduction to 3ds Max",
//         content: [
//           "Overview of the 3ds Max interface",
//           "Navigating the workspace and setting up preferences"
//         ]
//       },
//       {
//         title: "Modeling",
//         content: [
//           "Creating 3D models using various techniques, including polygon modeling, spline modeling, and parametric modeling",
//           "Applying modifiers to modify and refine models",
//           "Working with basic 3D shapes and primitives"
//         ]
//       },
//       {
//         title: "Texturing and Materials",
//         content: [
//           "Applying textures and materials to 3D objects",
//           "Using UV mapping for precise texture placement",
//           "Creating custom materials and shaders"
//         ]
//       },
//       {
//         title: "Lighting",
//         content: [
//           "Understanding different types of lights, such as standard, photometric, and daylight systems",
//           "Setting up realistic lighting scenarios for interior and exterior scenes",
//           "Adjusting light parameters for desired effects"
//         ]
//       },
//       {
//         title: "Rendering",
//         content: [
//           "Configuring rendering settings for high-quality output",
//           "Rendering still images and animations",
//           "Post-processing rendered images for enhanced quality"
//         ]
//       },
//       {
//         title: "Animation",
//         content: [
//           "Creating keyframe animations for objects and cameras",
//           "Utilizing the timeline and curve editor for precise animation control",
//           "Working with character rigging and animation"
//         ]
//       },
//       {
//         title: "Particle Systems and Dynamics",
//         content: [
//           "Simulating realistic effects like smoke, fire, and water using particle systems",
//           "Setting up dynamic simulations for objects in motion"
//         ]
//       },
//       {
//         title: "Architectural Visualization (Optional)",
//         content: [
//           "Creating realistic architectural scenes, including interiors and exteriors.",
//           "Using real-world scale and units for accurate architectural modeling."
//         ]
//       },
//       {
//         title: "Environment Creation",
//         content: [
//           "Building 3D environments and landscapes.",
//           "Incorporating vegetation, terrains, and ecosystems."
//         ]
//       },
//       {
//         title: "Character Modeling and Animation (Optional)",
//         content: [
//           "Modeling and rigging characters for animation.",
//           "Creating character animations for games and film."
//         ]
//       },
//       {
//         title: "Scripting and Automation (Optional)",
//         content: [
//           "Introduction to MAXScript for custom tool creation and automation."
//         ]
//       },
//       {
//         title: "Project Work",
//         content: [
//           "Applying 3ds Max skills to real-world projects.",
//           "Creating 3D scenes, animations, and models from concept to completion."
//         ]
//       }
//     ],
//     img: "https://ucarecdn.com/2d9065d6-30ce-40cc-a36c-9ae90d7a025b/57eea15220194ac18a26b18f3000be4b.jfif",
//     id: "515o2kpofIRL24fcD"
//   },
//   {
//     name: "AutoCAD: (Live & Recorded)",
//     duration: "6-8 hours (4-5 sessions)",
//     softwareVersionPreference: "2017 +",
//     coursePrice: {
//       "1 person": "$60",
//       "3-5 persons": "$50",
//       "5 & plus": "$40"
//     },
//     summaryContent: [
//       "Structural & Architectural (2D & 3D)"
//     ],
//     img: "https://ucarecdn.com/8a601023-9f5f-4a90-8a84-2c5952c7f42c/WhatsAppImage20230928at114028_c9d48acf.jpg",
//     id: "420infiovn1240FNIOdzza"
//   }
// ]
const Page = () => {
  
  

 const {id} : any= useParams()
  const router = useRouter() 
  const [course,setCourse] = useState<any>(null)


  const selector = () => {
    try {
      if (!courses || !id) return
      const crs = courses?.find(i=>`${i?.id}` == `${id}`)
      if (crs) {
        setCourse(crs)
      }
    }
    catch(e) {
      console.log('e: ', e);
      
    }
  }
  useEffect(() => {
    if (courses && id){

      selector()
    }
  }, [])
  

  return (
    <Grid maxWidth={'xl'} container sx={{my:12}}>
    {
      course && 
    <>
        <Grid item xs={12} sm={8}>
            <Title>{course?.name}</Title>
             
            <ContentList summaryContent={course?.summaryContent ? course?.summaryContent : ['']}/>
                
            
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box className=' auto' sx={{width:{xs:'95%',sm:'350px'},
          px:1,py:2.5,
          boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px`,
          borderRadius:3,
          }} >
              <Box sx={{height:'250px'}}>
                <img
                style={{borderRadius:0}}
                src={`${course?.img}`}
                
                alt="" className="img contain" />
              </Box>
              <Box className='flex col' sx={{mt:1}}>
              <Typography sx={{color:'black'}}>

                <strong>Prices:</strong>
              </Typography>
              {/* <Typography sx={{color:'black'}}>

                  "1 person": ${course.price}
                </Typography>
                <Typography sx={{color:'black'}}>
                  1-5 Persons: $50
                </Typography>
                <Typography sx={{color:'black'}}>
                  5 & above Persons: $40
                </Typography> */}
              <Typography sx={{color:'black'}}>

                {
                  course?.coursePrice['"1 person"']
                }
                </Typography>
                <Divider sx={{my:1}} light></Divider>
                <Box>
                      <Typography sx={{color:'black'}}>
                <strong>Duration:</strong>
                {' '}
              {course?.duration}  
          
              
              </Typography>
                </Box>
                 <Divider sx={{my:1}} light></Divider>
                <Box >

                      <Typography sx={{color:'black'}}>

                <strong>Software ver. pref.:</strong>
                {' '}
               {course?.softwareVersionPreference}
              </Typography>
                </Box>
                <Btn sx={{mt:2}}>
                  Buy NOW
                </Btn>
              </Box>
              {/* <Box>

              </Box> */}
            </Box>
          </Grid>
    </>
          
          }
    </Grid>
  )


}

export default Page