"use client"

import Btn from "@/Components/Btn/Btn"
import ContentList from "@/Components/ContentList/ContentList"
import Title from "@/Components/Title"
import useLanguage from "@/Hooks/UseLanguage"
import { Grid, Box, Typography, Divider } from "@mui/material"
import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import res from '../../../../courses.json'
// const courses = [
//   {
//          name: "3D-MAX: (Live & Recorded)",
//          duration: "7.5 hours (15 sessions)",
//         secondaryTitle : {en:'English',ar:'Arabic'},
        
//          coursePrice: {
//            "1 person": "$40"
//          },
//          summaryContent: [
//            {
//              titleAr:'', title: "Introduction to 3ds Max",
           
//            },
//            {
//              titleAr:'', title: "Modeling",
            
//            },
//            {
//              titleAr:'', title: "Texturing and Materials",
           
//            },
//            {
//              titleAr:'', title: "Lighting",
           
//            },
//            {
//              titleAr:'', title: "Rendering",
          
//            },
//            {
//              titleAr:'', title: "Animation",
            
//            },
//            {
//              titleAr:'', title: "Particle Systems and Dynamics",
           
//            },
//            {
//              titleAr:'', title: "Architectural Visualization (Optional)",
            
//            },
//            {
//              titleAr:'', title: "Environment Creation",
           
//            },
//            {
//              titleAr:'', title: "Character Modeling and Animation (Optional)",
           
//            },
//            {
//              titleAr:'', title: "Scripting and Automation (Optional)",
           
//            },
//            {
//              titleAr:'', title: "Project Work",
            
