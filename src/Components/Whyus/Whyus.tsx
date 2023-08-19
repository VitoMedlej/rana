"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import Title from '../Title'
import {AiFillContacts} from 'react-icons/ai';
import {HiOutlineUsers} from 'react-icons/hi';
import {BsAward} from 'react-icons/bs';




const reasons= [
    {
        title:'Affordable Prices',
        desc:'Engage with a well-written and organized',
        icon: AiFillContacts
    },
        {
        title:'1200+ students',
        desc:'Engage with a well-written and organized',
        icon: HiOutlineUsers
    },    {
        title:'Authorized Instructors',
        desc:'Engage with a well-written and organized',
        icon: BsAward
    }
]
const Whyus = () => {
  return (
    <Box id='why-us' className='bg' sx={{my:8,py:5}}>
            <Title sx={{color:'white',textAlign:'center'}}>
                Why Us
            </Title>
            <Box sx={{width:'100%',justifyContent:'space-between'}} className="flex wrap ">

            {
                reasons.map(i=>{
                    return <Box key={i.title} className='flex center col' sx={{minWidth:'100px',width:{xs:'48%',sm:'32%'},mt:6,flex:1,alignItems:'center'}}>
                            <i.icon fontSize={'3em'} color='white' />
                        <Typography sx={{fontSize:'1.5em',fontWeight:600,color:'white'}}>
                            {i.title}
                        </Typography>
                        <Typography sx={{fontSize:'.8em',color:'white'}}>
                        {i.desc}

                        </Typography>
                    </Box>
                })
            }
            </Box>

    </Box>
  )
}

export default Whyus