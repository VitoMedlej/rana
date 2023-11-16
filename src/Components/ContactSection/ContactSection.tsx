"use client"

import { Box, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import Btn from '../Btn/Btn';

const ContactSection = () => {
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
  return (
    <Grid id='register' container sx={{
      boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
      
      maxWidth:{xs:'98%',lg:'1000px'},transform:{xs:'translateY(-5%)',sm:'translateY(-8%)',md:'translateY(-15%)'},zIndex:1234}} className='auto relative'>
        <Grid className='' sx={{
          borderTopLeftRadius:'20px',
          background:'white',
          borderTopRightRadius:{xs:'20px',md:0}}} item xs={12} md={8} >
            <Box
                sx={{

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    py:3,
                    px:1,
                }}
            >
                <Typography component='h2' sx={{
                    
                   fontSize:'1.85em',pt:4,textAlign:'center',fontWeight:600}}>
                 Join the onBeirut Community
                </Typography>
                <Typography className='center auto' component='h2' sx={{mb:2,maxWidth:'500px',textAlign:'center',fontSize:'1.1em',fontWeight:200}}>
                Ready to shape the future of engineering? Submit your details and let’s get started!
                </Typography>

                <Box ref={form} onSubmit={(e)=>sendMessage(e)} component='form' sx={{gap:1,
          py:2.5,
          maxWidth:{xs:'100%',sm:'500px'},
          margin : ' auto',
            
          
          }} className='flex space-between wrap'>
             
              <TextField 
              
              value={FirstName}

              onChange={(e)=>setFirstName(e?.target?.value)} 
              name={'FullName'} sx={{
              margin :'0 auto'
              
              ,width:{xs:'95%',sm:'99%'},py:1}} variant='outlined' placeholder='First Name'/>
         
             
             
              <TextField name={'Email'} onChange={(e)=>setEmail(e?.target?.value)} variant='outlined' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  }, margin :'0 auto',
                width:{xs:'95%',sm:'99%'},py:1}} type='email' placeholder='Email'/>

                
              <TextField name={'Phone'} 
              value={Phone}

              onChange={(e)=>setPhone(e?.target?.value)} 
              variant='outlined' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  }, margin :'0 auto',
                width:{xs:'95%',sm:'99%'},py:1}} placeholder='Phone Number'/>
             
             <Select
                value={CourseName}
                name={'Course-name'} onChange={(e)=>setCourse(e?.target?.value)} variant='outlined' sx={{
                  margin :'0 auto',
                    width:{xs:'95%',sm:'99%'},py:1}} type='email' placeholder='Email'
                >
                  {
                    ['Etabs-Safe-Sconcrete: (Live & Recorded)', 'Solidworks: (Recorded)', 'Excel Fundamentals: (Recorded)', 'Plaxis: (Live & Recorded)', 'Revit Architecture and Structural: (Live & Recorded)', '3D-MAX: (Live & Recorded)', 'AutoCAD: (Live & Recorded)',  'PT-ADAPT: (Recorded)', 'Robot Structural (Recorded)', 'Primavera P6: (Live & Recorded)', 'Photoshop: (Recorded)'].map(i=>{
                      return <MenuItem key={i} value={`${i}`}>{i}</MenuItem>
                    })
                  }


                </Select>
              <TextField 
              value={Message}
              onChange={(e)=>setMessage(e?.target?.value)} 
              
              name={'Message'}  variant='outlined' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  }, margin :'0 auto',
                width:{xs:'95%',sm:'99%'},py:1}} placeholder='Message'/>
              <Btn
   submit
 sx={{margin:'1em auto',border:'1px solid',width:{xs:'95%',sm:'99%'},mt:2}}>
                <Typography>
                    Send Message
                </Typography>
              </Btn>
            </Box>

            </Box>
        </Grid>
        <Grid
        
        item xs={12} md={4}>
            <Box
                sx={{
        borderTopRightRadius:'20px',
                height:'100%',
                    backgroundColor:'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // width:'100%',
                }}
            >
                <Typography className='clr' sx={{px:1,textAlign:'center',fontSize:'2em',pb:1,fontWeight:'600'}}>
                    About Us
                </Typography>
                <Typography sx={{textAlign:'center',px:1,}}>
                    We combine innovation, precision, and creativity to deliver solutions that meet and exceed your expectations. Join our community of 1200+ students and clients and shape the future of civil engineering with us.
                </Typography>
            </Box>
        </Grid>

    </Grid>
  )
}

export default ContactSection