//            }
//          ],
//          img: "https:ucarecdn.com/2d9065d6-30ce-40cc-a36c-9ae90d7a025b/57eea15220194ac18a26b18f3000be4b.jfif",
//          id: "832bb2a4-8b8d-11ee-b9d1"
//        },
// ]
const Page = () => {

  const {id} : any= useParams()
   const router = useRouter() 
   const [course,setCourse] = useState<any>(null)
   console.log('course: ', course);

   const {text} = useLanguage()
  
  const fetcher =async () => {
    try {
      // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-all`)
      const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-by-id?id=${id}`,{next:{revalidate:0}});
      const res = await req.json(); 
      console.log('res: ', res);
      if (res && res?.product) {
        // let item = res?.product.find((item:any) => item?._id === id);


        setCourse(res?.product)
      }
    }
    catch(e){
      console.log('e: ', e);

    }
  }


  //  const selector = () => {
  //    try {
  //      if (!course || !id) return
  //      const crs = courses?.find((i:any)=>`${i?.id}` == `${id}`)
  //      if (crs) {
  //        setCourse(crs)
  //      }
  //    }
  //    catch(e) {
  //      console.log('e: ', e);
       
  //    }
  //  }
   useEffect(() => {
     if (id){
 
      fetcher()
     }
   }, [])
   
   console.log('course: ', course);
   if (!course || !id) return <h1>Course Not Found 404</h1>
   return (
     <Grid className='auto' maxWidth={'1200px'} container sx={{py:12}}>
     {
       course && 
     <>
         <Grid item xs={12} sm={8}>
             {/* {course?.name && <Title sx={{
              textAlign:text('left','right'),
              fontSize:'2em'}}>

             {text(course?.name,course?.nameAR || course?.nameAr)}  

             </Title>} */}
             
             <ContentList
             method={{en:course?.method,ar:course?.methodAr}}
             trainer={course?.trainer} secondaryTitle={{en:course?.title,ar:course?.titleAr || course?.nameAr}}
              summaryContent={{en:course?.description ,ar: course?.descriptionAr || course?.description}}/>
                 
             
         </Grid>
         <Grid item xs={12} sm={4}>
             <Box className=' auto' sx={{width:{xs:'95%',sm:'350px'},
           px:1,py:2.5,
           boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px`,
           borderRadius:3,
           }} >
               <Box sx={{height:'auto',maxHeight:'400px'}}>
                 <img
                 style={{borderRadius:0}}
                 src={`${course?.images && course?.images?.length > 0 ? course?.images[0] : 'https://img.freepik.com/free-vector/illustrated-online-certification-screen_23-2148579915.jpg?w=740&t=st=1701292682~exp=1701293282~hmac=bce0a02d19d726c7d1caf653c72b31200554eb543ff1425924b5f4f4754e21f4'}`}
                 
                 alt="" className="img contain " />
               </Box>
               <Box className='flex col' sx={{mt:1}}>
               {/* <Typography sx={{color:'black'}}>
 
                 <strong style={{whiteSpace:'pre'}}>Prices:</strong>
               </Typography> */}
               {/* <Typography sx={{color:'black'}}>
 
 {
   `${course?.fees}`
 }
 </Typography> 
 { course?.priceAr && <strong>Outside Lebanon:</strong>}
 {
  
  course?.priceAr &&     <Typography sx={{color:'black'}}>
 
  ${
    course?.priceAr
  }
  </Typography> 
 } */}
               {/* <Typography sx={{color:'black'}}>
 
                   "1 person": ${course.price}
                 </Typography>
                 <Typography sx={{color:'black'}}>
                   1-5 Persons: $50
                 </Typography>
                 <Typography sx={{color:'black'}}>
                   5 & above Persons: $40
                 </Typography> */}
                {/* {course.coursePrice['1 person'] && (
         <Typography sx={{ color: 'black' }}>
           {`1 person: ${course.coursePrice['1 person']}`}
         </Typography>
       )}
       {course.coursePrice['3-5 persons'] && (
         <Typography sx={{ color: 'black' }}>
           {`1-5 Persons: ${course.coursePrice['3-5 persons']}`}
         </Typography>
       )}
       {course.coursePrice['5 & plus'] && (
         <Typography sx={{ color: 'black' }}>
           {`5 & above Persons: ${course.coursePrice['5 & plus']}`}
         </Typography>
       )}
               <Typography sx={{color:'black'}}>
 
                 {
                   course?.coursePrice['"1 person"']
                 }
                 </Typography> */}
                 <Divider sx={{my:1}} light></Divider>
                 <Box>
                       <Typography sx={{
              direction:text('ltr','rtl'),
                        
                        color:'black'}}>
                 <strong>

                 {text(`Duration:`,`المدة:`)}
                 </strong>

                 {' '}
               {text(`${course?.duration}`,`${course?.durationAr}`)}  
           
               
               </Typography>
              {/* {course?.certificate && typeof course?.certificate === 'string'  && <Typography sx={{pt:1,color:'black'}}>
                 <strong>Certificates:</strong>
                 {' '}
                           
               {course?.certificate}  
    
               </Typography>} */}
               {true
                 && <Typography sx={{
              direction:text('ltr','rtl'),
                  
                  pt:1,color:'black'}}>
                 <strong>
                  {text(`Certificates:`,`الشهادات:`)}
                  </strong>
                 {' '}
                 <li >
               

                 
                 {
                  text('A certificate issued by IATT',`شهادة صادرة عن IATT `)
                 }
                 </li>
                 <li >
                 {
                  text('An internationally accredited certificate (if required) ',`شهادة معتمدة دوليا من البورد الأميركي الكندي (حسب الطلب) `)
                 }
     
</li>
                 {/* {course?.certificate.map((item:any, index:any) => <li key={index}>{item}</li>)} */}
        
        
    
    
               </Typography>}
               
                 </Box>
                  {/* <Divider sx={{my:1}} light></Divider> */}
                 {/* <Box >
 
                       <Typography sx={{color:'black'}}>
 
                 <strong>Software ver. pref.:</strong>
                 {' '}
                {course?.softwareVersionPreference}
               </Typography>
                 </Box> */}
                 <Btn 
                 onClick={()=>router.push('/#contact')}
                 sx={{mt:2}}>
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