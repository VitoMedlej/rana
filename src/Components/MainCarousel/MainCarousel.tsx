"use client"
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import Btn from '../Btn/Btn';
import { Autoplay } from 'swiper/modules';


const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img : `https://d2doisxcuz2yo7.cloudfront.net/eyJidWNrZXQiOiJtYWFtYXJneSIsImtleSI6Im1lM21hcmdpLXNsaWRlci1iZy01anBnYmFhMTg0ZTAwZDhhZGY4ZS5qcGciLCJlZGl0cyI6eyJmbGF0dGVuIjp7ImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9fSwicmVzaXplIjp7IndpZHRoIjoxMDgwfX19`},
        { img : 'https://d2doisxcuz2yo7.cloudfront.net/eyJidWNrZXQiOiJtYWFtYXJneSIsImtleSI6Im1lM21hcmdpLXNsaWRlci1iYWNrZ3JvdW5kanBnZjUzNTc2YzVhOTg4MWZmMC5qcGciLCJlZGl0cyI6eyJmbGF0dGVuIjp7ImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjB9fSwicmVzaXplIjp7IndpZHRoIjoxMDgwfX19'},
       
     ])
    useEffect(() => {
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        console.log('res?.MainCarousel: ', res?.MainCarousel);
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'lg',
            // maxWidth: 'lg',
            minHeight:'500px',
            maxHeight:{xs:'600px',sm:'90vh',md:'700px'},
            margin: '0 auto',
            height : {xs:'100%',sm:'550px',md:'650px'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                        onClick={() => router.push('/')}
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                        
                                height: '100%',
                            width:'100%'
                        }}>
                            <Box sx={{top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.55}} className="absolute">

                            </Box>
                            <Box sx={{
                                top:'50%',
                                px:{xs:4,sm:5,md:6},
                                maxWidth:'700px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                <Typography sx={{color:'white',fontSize:{xs:'1.95em',sm:'2.5em',md:'3em'},fontWeight:600}}>
                                Engineering Excellence for the Future
                                </Typography>
                                <Typography sx={{color:'white',fontSize:{xs:'.75em',sm:'.9em'},mt:1,maxWidth:'500px'}}>
                               Whether you need design engineering services, certified courses, or corporate training, CivilEnGuide is your trusted partner in engineering excellence. 
                                </Typography>
                                <Btn onClick={()=>router.push('/about')} sx={{mt:3,width:'220px'}}>
                                Learn More
                                </Btn>
                            </Box>
                            <img
            
                                className={`img pointer  
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3