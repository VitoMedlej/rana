"use client"
import CoursesSection from '@/Components/CoursesSection/CoursesSection'
import Title from '@/Components/Title'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import res from '../../../courses.json'



 function categorizeCourses(courseArray : any) : any {
  const categorizedArrays : any = {};

  courseArray.forEach((course : any) => {
    const { category, ...rest } = course;

    if (!categorizedArrays[category]) {
      categorizedArrays[category] = [];
    }

    const categoryArray = categorizedArrays[category];

    // Check if an object with the same properties already exists in the category array
    if (!categoryArray.some((c : any) => JSON.stringify(c) === JSON.stringify(rest))) {
      categoryArray.push({ ...rest, category });
    }
  });

  // Convert the object to an array of arrays
  const resultArray = Object.values(categorizedArrays).map((categoryArray) => categoryArray);

  return resultArray;
}



const Index = () => {
  const [data,setData] = useState(null)
  console.log('data: ', data);
  
  const fetcher =async () => {
    try {

      // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-all`)
      // const res = await req.json(); 
      // console.log('res: ', res);
      if (res && res?.data?.products) {
        const newArray = categorizeCourses(res?.data?.products)
        setData(newArray)
      }
    }
    catch(e){
      console.log('e: ', e);

    }
  }
  useEffect(() => {
    
  
    fetcher()

  }, [])
  
  return (
    <>
        <Typography component={'h1'} sx={{pt:6,fontSize:'2em'}} className='center text-center auto'>
        Explore Our Diverse Courses    
        </Typography>
       <CoursesSection data={data} limit={100}/>
    </>
  )
}

export default Index