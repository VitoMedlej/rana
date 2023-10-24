"use client";
import { Typography } from '@mui/material'
import React from 'react'

const Title = ({children,sx}:{sx?:any,children:any}) => {
  return (
    <Typography sx={{my:1,fontSize:{xs:'1.7em',sm:'1.8em'},fontWeight:400,px:1,...sx}}>{children}</Typography>
  )
}

export default Title