"use client";
import { Typography } from '@mui/material'
import React from 'react'

const Title = ({children,sx}:{sx?:any,children:any}) => {
  return (
    <Typography component='h1' sx={{my:1,fontSize:{xs:'1.7em',sm:'2.4em'},fontWeight:500,px:1,...sx}}>{children}</Typography>
  )
}

export default Title