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
        desc:'Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.',
        icon: 'https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png',
    },
        {
        title:'Trusted content',
        desc:`
Created by experts, Khan Academy’s library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.`,
        icon: 'https://cdn.kastatic.org/images/lohp/trusted_content_icon.png',

    },    {
        title:'Authorized Instructors',
        desc:'With Khan Academy, teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.',
        icon: 'https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png',

    }
]
const Whyus = () => {
  return (
    <Box id='why-us' sx={{mt:12,py:5}}>
            <Typography component='h1' sx={{fontWeight:500,fontSize:'2.5em',color:'black',textAlign:'center'}}>
            Why Choose Our Academy
            </Typography>
            <Box
             sx={{width:'100%',
             maxWidth:'lg',
             justifyContent:{xs:'center',sm:'space-between'},
             pt:4,
             flexDirection:{xs:'column',sm:'row'}}} className="flex wrap center auto items-center ">

            {
                reasons.map(i=>{
                    return <Box key={i.title} className='flex center col' sx={{minWidth:'100px',width:{xs:'48%',sm:'32%',md:'22%'},mt:6,flex:1,alignItems:'center'}}>
                            <Box sx={{width:'90px'}}>
                                <img src={i.icon} alt="" className="img" />
                            </Box>
                        <Typography  component='h1' sx={{textAlign:'center',
                        fontSize:'1.5em',fontWeight:400,pt:1,color:'black'}}>
                            {i.title}
                        </Typography>
                        <Typography className='clr' sx={{textAlign:'center',maxWidth:'350px',pt:1}}>
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