"use client"

import { Box, Grid, TextField, Typography } from '@mui/material'
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
    <Grid container sx={{
      boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px`,
      
      maxWidth:{xs:'98%',lg:'1000px'},transform:{xs:'translateY(-5%)',sm:'translateY(-8%)',md:'translateY(-15%)'},zIndex:1234}} className='auto relative'>
        <Grid className='bg' sx={{
          borderTopLeftRadius:'20px',
          borderTopRightRadius:{xs:'20px',md:0}}} item xs={12} md={8} >
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
                <Typography component='h2' sx={{
                    
                    color:'white',fontSize:'1.85em',pt:4,textAlign:'center',fontWeight:600}}>
                    Sign up today and get %20 off
                </Typography>
                <Typography component='h2' sx={{color:'white',mb:2,textAlign:'center',fontSize:'1.1em',fontWeight:400}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                </Typography>

                <Box ref={form} onSubmit={(e)=>sendMessage(e)} component='form' sx={{gap:1,
          py:2.5,
          maxWidth:{xs:'100%',sm:'500px'},
          margin : ' auto',
            
          
          }} className='flex space-between wrap'>
             
              <TextField 
              
              value={FirstName}

              onChange={(e)=>setFirstName(e?.target?.value)} 
              name={'FullName'} sx={{"& .MuiInputBase-input": {
                backgroundColor: "white",
              },
              margin :'0 auto'
              
              ,width:{xs:'95%',sm:'99%'},py:1}} variant='filled' placeholder='First Name'/>
         
             
             
              <TextField name={'Email'} onChange={(e)=>setEmail(e?.target?.value)} variant='filled' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  }, margin :'0 auto',
                width:{xs:'95%',sm:'99%'},py:1}} type='email' placeholder='Email'/>
              <TextField name={'Phone'} 
              value={Phone}

              onChange={(e)=>setPhone(e?.target?.value)} 
              variant='filled' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  }, margin :'0 auto',
                width:{xs:'95%',sm:'99%'},py:1}} placeholder='Phone Number'/>
              <TextField 
              value={Message}
              onChange={(e)=>setMessage(e?.target?.value)} 
              
              name={'Message'}  variant='filled' sx={{
                "& .MuiInputBase-input": {
                    backgroundColor: "white"
                  }, margin :'0 auto',
                width:{xs:'95%',sm:'99%'},py:1}} placeholder='Message'/>
              <Btn
   submit
 sx={{background:'transparent',margin:'1em auto',border:'1px solid',width:{xs:'95%',sm:'99%'},mt:2,color:'white'}}>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus culpa maxime pariatur porro in atque!
                </Typography>
            </Box>
        </Grid>

    </Grid>
  )
}

export default ContactSection