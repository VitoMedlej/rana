"use client"

import { Box, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import Title from '../Title'
import {AiFillAudio} from 'react-icons/ai'
import Btn from '../Btn/Btn'
import useLanguage from '@/Hooks/UseLanguage'
const Contact = () => {
    const form :any = useRef();
    const [status,
        setStatus] = useState(0)
    const [email,
        setEmail] = useState('')
        const [Phone, setPhone] = useState('')
  const [FirstName, setFirstName] = useState('')
  const [CourseName, setCourse] = useState('Course Name 1')

  
  const [Message, setMessage] = useState('')
    const sendMessage = async(e : any) => {
  
      e.preventDefault();
      if (!form.current) 
          return;
          let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!email || !email.match(regexEmail)) {
              setStatus(400)
              return;
          }
          if (!FirstName) {
              setStatus(400)
              return;
          }
       
          if (!Phone) {
              setStatus(400)
              return;
          }
          if (!Message) {
              setStatus(400)
              return;
          }
  
    //   const req = await emailjs.sendForm(`service_eig2qxb`, 'template_gc3j6xq', form.current, '8qJYIm7toZyMq3yN_')
    //   const res = await req
    const res= {status:404};
      setStatus(res ? res?.status : 400)
      if (res?.status && form?.current) {
        form?.current?.reset()
        setFirstName('')
      setPhone('')
          setMessage('')
  }
  };
  const {text} = useLanguage()

  return (
    <Box id='contact' className='flex between col '>
        <Box sx={{mb:4,justifyContent:{xs:'center',sm:'justify-between'}}} className="flex wrap  ">

        {/* {[1,2,3].map(i=>{
            return <Box key={i} sx={{mt:1,width:{xs:'99%',sm:'32%'}}} className='flex row center  items-center'>
            <Box sx={{mx:.5}}>
                    <AiFillAudio  fontSize='2em'/>
            </Box>
            <Box>
                <Typography  sx={{fontSize:'1.25em',fontWeight:600}}> 
Have any questions?
                </Typography>
                <Typography className='clr'>
                    +961 
                </Typography>
            </Box>
        </Box>})} */}
        </Box>


        <Box
                sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color:'white',
                    py:3,
                    px:1,
                }}
            >
                <Typography  className='clr' component='h1' sx={{
                    
                   fontSize:'3em',textAlign:'center',fontWeight:600}}>
                 {
  text('Join Khan Academy today', 'انضم إلى Khan Academy اليوم')
}

                </Typography>
           

                <Box ref={form} onSubmit={(e)=>sendMessage(e)} component='form' sx={{gap:1,
          py:2.5,
          maxWidth:'500px',
          margin : '0 auto',
            
          
          }} className='flex space-between wrap'>
             
              <TextField 
              value={FirstName}
              onChange={(e)=>setFirstName(e?.target?.value)} 
              name={'FullName'} sx={{"& .MuiInputBase-input": {
                backgroundColor: "white"
              },width:'99%',py:1}} variant='outlined' placeholder='First Name'/>
         
             
             
              <TextField name={'Email'} onChange={(e)=>setEmail(e?.target?.value)} variant='outlined' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  },
                width:'99%',py:1}} type='email' placeholder='Email'/>
                <Select
                value={CourseName}
                name={'Course-name'} onChange={(e)=>setCourse(e?.target?.value)} variant='outlined' sx={{
                  "& .MuiInputBase-input": {
                      backgroundColor: "white"
                    },
                  width:'99%',py:1}} type='email' placeholder='Email'
                >
                <MenuItem value={'Course Name 1'}>Course Name1</MenuItem>
                <MenuItem value={'namer'}>Course Name 2</MenuItem>
                <MenuItem value={'namer'}>Course Name 3</MenuItem>
                </Select>
              <TextField name={'Phone'} 
              value={Phone}

              onChange={(e)=>setPhone(e?.target?.value)} 
              variant='outlined' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  },
                width:'99%',py:1,}} placeholder='Phone Number'/>
              <TextField 
              value={Message}
              onChange={(e)=>setMessage(e?.target?.value)} 
              
              name={'Message'}  variant='outlined' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  },
                width:'99%',py:1}} placeholder='Message'/>
              <Btn

   submit
 sx={{border:'1px solid',width:'99%',mt:2,color:'white'}}>
                <Typography>
                    Send Message
                </Typography>
              </Btn>
            </Box>

            </Box>
    </Box>
  )
}

export default Contact