"use client"

import { Box, Typography } from '@mui/material'
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import UserReview from '../UserReview/UserReview';
import Title from '../Title';
// import { Autoplay, Pagination } from 'swiper/modules';
// import {FreeMode, Autoplay, Pagination} from "swiper";



// const Clients = [
//     {id:1,
//         description:``,
//         name:'Zekra Advertising Specialist',img:'https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png'},
//         {id:2,
//             description:``,
//             name:'',img:'https://ucarecdn.com/6e360177-750f-4671-8b74-edbc38f20c90/337875439_610147264297606_3941855933110310434_nremovebgpreview.png'},
//         {id:3,
//             description:``,
//             name:`Powerhouse’s Owner `,img:'https://ucarecdn.com/3b40bedc-0aa3-4247-a196-fd05de4d4f87/003011.jpg'}

// ]


const Testimonial = () => {
    const tests = [
        {
            title : `I just love it! -`,
            reviewer:`“(Georges Farah)`,
            description : `I enrolled in CivilEnGuide's architectural course, and it was an absolute game-changer for my career. The instructors were not only knowledgeable but also incredibly supportive. The hands-on training and industry insights were invaluable. Thanks to CivilEnGuide, I've seen a significant improvement in my skills, and I now have the confidence to tackle complex design projects.`
        },
        {
            title :`I knew I made the right choice - `,
            reviewer:`”(Mohamad Baydoun
                )`,
            description : `I can't express how pleased I am with the corporate engineering training we received from CivilEnGuide. The customized program for our team was spot on, and it immediately had a positive impact on our projects. The trainers were experts in their fields, and their practical approach made all the difference. We're grateful for the partnership with CivilEnGuide and the enhancement it brought to our team's capabilities.
            `
        },
        
        {
            title :`They made it work perfectly - `,
            reviewer:`”(Maya Semaan)`,
            description : `CivilEnGuide's engineering courses have been a turning point in my career. The comprehensive curriculum, coupled with the support and mentorship, helped me gain a deeper understanding of the industry. What's remarkable is the emphasis on real-world applications. I now feel well-prepared to excel in the engineering field, and I'm grateful for the career opportunities that have opened up thanks to CivilEnGuide.`
        }
       
    ]
  return (
    <Box className=' flex wrap  ' sx={{width:'100%',height:'100%'}}>
 <Box className='flex col'  sx={{flex:1,width:'100%',pt:'6em'}}>
       <Title>
        Feedbacks
       </Title>
            </Box>
       <Box
            sx={{
            
         
            margin: '0em auto',
            width: '100%',
            maxWidth: 'lg',
            mb:'6em',
            display: {
                xs: 'flex'
            },
            // height: '100%'
        }}>

            <Swiper
                pagination={{
                clickable: true
            }}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                // navigation={true}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={
 {// when window width is >= 320px
 320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  840: {
    slidesPerView: 3,
    spaceBetween: 20
  }
}

                }
                // modules={[ Autoplay, Pagination]}
              >

                {tests.map((item ) => {
                    if (!item.title) 
                        return
                    return <SwiperSlide
                        style={{
                        padding:'2em 0',
                        marginRight: '0 !important'
                    }}
                        key={item.title}>
                         <UserReview title={item.title} reviewer={item.reviewer} description={item.description}/>

                    </SwiperSlide>
                    // return <SwiperSlide className='swiper-wrapper1'
                    // style={{width:'100%',height:'100%'}} key={item._id}>     {/* <HouseCard
                    //   img={property.images[0] || property.images[1]}         width='95%'
                    // id={property.id}         isFeatured={isFeatured !== undefined ? isFeatured :
                    // true}         propertySize={property.propertySize}
                    // type={property.type}         baths={property.bathrooms}
                    // rooms={property.rooms}         currency={property.currency}
                    // price={property.price}         title={property.title}
                    // location={property.location}/> */}          <ProductCard
                    // handleQuickView={handleQuickView}          title={item.title}
                    // images={item.images}          price={item.price}          _id={item._id}
                    //     category={item.category}          /> </SwiperSlide>

                })
}

            </Swiper>
        </Box>
    </Box>
  )
}

export default Testimonial