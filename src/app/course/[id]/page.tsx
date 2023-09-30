"use client"
import Btn from '@/Components/Btn/Btn'
import ContentList from '@/Components/ContentList/ContentList'
import { courses } from '@/Components/CoursesSection/CoursesSection'
import Title from '@/Components/Title'
import { Box, Divider, Grid, Typography } from '@mui/material'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const Index = () => {
  const router = useRouter() 
  const {id} = useParams()
  console.log('id: ', id);
  console.log('router: ', router);
  const course = courses.find(i=>Number(i.id) === Number(id))
  console.log('course: ', course);
  if (!course) return <Box>Course Not Found</Box>
  return (
    <Grid maxWidth={'xl'} container sx={{my:12}}>
    
        <Grid item xs={12} sm={8}>
            <Title>{course.name}</Title>
             
            <ContentList summaryContent={course.summaryContent ? course.summaryContent : ['']}/>
                
            
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
                src={`${course.img}`}
                
                alt="" className="img contain" />
              </Box>
              <Box className='flex col' sx={{mt:1}}>
              <Typography sx={{color:'black'}}>

                <strong>Prices:</strong>
              </Typography>
              {/* <Typography sx={{color:'black'}}>

                  1 Person: ${course.price}
                </Typography>
                <Typography sx={{color:'black'}}>
                  1-5 Persons: $50
                </Typography>
                <Typography sx={{color:'black'}}>
                  5 & above Persons: $40
                </Typography> */}
              <Typography sx={{color:'black'}}>

                {
                  course?.coursePrice['1 person']
                }
                </Typography>
                <Divider sx={{my:1}} light></Divider>
                <Box>
                      <Typography sx={{color:'black'}}>
                <strong>Duration:</strong>
                {' '}
              {course.duration}  
          
              
              </Typography>
                </Box>
                 <Divider sx={{my:1}} light></Divider>
                <Box >

                      <Typography sx={{color:'black'}}>

                <strong>Software ver. pref.:</strong>
                {' '}
               {course.softwareVersionPreference}
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
    </Grid>
  )
}

export default Index